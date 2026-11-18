import type { Metadata } from "next";
import Services from "@/components/Services";
import Enquire from "@/components/Enquire";

export const metadata: Metadata = { title: "Services · HAZURX", description: "Custom software, web, mobile, backend, cloud and product engineering from one accountable engineering partner." };

export default function Page() {
  return (
    <main className="pt-12">
      <Services />
      <Enquire />
    </main>
  );
}
