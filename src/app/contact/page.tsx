import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = { title: "Contact · HAZURX" };

export default function Page() {
  return (
    <main>
      <Contact />
    </main>
  );
}
