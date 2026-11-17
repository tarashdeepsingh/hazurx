import type { Metadata } from "next";
import AboutIntro from "@/components/AboutIntro";
import AboutStory from "@/components/AboutStory";
import Principles from "@/components/Principles";
import Manifesto from "@/components/Manifesto";
import Recognition from "@/components/Recognition";
import Enquire from "@/components/Enquire";

export const metadata: Metadata = { title: "About · HAZURX", description: "Tarashdeep Singh: backend-leaning software developer, founder of HAZURX, and a believer in hard work." };

export default function Page() {
  return (
    <main>
      <AboutIntro />
      <AboutStory />
      <Principles />
      <Manifesto />
      <Recognition />
      <Enquire />
    </main>
  );
}
