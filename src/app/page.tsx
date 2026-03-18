import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { Prompt } from "@/components/Prompt";
import { DirectoryTree } from "@/components/DirectoryTree";
import { ContactFooter } from "@/components/ContactFooter";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 print:py-8">
      <Prompt />
      <div className="mt-8">
        <ContactFooter />
      </div>
    </main>
  );
}
