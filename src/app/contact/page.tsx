import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Demandez votre devis plomberie en Guadeloupe",
  description:
    "Contactez Caraibbean Plomberie pour vos urgences, devis et renseignements. ☎️ 06 90 80 63 99. Morne-à-l'Eau, toute la Guadeloupe.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}, Guadeloupe`
  );
  const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet plomberie"
        description="Une urgence ? Un devis ? Un simple renseignement ? Notre équipe vous répond rapidement, du lundi au vendredi de 7h à 20h."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-marine mb-2">
                Envoyez-nous un message
              </h2>
              <p className="text-gris-text mb-6">
                Plus votre description est précise, plus nous pourrons vous
                proposer une réponse adaptée.
              </p>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-marine text-white p-7 md:p-8 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 100% 0%, rgba(43,161,217,0.7) 0%, transparent 50%)",
                  }}
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-wider text-eau font-bold mb-2">
                    Téléphone
                  </p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="font-bebas text-4xl md:text-5xl tracking-wider hover:text-action transition-colors flex items-center gap-3"
                  >
                    <Phone size={28} strokeWidth={2.4} className="text-action" />
                    {SITE.phoneDisplay}
                  </a>
                  <p className="mt-3 text-sm text-white/75">
                    Appel direct — disponible aux horaires d&apos;ouverture
                  </p>

                  <a
                    href={SITE.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 px-5 h-11 rounded-full bg-[#25D366] hover:bg-[#1eb858] text-white font-semibold transition-colors"
                  >
                    <MessageCircle size={16} fill="currentColor" />
                    Discuter sur WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-gris-clair p-7 space-y-5">
                <InfoRow
                  icon={<MapPin size={20} className="text-eau" />}
                  label="Adresse"
                  value={
                    <>
                      {SITE.address.street}
                      <br />
                      {SITE.address.postalCode} {SITE.address.city}
                      <br />
                      Guadeloupe
                    </>
                  }
                />
                <InfoRow
                  icon={<Clock size={20} className="text-eau" />}
                  label="Horaires"
                  value={
                    <>
                      {SITE.hours.weekdays}
                      <br />
                      {SITE.hours.weekend}
                    </>
                  }
                />
                <InfoRow
                  icon={<Mail size={20} className="text-eau" />}
                  label="Email"
                  value={
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-marine hover:text-eau transition-colors"
                    >
                      {SITE.email}
                    </a>
                  }
                />
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-marine/10 shadow-lg">
                <iframe
                  src={mapsEmbed}
                  title="Localisation Caraibbean Plomberie"
                  className="w-full h-72 md:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid place-items-center w-11 h-11 rounded-xl bg-white text-eau shadow-sm shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-gris-text font-bold mb-1">
          {label}
        </p>
        <p className="text-marine font-medium leading-relaxed">{value}</p>
      </div>
    </div>
  );
}
