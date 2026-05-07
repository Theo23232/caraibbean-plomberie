import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceBlock from "@/components/services/ServiceBlock";
import UrgencyCTA from "@/components/home/UrgencyCTA";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services plomberie en Guadeloupe — Dépannage, fuite, chauffe-eau",
  description:
    "Tous nos services de plomberie en Guadeloupe : dépannage urgence, détection de fuite, chauffe-eau, débouchage, installation sanitaire et rénovation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Plomberie pour particuliers et professionnels"
        description="De la simple intervention à la rénovation complète, Caraibbean Plomberie prend en charge tous vos besoins en plomberie dans toute la Guadeloupe."
      />

      {SERVICES.map((service, i) => (
        <ServiceBlock key={service.slug} service={service} index={i} />
      ))}

      <UrgencyCTA />
    </>
  );
}
