import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/realisations/Gallery";
import FinalCTA from "@/components/home/FinalCTA";
import { REALISATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Réalisations — Chantiers de plomberie en Guadeloupe",
  description:
    "Découvrez nos dernières réalisations en plomberie : rénovations, installations, dépannages dans toute la Guadeloupe. Photos avant / après.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  const featured = REALISATIONS.filter((r) => r.highlight).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Nos réalisations"
        title="Des chantiers concrets, partout en Guadeloupe"
        description="Plus de 500 interventions par an, des urgences ponctuelles aux rénovations complètes. Voici une sélection de nos derniers travaux."
      />

      {/* Featured cases */}
      <section className="py-16 md:py-20 bg-gris-clair">
        <div className="container-x">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-eau/10 text-eau text-xs font-bold uppercase tracking-wider mb-3">
              Études de cas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-marine">
              Nos chantiers à la une
            </h2>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {featured.map((r) => (
              <article
                key={r.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-marine/10 transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-marine text-xs font-bold uppercase tracking-wider">
                    {r.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-eau font-bold mb-2">
                    {r.city}
                  </p>
                  <h3 className="font-display font-bold text-marine text-lg mb-2 leading-tight">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gris-text leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <FinalCTA />
    </>
  );
}
