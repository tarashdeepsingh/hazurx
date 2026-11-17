import type { Metadata } from "next";
import Work from "@/components/Work";

export const metadata: Metadata = { title: "Work · HAZURX", description: "Selected projects: Vetko Surveys, PARAKH (NCERT), NIS.Cost (UNICEF) and Isher Holdings." };

export default function Page() {
  return (
    <main className="pt-12">
      <Work />
    </main>
  );
}
