import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { NarrativeLayout } from "@/components/NarrativeLayout";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: "I design intelligent systems.",
};

export default function Page() {
  return (
    <main>
      <NarrativeLayout />
    </main>
  );
}
