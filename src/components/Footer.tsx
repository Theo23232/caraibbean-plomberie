import Link from "next/link";
import { Phone, MapPin, Clock, Wrench, MessageCircle } from "lucide-react";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import { NAV, SITE, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-marine text-white mt-24">
      <div className="container-x py-14 md:py-20">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-eau">
                <Wrench size={20} strokeWidth={2.4} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display font-bold text-base">
                  Caraibbean
                </span>
                <span className="font-display font-semibold text-eau text-sm -mt-0.5">
                  Plomberie
                </span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              {SITE.slogan}. Artisan plombier agréé en Guadeloupe pour tous vos
              besoins en dépannage, installation et rénovation.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                aria-label="Facebook"
                href="#"
                className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-eau transition-colors"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-eau transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                aria-label="WhatsApp"
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-eau text-sm mb-5">
              Contact rapide
            </h4>
            <a
              href={`tel:${SITE.phone}`}
              className="block group mb-4"
            >
              <span className="text-xs uppercase text-white/50 tracking-wider">
                Téléphone
              </span>
              <span className="block font-bebas text-3xl tracking-wider text-white group-hover:text-action transition-colors flex items-center gap-2 mt-1">
                <Phone size={20} strokeWidth={2.4} />
                {SITE.phoneDisplay}
              </span>
            </a>
            <p className="flex items-start gap-2 text-sm text-white/80 mb-3">
              <MapPin size={16} className="text-eau mt-0.5 shrink-0" />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}
              </span>
            </p>
            <p className="flex items-start gap-2 text-sm text-white/80">
              <Clock size={16} className="text-eau mt-0.5 shrink-0" />
              <span>
                {SITE.hours.weekdays}
                <br />
                {SITE.hours.weekend}
              </span>
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-eau text-sm mb-5">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-action text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-eau text-sm mb-5">
              Nos services
            </h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-action text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Caraibbean Plomberie — Artisan agréé
            Guadeloupe. Tous droits réservés.
          </p>
          <p>
            Zone d'intervention :{" "}
            <span className="text-white/80">
              Toute la Guadeloupe — 971
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
