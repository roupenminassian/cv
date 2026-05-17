"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  NARRATIVE,
  type Chapter,
  type NarrativeLink,
  type NarrativeStrike,
  type NarrativeToken,
} from "@/data/narrative";

const REVEAL_OFFSET_RATIO = 0.3;

type Segment = {
  kind: "text" | "link" | "strike";
  href?: string;
  chars: { char: string; index: number }[];
};

type RenderableChapter = {
  id: string;
  segments: Segment[];
};

function buildChapters(chapters: Chapter[]): {
  built: RenderableChapter[];
  total: number;
} {
  let idx = 0;
  const built = chapters.map((ch) => {
    const segments: Segment[] = ch.content.map((token: NarrativeToken) => {
      if (typeof token === "string") {
        const chars = Array.from(token).map((c) => ({
          char: c,
          index: idx++,
        }));
        return { kind: "text", chars };
      }
      if (token.type === "strike") {
        const strike = token as NarrativeStrike;
        const chars = Array.from(strike.label).map((c) => ({
          char: c,
          index: idx++,
        }));
        return { kind: "strike", chars };
      }
      const link = token as NarrativeLink;
      const chars = Array.from(link.label).map((c) => ({
        char: c,
        index: idx++,
      }));
      return { kind: "link", href: link.href, chars };
    });
    return { id: ch.id, segments };
  });
  return { built, total: idx };
}

function Cursor() {
  return (
    <span className="typewriter-cursor" aria-hidden="true">
      ▌
    </span>
  );
}

export function ScrollNarrative() {
  const { built: chapters, total: totalChars } = useMemo(
    () => buildChapters(NARRATIVE),
    [],
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const charTopsRef = useRef<number[]>([]);
  const [revealIndex, setRevealIndex] = useState(-1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollRaf = 0;

    const measure = () => {
      const spans =
        container.querySelectorAll<HTMLElement>("[data-char-index]");
      const tops: number[] = new Array(totalChars);
      const baseY = window.scrollY;
      spans.forEach((el) => {
        const i = Number(el.dataset.charIndex);
        const rect = el.getBoundingClientRect();
        tops[i] = rect.top + baseY;
      });
      charTopsRef.current = tops;
      runReveal();
    };

    const runReveal = () => {
      const tops = charTopsRef.current;
      if (!tops.length) return;
      const threshold =
        window.scrollY + window.innerHeight * (1 - REVEAL_OFFSET_RATIO);
      let lo = 0;
      let hi = tops.length - 1;
      let found = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (tops[mid] !== undefined && tops[mid] < threshold) {
          found = mid;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
      setRevealIndex((prev) => (found > prev ? found : prev));
    };

    const onScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        runReveal();
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      ro.disconnect();
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
    };
  }, [totalChars]);

  const cursorAfter = revealIndex >= 0 ? revealIndex : null;
  const cursorBeforeStart = revealIndex < 0;

  const renderChar = (char: string, index: number, strike = false) => (
    <span
      key={index}
      data-char-index={index}
      className={strike ? "scroll-char line-through" : "scroll-char"}
      style={{ opacity: index <= revealIndex ? 1 : 0 }}
    >
      {char}
    </span>
  );

  return (
    <div ref={containerRef} className="scroll-narrative">
      {chapters.map((ch, ci) => {
        const isFirstChapter = ci === 0;
        return (
          <p key={ch.id} className="mb-10 text-lg leading-[1.8]">
            {isFirstChapter && cursorBeforeStart && <Cursor />}
            {ch.segments.map((seg, si) => {
              const nodes: React.ReactNode[] = [];
              seg.chars.forEach((c) => {
                nodes.push(renderChar(c.char, c.index, seg.kind === "strike"));
                if (cursorAfter === c.index) {
                  nodes.push(<Cursor key={`cursor-${c.index}`} />);
                }
              });
              if (seg.kind === "link" && seg.href) {
                return (
                  <a
                    key={si}
                    href={seg.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-2 decoration-black"
                  >
                    {nodes}
                  </a>
                );
              }
              return <span key={si}>{nodes}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}
