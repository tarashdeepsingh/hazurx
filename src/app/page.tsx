import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProofStrip from "@/components/ProofStrip";
import Pillars from "@/components/Pillars";
import HomeAbout from "@/components/HomeAbout";
import WorkPreview from "@/components/WorkPreview";
import Enquire from "@/components/Enquire";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <ProofStrip />
      <Pillars />
      <WorkPreview />
      <HomeAbout />
      <Enquire />
    </main>
  );
}
