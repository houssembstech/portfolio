export const portfolioData = {
  personalInfo: {
    name: "Houssem Bensalah",
    initials: "HB.",
    role: "Développeur Full Stack & Designer UX/UI",
    roles: [
      "Développeur Full Stack & Designer UX/UI",
      "Spécialiste AR/VR"
    ],
    email: "h.bensalahh@gmail.com",
    phones: ["+216 23 468 877", "+216 99 274 626"],
    location: "Tunisie",
    profileImage: "/profile.jpg",
    cvUrl: "/cv.pdf",
    about: "Passionné par l’innovation digitale, je transforme des idées complexes en expériences web, mobiles et AR/VR fluides et performantes. Mon profil allie expertise technique, créativité visuelle et leadership de projets issu de mon engagement associatif et multimédia. Toujours prêt à relever de nouveaux défis tech et créatifs !"
  },
  skills: [
    {
      title: "Design & Multimédia",
      skills: [
        { name: "Photographie", level: 100 },
        { name: "Adobe Photoshop", level: 100 },
        { name: "Adobe Illustrator", level: 80 },
        { name: "Adobe Premiere pro", level: 80 },
      ],
      tools: ["Figma", "UI/UX", "Production Média"]
    },
    {
      title: "Développement Web",
      skills: [
        { name: "React JS", level: 90 },
        { name: "Node JS", level: 85 },
        { name: "Next JS", level: 85 },
        { name: "Django", level: 60 },
      ],
      tools: ["HTML/CSS", "TailwindCSS", "JavaScript/TypeScript", "MongoDB"]
    },
    {
      title: "Expériences Immersives & Autres",
      skills: [
        { name: "Unity", level: 100 },
        { name: "Blender", level: 85 },
        { name: "3ds Max", level: 70 },
      ],
      tools: ["AR/VR", "C#", "Gestion de projets", "Gestion associative"]
    }
  ],
  education: [
    {
      id: 1,
      type: "education",
      date: "2026",
      title: "Diplômé en ingénierie en Génie Logiciel et Systèmes d'Information",
      organization: "TEK-UP University",
      description: []
    },
    {
      id: 2,
      type: "education",
      date: "2024",
      title: "Mastère professionnel en design d'expérience et design d'interface",
      organization: "ISIMS",
      description: []
    },
    {
      id: 3,
      type: "education",
      date: "2021",
      title: "Diplôme en technologie d'informatique spécialité multimédia et développement web",
      organization: "ISET Kélibia",
      description: []
    }
  ],
  experience: [
    {
      id: 4,
      type: "work",
      date: "Janvier - Juin 2026",
      title: "Stagiaire (Développement Web)",
      organization: "Future Craft",
      description: ["Réalisation d'une application web DIACARE KIDS."]
    },
    {
      id: 5,
      type: "work",
      date: "Juin - Aout 2025",
      title: "Stagiaire (Développement Web)",
      organization: "Twinnoverse",
      description: ["Réalisation d'une application web de parapharmacie."]
    },
    {
      id: 6,
      type: "work",
      date: "2025 - Présent",
      title: "Fondateur et président national",
      organization: "Association Touches d'Art",
      description: ["Gestion d'association et coordination des activités culturelles."]
    },
    {
      id: 7,
      type: "work",
      date: "Février - Juin 2024",
      title: "Stagiaire (AR/VR)",
      organization: "OOUC",
      description: ["Création d'une application AR (Réalité Augmentée)."]
    },
    {
      id: 8,
      type: "work",
      date: "Avril 2024",
      title: "Responsable média",
      organization: "Forum Citoyen International de l'éducation",
      description: ["Production et gestion des médias lors de l'événement."]
    },
    {
      id: 9,
      type: "work",
      date: "2023",
      title: "Stagiaire",
      organization: "Agence de Mise en Valeur du Patrimoine et de Promotion Culturelle",
      description: ["Soutien aux projets culturels et digitaux."]
    },
    {
      id: 10,
      type: "work",
      date: "2022 et 2023",
      title: "Responsable média",
      organization: "JPO ISIMS",
      description: ["Couverture médiatique de l'événement."]
    },
    {
      id: 11,
      type: "work",
      date: "Février - Mars 2022",
      title: "Stagiaire",
      organization: "Nefzawa FM/TV, Département Production",
      description: ["Production multimédia."]
    },
    {
      id: 12,
      type: "work",
      date: "Février - Juin 2021",
      title: "Stagiaire",
      organization: "CGI STUDIO",
      description: ["Participation aux projets du studio CGI."]
    },
    {
      id: 13,
      type: "work",
      date: "Janvier 2020",
      title: "Stagiaire",
      organization: "Radio Monastir",
      description: ["Stage en immersion médiatique."]
    },
    {
      id: 14,
      type: "work",
      date: "Janvier 2019",
      title: "Stagiaire",
      organization: "Tunisie Telecom",
      description: ["Stage de familiarisation."]
    }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  projects: [
    {
      id: 1,
      title: "Portail Excellence School",
      category: "Web",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
      iframeSrc: "https://web-college-two.vercel.app/",
      shortDescription: "Système complet de gestion scolaire (Étudiants, Professeurs, Parents, Admin).",
      description: "Une plateforme éducative et un tableau de bord administratif complet. Ce portail propose une gestion multi-rôles (Directeur, Professeurs, Élèves et Parents), un système de messagerie interne, et un suivi d'activités. Le design a été pensé pour être accessible et percutant.",
      tags: ["Next.js", "TailwindCSS", "Node.js", "MongoDB", "Dashboard UI"],
      demoLink: "https://web-college-two.vercel.app/",
      githubLink: "",
      challenges: "Le défi principal a été de gérer la complexité des rôles avec des espaces de travail dédiés et sécurisés pour chaque type d'utilisateur, le tout sur une interface réactive."
    },
    {
      id: 2,
      title: "DiaCare Kids",
      category: "Web",
      image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=800",
      iframeSrc: "https://dia-care-kids-p6y6.vercel.app/",
      shortDescription: "Application de suivi intelligent du diabète adaptée aux enfants.",
      description: "DiaCare Kids est une plateforme web ludique et éducative aidant les enfants et leurs parents à suivre le diabète au quotidien. Interface très visuelle et gamifiée.",
      tags: ["React", "Santé Digitale", "UI/UX Gamifié", "Future Craft"],
      demoLink: "https://dia-care-kids-p6y6.vercel.app/",
      githubLink: "",
      challenges: "Concevoir une interface UX/UI simple, amusante et rassurante pour des enfants, tout en conservant la rigueur médicale des données nécessaires aux parents et médecins."
    },
    {
      id: 3,
      title: "Dubai Rent Cars",
      category: "Web",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800",
      iframeSrc: "https://www.dubairentcars.org/fr",
      shortDescription: "Plateforme de location de voitures de luxe et SUV à Cannes.",
      description: "Site internet professionnel pour une agence de location de voitures de luxe. Il présente une large flotte (Lamborghini, Ferrari, Rolls Royce) avec un système de réservation VIP et une vitrine élégante reflétant le prestige de la marque.",
      tags: ["Web Design", "E-commerce", "Luxe", "SEO"],
      demoLink: "https://www.dubairentcars.org/fr",
      githubLink: "",
      challenges: "Traduire l'aspect premium et exclusif de la marque à travers le design, tout en garantissant des performances de chargement excellentes avec de nombreuses images haute résolution."
    },
    {
      id: 4,
      title: "Touches D'Art",
      category: "Web",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
      shortDescription: "Site vitrine de l'association culturelle et artistique Touches D'Art.",
      description: "Plateforme web officielle de l'association Touches D'Art, dont je suis le président fondateur. Ce site sert à présenter nos initiatives culturelles, nos événements et notre mission artistique au grand public.",
      tags: ["Associatif", "Culture", "Web Design", "UI/UX"],
      demoLink: "https://www.touchesdart.top/",
      githubLink: "",
      challenges: "Créer une identité visuelle forte et inspirante qui reflète la passion artistique de l'association tout en gardant l'information claire et accessible pour les nouveaux membres."
    },
    {
      id: 5,
      title: "Delyse Food",
      category: "Web",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      iframeSrc: "https://df-1tea.vercel.app/fr",
      shortDescription: "Application web pour un restaurant premium avec menu interactif.",
      description: "Plateforme web vitrine et e-commerce pour Delyse Food, un restaurant haut de gamme. Le site met en avant la carte via un design épuré, élégant, favorisant l'expérience utilisateur et l'appétence visuelle.",
      tags: ["React", "UI/UX", "Restaurant", "Internationalisation"],
      demoLink: "https://df-1tea.vercel.app/fr",
      githubLink: "",
      challenges: "Assurer une expérience utilisateur fluide sur mobile tout en gérant l'internationalisation linguistique et les animations visuelles des plats."
    },
    {
      id: 6,
      title: "Parapharmacie E-commerce",
      category: "Web",
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800",
      iframeSrc: "https://parapharmacie-frontend-six.vercel.app/",
      shortDescription: "Plateforme de commerce électronique moderne pour une parapharmacie.",
      description: "Une plateforme e-commerce moderne et performante pour la vente de produits parapharmaceutiques. Elle offre une expérience utilisateur premium avec des animations soignées (Framer Motion), la gestion de panier, et une interface d'administration pour la gestion globale.",
      tags: ["Next.js", "TailwindCSS", "Framer Motion", "Node.js", "E-commerce"],
      demoLink: "https://parapharmacie-frontend-six.vercel.app/",
      githubLink: "",
      challenges: "Déploiement full-stack avec intégration d'API, gestion sécurisée de l'authentification et conception d'une interface très réactive."
    },
    {
      id: 7,
      title: "Wild Coffees",
      category: "Web",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
      iframeSrc: "https://cafe-three-roan.vercel.app/",
      shortDescription: "Site web complet pour un café avec système de réservation.",
      description: "Wild Coffees est une plateforme web moderne pour un café de qualité supérieure. Le site propose une présentation du menu, un système de réservation de tables interactif et s'appuie sur une architecture complète (frontend et backend).",
      tags: ["Next.js", "TailwindCSS", "MongoDB", "Cloudinary", "Full-Stack"],
      demoLink: "https://cafe-three-roan.vercel.app/",
      githubLink: "",
      challenges: "Mise en place d'un système de réservation fonctionnel avec un design premium, tout en intégrant des services tiers pour la gestion des données."
    },
    {
      id: 8,
      title: "Sarab Quest",
      category: "Web",
      image: "/affiche game.jpg",
      iframeSrc: "https://sarab-quest.vercel.app/",
      shortDescription: "Application web \"phygitale\" pour escape games et chasses au trésor connectées.",
      description: "Plateforme Full-Stack développée sous Next.js et MongoDB gérant des événements de team-building en temps réel. Elle inclut un dashboard administrateur, un lecteur de QR/NFC in-app, et des mécaniques complexes de synchronisation de score et d'alerte. Elle propose une progression par énigmes interactives, du scan NFC/QR Code sur le terrain, et un système multijoueur inédit de sabotage (PvP) et de sauvetage en temps réel entre les équipes.",
      tags: ["Next.js", "MongoDB", "PvP", "NFC/QR", "Real-time", "Full-Stack"],
      demoLink: "https://sarab-quest.vercel.app/",
      githubLink: "",
      challenges: "Mettre en place un système multijoueur complexe de sabotage (PvP) et sauvetage en temps réel avec synchronisation des scores, et intégrer la lecture NFC/QR in-app fluide sur le terrain."
    },
    {
      id: 9,
      title: "Dawini SaaS",
      category: "Web",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      iframeSrc: "https://suiviesante.vercel.app/",
      shortDescription: "Plateforme complète de santé numérique et de gestion de cliniques propulsée par l'IA.",
      description: "Dawini SaaS est une plateforme complète de santé numérique et de gestion de cliniques, conçue pour moderniser la relation patient-médecin. Ce SaaS Full-stack offre un tableau de bord intuitif permettant aux patients de suivre leurs données vitales, et aux médecins de gérer leurs rendez-vous, factures médicales automatisées en PDF, et ordonnances. Le projet intègre une dimension novatrice avec l'Intelligence Artificielle (Google Gemini API), capable d'analyser automatiquement les documents et résultats de laboratoires médicaux téléchargés. Côté technique, l'interface utilisateur dynamique et réactive est propulsée par React (Vite) et Tailwind CSS, hébergée sur Vercel. Le système est soutenu par un backend robuste Python/Django REST Framework, conteneurisé avec Docker et déployé de manière sécurisée via Render. Enfin, la persistance des données massives (utilisateurs, cliniques, factures) est assurée par une base de données cloud MongoDB Atlas. Une solution complète alliant code moderne, sécurité des données médicales et expérience utilisateur Premium.",
      tags: ["React Vite", "Django REST", "Docker", "MongoDB", "Google Gemini API"],
      demoLink: "https://suiviesante.vercel.app/",
      githubLink: "",
      challenges: "Intégration de l'Intelligence Artificielle (API Gemini) pour l'analyse des résultats de laboratoire, génération automatisée de factures PDF, et orchestration d'une architecture full-stack complexe et sécurisée."
    },
    {
      id: 10,
      title: "Hotel Management System & PWA",
      category: "Web",
      image: "https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?auto=format&fit=crop&q=80&w=800",
      iframeSrc: "https://hotel-two-cyan.vercel.app/",
      shortDescription: "Système de Gestion Hôtelière complet : tableau de bord de réception et portail résident (PWA).",
      description: "Développement complet d'une solution numérique intégrée pour le secteur hôtelier. Ce projet comprend un tableau de bord opérationnel hautement sécurisé pour la réception (Front Desk) et une Progressive Web App (PWA) dédiée à l'expérience des résidents. Il vise à moderniser les opérations internes de l'hôtel tout en numérisant l'expérience client, du check-in jusqu'au départ. Les fonctionnalités clés incluent la gestion de caisse individuelle, un Visual Rack interactif, la numérisation des pièces d'identité, et un portail résident privé avec authentification hybride sécurisée et suivi de séjour en temps réel.",
      tags: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Node.js", "MongoDB", "PWA"],
      demoLink: "https://hotel-two-cyan.vercel.app/",
      githubLink: "",
      challenges: "Mettre en place un verrouillage logiciel (Soft-Locking) en temps réel et garantir des transactions atomiques strictes côté backend pour prévenir les conflits de création et assurer l'intégrité des données entre l'état des chambres, les dossiers de réservation et la facturation (Folio)."
    }
  ]
};
