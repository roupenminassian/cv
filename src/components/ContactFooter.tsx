import { RESUME_DATA } from "@/data/resume-data";

export function ContactFooter() {
  return (
    <footer className="text-sm text-[#666] text-center">
      <hr className="border-[#ddd] my-6" />
      <p>
        <a
          href={`mailto:${RESUME_DATA.contact.email}`}
          className="underline decoration-[#ccc] underline-offset-2 hover:decoration-[#999]"
        >
          {RESUME_DATA.contact.email}
        </a>
        {" | "}
        <a
          href={`tel:${RESUME_DATA.contact.tel}`}
          className="underline decoration-[#ccc] underline-offset-2 hover:decoration-[#999]"
        >
          {RESUME_DATA.contact.tel}
        </a>
      </p>
      <p className="mt-1">
        {RESUME_DATA.contact.social.map((s, i) => (
          <span key={s.name}>
            {i > 0 && " | "}
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#ccc] underline-offset-2 hover:decoration-[#999]"
            >
              {s.name.toLowerCase()}
            </a>
          </span>
        ))}
      </p>
    </footer>
  );
}
