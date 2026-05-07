export const SITE = {
  name: "Caraibbean Plomberie",
  slogan: "Votre plombier de confiance en Guadeloupe",
  shortDescription:
    "Caraibbean Plomberie intervient dans toute la Guadeloupe pour vos urgences, dépannages et installations.",
  url: "https://caraibbean-plomberie.vercel.app",
  phone: "+590690806399",
  phoneDisplay: "06 90 80 63 99",
  phoneDisplayFull: "+590 690 80 63 99",
  whatsapp: "590690806399",
  whatsappLink: "https://wa.me/590690806399",
  email: "contact@caraibbean-plomberie.fr",
  address: {
    street: "Rue du Dr Marc Joachim",
    postalCode: "97111",
    city: "Morne-à-l'Eau",
    region: "Guadeloupe",
    country: "FR",
  },
  hours: {
    weekdays: "Lundi à vendredi : 7h00 – 20h00",
    weekend: "Samedi & dimanche : fermé",
  },
  zones: [
    "Les Abymes",
    "Pointe-à-Pitre",
    "Sainte-Anne",
    "Morne-à-l'Eau",
    "Baie-Mahault",
    "Goyave",
    "Le Gosier",
    "Petit-Bourg",
    "Le Moule",
    "Saint-François",
    "Capesterre-Belle-Eau",
    "Sainte-Rose",
  ],
};

