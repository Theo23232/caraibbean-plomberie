import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Reviews from "@/components/home/Reviews";
import { SITE, VALUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos — Caraibbean Plomberie, artisan local en Guadeloupe",
  description:
    "Caraibbean Plomberie, artisan plombier basé à Morne-à-l'Eau, plus de 10 ans d'expérience au service des Guadeloupéens. Réactivité, transparence, qualité.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Caraibbean Plomberie, votre artisan local"
        description="Plus qu'une entreprise : un artisan guadeloupéen qui connaît son métier et qui prend soin de ses clients comme de sa famille."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-marine/15">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85"
                alt="Plombier professionnel en intervention"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl">
                <p className="font-display font-bold text-marine">
                  10+ années d&apos;expérience
                </p>
                <p className="text-sm text-gris-text mt-1">
                  Au service des Guadeloupéens depuis 2014
                </p>
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-eau/10 text-eau text-xs font-bold uppercase tracking-wider mb-4">
                Notre histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-marine text-balance leading-tight">
                Implanté à Morne-à-l&apos;Eau, au plus près de vous
              </h2>
              <div className="mt-6 space-y-4 text-gris-text leading-relaxed">
                <p>
                  Né d&apos;une passion pour le travail bien fait et d&apos;une
                  envie de servir au mieux les habitants de la Guadeloupe,
                  Caraibbean Plomberie est aujourd&apos;hui un acteur reconnu
                  du dépannage et de l&apos;installation sanitaire sur
                  l&apos;archipel.
                </p>
                <p>
                  Nous croyons qu&apos;un artisan, c&apos;est avant tout
                  quelqu&apos;un qui répond, qui se déplace, et qui explique.
                  C&apos;est pour ça que vous nous trouverez au bout du fil 7j/7
                  pour vos urgences, et que vous saurez toujours, avant chaque
                  intervention, le coût et le déroulé des travaux.
                </p>
                <p>
                  Du dépannage le plus simple à la rénovation complète, nous
                  utilisons un matériel professionnel adapté au climat
                  tropical et nous garantissons toutes nos interventions.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-action hover:bg-action-dark text-white font-semibold shadow-lg shadow-action/30 transition-all"
                >
                  <Phone size={16} strokeWidth={2.4} />
                  <span className="font-bebas text-xl tracking-wider">
                    {SITE.phoneDisplay}
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border-2 border-marine/15 text-marine hover:bg-marine hover:text-white transition-colors font-semibold"
                >
                  Nous contacter
                  <ArrowRight size={16} strokeWidth={2.4} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gris-clair">
        <div className="container-x">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-eau/10 text-eau text-xs font-bold uppercase tracking-wider mb-4">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marine text-balance max-w-3xl mx-auto">
              Ce qui guide chacune de nos interventions
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 border border-marine/8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-eau/15 to-eau/5 text-eau mb-5">
                  <Icon name={v.icon} size={26} strokeWidth={2.2} />
                </div>
                <h3 className="font-display font-bold text-lg text-marine mb-2">
                  {v.title}
                </h3>
                <p className="text-gris-text text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-marine text-white">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "10+", l: "Années d'expérience" },
              { v: "500+", l: "Interventions / an" },
              { v: "<2h", l: "Délai d'intervention urgence" },
              { v: "100%", l: "Devis transparents" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-bebas text-5xl md:text-6xl text-action tracking-wider">
                  {s.v}
                </p>
                <p className="mt-2 text-sm text-white/75 uppercase tracking-wider">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
}
