import Hero from "@/components/home/Hero";
import Reasons from "@/components/home/Reasons";
import Services from "@/components/home/Services";
import Realisations from "@/components/home/Realisations";
import UrgencyCTA from "@/components/home/UrgencyCTA";
import Reviews from "@/components/home/Reviews";
import Zone from "@/components/home/Zone";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Reasons />
      <Services />
      <Realisations />
      <UrgencyCTA />
      <Reviews />
      <Zone />
      <FinalCTA />
    </>
  );
}
