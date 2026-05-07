"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Phone } from "lucide-react";
import { type Service, SITE } from "@/lib/constants";
import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";

export default function ServiceBlock({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const isReversed = index % 2 === 1;
  return (
    <motion.section
      id={service.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "py-16 md:py-24",
        index % 2 === 0 ? "bg-white" : "bg-gris-clair"
      )}
    >
      <div className="container-x">
        <div
          className={cn(
            "grid gap-10 lg:gap-16 lg:grid-cols-2 items-center",
            isReversed && "lg:[&>*:first-child]:order-2"
          )}
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-marine/15 group">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-5 left-5 grid place-items-center w-14 h-14 rounded-2xl bg-white/95 text-eau backdrop-blur-sm shadow-lg">
              <Icon name={service.icon} size={26} strokeWidth={2.2} />
            </div>
          </div>

          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-eau/10 text-eau text-xs font-bold uppercase tracking-wider mb-4">
              {service.emoji} Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-marine text-balance leading-tight">
              {service.title}
            </h2>
            <p className="mt-5 text-gris-text leading-relaxed">
              {service.long}
            </p>

            <ul className="mt-7 space-y-3">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-noir/85"
                >
                  <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-eau text-white shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-action hover:bg-action-dark text-white font-semibold shadow-lg shadow-action/30 transition-all hover:gap-3"
              >
                Demander un devis
                <ArrowRight size={16} strokeWidth={2.4} />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border-2 border-marine/15 text-marine hover:bg-marine hover:text-white transition-colors font-semibold"
              >
                <Phone size={16} strokeWidth={2.4} />
                Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
