"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const type = String(formData.get("type") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = String(formData.get("website") || "").trim();

  if (honeypot) {
    return { status: "success", message: "Merci, votre demande a bien été reçue." };
  }

  if (!name || !email || !phone || !message) {
    return {
      status: "error",
      message: "Merci de remplir tous les champs obligatoires.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Adresse email invalide." };
  }

  // In production, hook up to your email service (Resend, Mailgun, etc.)
  // We log here so the build stays free of external deps.
  console.log("[contact]", { name, email, phone, type, message });

  return {
    status: "success",
    message:
      "Merci ! Votre demande a bien été envoyée. Nous vous recontactons rapidement.",
  };
}
