"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { NAV, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
        >
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-marine text-white shadow-md group-hover:scale-105 transition-transform">
            <Wrench size={20} strokeWidth={2.4} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-bold text-marine text-base md:text-lg">
              Caraibbean
            </span>
            <span className="font-display font-semibold text-eau text-xs md:text-sm -mt-0.5">
              Plomberie
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-noir/80 hover:text-marine transition-colors group"
            >
              {item.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-eau scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 md:px-5 h-11 rounded-full bg-action hover:bg-action-dark text-white font-semibold text-sm shadow-lg shadow-action/30 transition-all hover:shadow-xl hover:shadow-action/40 active:scale-95"
          >
            <Phone size={16} strokeWidth={2.4} />
            <span className="font-bebas text-lg tracking-wider">
              {SITE.phoneDisplay}
            </span>
          </a>
          <a
            href={`tel:${SITE.phone}`}
            aria-label="Appeler"
            className="sm:hidden grid place-items-center w-11 h-11 rounded-full bg-action text-white shadow-lg active:scale-95"
          >
            <Phone size={18} strokeWidth={2.4} />
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-11 h-11 rounded-xl border border-marine/15 text-marine hover:bg-marine/5 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden fixed inset-0 top-16 bg-white"
          >
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="container-x flex flex-col gap-2 pt-6 pb-10"
            >
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block w-full text-2xl font-display font-semibold text-marine py-4 border-b border-marine/10"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                href={`tel:${SITE.phone}`}
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-3 w-full h-14 rounded-full bg-action hover:bg-action-dark text-white font-bold shadow-lg shadow-action/30 active:scale-95"
              >
                <Phone size={18} strokeWidth={2.4} />
                <span className="font-bebas text-2xl tracking-wider">
                  {SITE.phoneDisplay}
                </span>
              </motion.a>
              <motion.a
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-full border-2 border-marine/15 text-marine font-semibold"
              >
                Discuter sur WhatsApp
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