export const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  icon: string;
  emoji: string;
  title: string;
  short: string;
  long: string;
  features: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "depannage-urgence",
    icon: "Siren",
    emoji: "🚨",
    title: "Dépannage d'urgence",
    short:
      "Interventions rapides 7j/7 pour les fuites, dégâts des eaux et urgences sanitaires.",
    long:
      "Une fuite, un WC bouché, une absence d'eau chaude ? Caraibbean Plomberie répond à vos urgences en moins de 2 heures dans toute la Guadeloupe. Nos artisans interviennent avec un véhicule équipé pour résoudre la majorité des pannes dès la première visite, sans surcoût caché. Le devis est annoncé avant toute intervention pour une transparence totale, et nous travaillons proprement pour limiter les dégâts dans votre logement.",
    features: [
      "Intervention rapide dans toute la Guadeloupe",
      "Diagnostic offert avant chaque réparation",
      "Devis transparent annoncé avant intervention",
      "Outillage professionnel embarqué",
    ],
    image:
      "https://images.unsplash.com/photo-1606274741559-d3a98f24f88e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "detection-fuites",
    icon: "Droplets",
    emoji: "💧",
    title: "Détection et réparation de fuites",
    short:
      "Recherche de fuite non destructive sur réseaux d'eau, gaz et canalisations encastrées.",
    long:
      "Nous localisons précisément les fuites grâce à des méthodes non destructives : caméra thermique, gaz traceur, électroacoustique. Cette précision évite les démolitions inutiles et préserve votre carrelage, vos murs et vos sols. Une fois le point de fuite identifié, nous procédons à la réparation et nous vous remettons un rapport d'intervention que vous pourrez transmettre à votre assurance.",
    features: [
      "Recherche non destructive — pas de casse inutile",
      "Caméra thermique et gaz traceur",
      "Rapport pour assurance fourni",
      "Réparation immédiate après détection",
    ],
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "chauffe-eau",
    icon: "Flame",
    emoji: "🚿",
    title: "Installation et remplacement de chauffe-eau",
    short:
      "Ballon électrique, solaire, gaz ou thermodynamique — pose et remplacement aux normes.",
    long:
      "Spécialistes des chauffe-eau adaptés au climat guadeloupéen, nous installons et remplaçons tout type d'appareil : ballon électrique, solaire, gaz ou thermodynamique. Nous vous conseillons sur le modèle le plus économique selon votre foyer, votre exposition et votre consommation. La pose inclut l'évacuation de l'ancien équipement et la mise aux normes des raccordements.",
    features: [
      "Ballons électriques, solaires, gaz, thermodynamiques",
      "Conseil sur le modèle le plus économique",
      "Évacuation de l'ancien chauffe-eau",
      "Mise aux normes des raccordements",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "debouchage",
    icon: "Wrench",
    emoji: "🔧",
    title: "Débouchage de canalisations",
    short:
      "WC, douche, évier, regards : furet, hydrocurage et inspection caméra.",
    long:
      "Évier qui ne s'écoule plus, WC qui refoule, douche qui stagne ? Nous intervenons rapidement avec un matériel professionnel : furet électrique, hydrocureuse haute pression et caméra d'inspection. Nous identifions la cause exacte du bouchage et, si nécessaire, nous filmons les canalisations pour vérifier l'absence de défaut structurel.",
    features: [
      "Furet électrique et hydrocureuse",
      "Inspection caméra des canalisations",
      "WC, douche, évier, regards extérieurs",
      "Désinfection après intervention",
    ],
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "installation-sanitaire",
    icon: "Bath",
    emoji: "🛁",
    title: "Installation sanitaire complète",
    short:
      "Salle de bain, cuisine : pose, raccordement et mise en service de tous vos équipements.",
    long:
      "Nous prenons en charge l'intégralité de la plomberie pour vos pièces d'eau : douche italienne, baignoire, lavabos, WC suspendus, évier de cuisine, lave-linge, lave-vaisselle. Nous travaillons avec vous sur le choix des équipements pour respecter votre budget et garantir un résultat durable, étanche et conforme aux normes en vigueur.",
    features: [
      "Douche, baignoire, WC suspendus",
      "Évier, lave-linge, lave-vaisselle",
      "Étanchéité garantie",
      "Conseil sur le choix du matériel",
    ],
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "renovation",
    icon: "Home",
    emoji: "🏠",
    title: "Rénovation plomberie",
    short:
      "Refonte complète de votre installation : neuf, rénovation et mise aux normes.",
    long:
      "Pour vos projets de rénovation ou de construction, nous reprenons l'ensemble de l'installation plomberie : alimentation, évacuation, mise aux normes, isolation des conduites. Nous intervenons aussi bien en maison individuelle qu'en local professionnel, avec un planning maîtrisé pour ne pas bloquer les autres corps de métier.",
    features: [
      "Refonte complète d'installation",
      "Neuf et rénovation",
      "Mise aux normes",
      "Coordination avec les autres artisans",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sandrine R.",
    city: "Les Abymes",
    text: "Intervention en moins d'1h pour une fuite urgente. Travail propre et tarif honnête. Je recommande sans hésiter.",
  },
  {
    name: "Jean-Marc P.",
    city: "Pointe-à-Pitre",
    text: "J'ai fait remplacer mon chauffe-eau, prestation impeccable et conseils avisés. Merci !",
  },
  {
    name: "Christelle M.",
    city: "Le Gosier",
    text: "Très professionnel, ponctuel et explique bien le problème. À garder dans ses contacts.",
  },
];

export const REASONS = [
  {
    icon: "Clock",
    title: "Intervention rapide",
    text: "Sur place en moins de 2 heures sur la majorité de la Guadeloupe.",
  },
  {
    icon: "Award",
    title: "Artisan qualifié",
    text: "Plus de 10 ans d'expérience au service des Guadeloupéens.",
  },
  {
    icon: "Euro",
    title: "Devis transparent",
    text: "Gratuit, détaillé, sans engagement et sans frais cachés.",
  },
  {
    icon: "MapPin",
    title: "Toute la Guadeloupe",
    text: "Nous nous déplaçons partout, du Moule à Sainte-Rose.",
  },
];

