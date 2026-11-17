import type { Metadata } from "next";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import SkillsExplorer from "@/components/SkillsExplorer";
import Recognition from "@/components/Recognition";
import Enquire from "@/components/Enquire";

export const metadata: Metadata = { title: "Experience · HAZURX", description: "Real-time bidding platforms and national-scale dashboards for NCERT and UNICEF." };

export default function Page() {
  return (
    <main className="pt-12">
      <Experience />
      <CaseStudies />
      <SkillsExplorer />
      <Recognition />
      <Enquire />
    </main>
  );
}
