import { RESUME_DATA } from "@/data/resume-data";
import { DirectoryTree } from "@/components/DirectoryTree";

export function Prompt() {
  const now = new Date();
  const date = now.toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return (
    <div className="border border-[#e0e0e0] rounded overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#e0e0e0] bg-[#f5f5f5]">
        <span className="text-xs text-[#999]">~/roupenminassian</span>
        <span className="text-xs text-[#999]">
          {date} {hours}<span className="colon-blink">:</span>{minutes}
        </span>
      </div>
      <div className="px-4 pt-4 pb-4">
        <p className="text-sm text-[#666] mb-6">
          {RESUME_DATA.summary}
          <span className="cursor-blink" />
        </p>
        <DirectoryTree />
      </div>
    </div>
  );
}