export const VALUES = [
  {
    icon: "Zap",
    title: "Réactivité",
    text: "Une urgence n'attend pas. Nous décrochons et nous nous déplaçons vite.",
  },
  {
    icon: "ShieldCheck",
    title: "Transparence",
    text: "Devis clair, tarif annoncé avant intervention, aucune surprise.",
  },
  {
    icon: "Award",
    title: "Qualité",
    text: "Matériel professionnel, garanties et finitions soignées.",
  },
  {
    icon: "Heart",
    title: "Proximité",
    text: "Artisan local guadeloupéen, à votre écoute, qui parle votre langue.",
  },
];

export type Realisation = {
  id: string;
  category: "Dépannage" | "Installation" | "Rénovation" | "Urgence";
  title: string;
  description: string;
  image: string;
  imageAfter?: string;
  city: string;
  highlight?: boolean;
};

export const REALISATIONS: Realisation[] = [
  {
    id: "1",
    category: "Rénovation",
    title: "Rénovation salle de bain — Le Gosier",
    description:
      "Refonte complète d'une salle de bain familiale : douche italienne, double vasque, WC suspendu et meubles sur mesure.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
    imageAfter:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80",
    city: "Le Gosier",
    highlight: true,
  },
  {
    id: "2",
    category: "Installation",
    title: "Pose chauffe-eau solaire — Sainte-Anne",
    description:
      "Installation d'un chauffe-eau solaire 300L sur villa, raccordement et mise en service.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    city: "Sainte-Anne",
    highlight: true,
  },
  {
    id: "3",
    category: "Urgence",
    title: "Dégât des eaux — Pointe-à-Pitre",
    description:
      "Intervention d'urgence un dimanche soir : fuite encastrée détectée et réparée sans casse.",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80",
    city: "Pointe-à-Pitre",
    highlight: true,
  },
  {
    id: "4",
    category: "Dépannage",
    title: "Débouchage canalisation — Baie-Mahault",
    description:
      "Hydrocurage haute pression d'une canalisation principale obstruée par des racines.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1600&q=80",
    city: "Baie-Mahault",
  },
  {
    id: "5",
    category: "Installation",
    title: "Cuisine équipée — Petit-Bourg",
    description: "Raccordements complets cuisine : évier, lave-vaisselle, lave-linge.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
    city: "Petit-Bourg",
  },
  {
    id: "6",
    category: "Rénovation",
    title: "Réfection complète — Morne-à-l'Eau",
    description:
      "Reprise complète de la plomberie d'une maison ancienne : alimentation et évacuation.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    city: "Morne-à-l'Eau",
  },
  {
    id: "7",
    category: "Dépannage",
    title: "Réparation fuite WC — Les Abymes",
    description: "Remplacement d'un mécanisme de chasse défectueux et joint de cuvette.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80",
    city: "Les Abymes",
  },
  {
    id: "8",
    category: "Urgence",
    title: "Coupure d'eau chaude — Le Moule",
    description:
      "Diagnostic et remplacement express d'une résistance de chauffe-eau le samedi.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    city: "Le Moule",
  },
  {
    id: "9",
    category: "Installation",
    title: "Salle d'eau de service — Saint-François",
    description: "Création d'une seconde salle d'eau dans extension de villa.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
    city: "Saint-François",
  },
  {
    id: "10",
    category: "Rénovation",
    title: "Mise aux normes — Capesterre-Belle-Eau",
    description: "Mise aux normes complète d'un local commercial avant ouverture.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    city: "Capesterre-Belle-Eau",
  },
  {
    id: "11",
    category: "Dépannage",
    title: "Fuite alimentation — Goyave",
    description: "Remplacement d'une nourrice et de plusieurs flexibles d'alimentation.",
    image:
      "https://images.unsplash.com/photo-1606274741559-d3a98f24f88e?auto=format&fit=crop&w=1600&q=80",
    city: "Goyave",
  },
  {
    id: "12",
    category: "Installation",
    title: "Robinetterie haut de gamme — Sainte-Rose",
    description:
      "Pose de robinetterie thermostatique et accessoires de salle de bain premium.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80",
    city: "Sainte-Rose",
  },
];
