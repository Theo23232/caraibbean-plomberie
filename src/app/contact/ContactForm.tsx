"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertTriangle } from "lucide-react";
import { submitContact, type ContactState } from "./actions";

const initial: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-white border border-eau/30 p-8 shadow-xl"
      >
        <div className="grid place-items-center w-14 h-14 rounded-full bg-eau/15 text-eau mb-5">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="font-display font-bold text-2xl text-marine mb-2">
          Demande envoyée !
        </h3>
        <p className="text-gris-text leading-relaxed">{state.message}</p>
      </motion.div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl bg-white border border-marine/8 p-6 md:p-8 shadow-xl space-y-5"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nom *" name="name" required />
        <Field label="Téléphone *" name="phone" type="tel" required />
      </div>

      <Field label="Email *" name="email" type="email" required />

      <div>
        <label className="block text-sm font-semibold text-marine mb-2">
          Type d&apos;intervention *
        </label>
        <select
          name="type"
          required
          defaultValue="Renseignement"
          className="w-full h-12 px-4 rounded-xl border border-marine/15 bg-gris-clair text-marine focus:outline-none focus:ring-2 focus:ring-eau focus:border-eau transition-colors"
        >
          <option value="Urgence">🚨 Urgence — intervention rapide</option>
          <option value="Devis">📋 Demande de devis</option>
          <option value="Renseignement">💬 Renseignement</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-marine mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre problème ou votre projet…"
          className="w-full px-4 py-3 rounded-xl border border-marine/15 bg-gris-clair text-marine focus:outline-none focus:ring-2 focus:ring-eau focus:border-eau transition-colors resize-none"
        />
      </div>

      {state.status === "error" && (
        <p className="flex items-start gap-2 text-sm text-action-dark bg-action/10 border border-action/20 rounded-xl p-3">
          <AlertTriangle size={16} className="mt-0.5 shrink-0" />
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center gap-2 h-13 py-4 rounded-full bg-action hover:bg-action-dark text-white font-bold shadow-lg shadow-action/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:gap-3"
      >
        {pending ? "Envoi…" : "Envoyer ma demande"}
        {!pending && <Send size={16} strokeWidth={2.4} />}
      </button>

      <p className="text-xs text-gris-text text-center">
        En envoyant ce formulaire, vous acceptez d&apos;être recontacté par
        Caraibbean Plomberie.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-marine mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full h-12 px-4 rounded-xl border border-marine/15 bg-gris-clair text-marine focus:outline-none focus:ring-2 focus:ring-eau focus:border-eau transition-colors"
      />
    </div>
  );
}
