import type { Locale } from "./config";
const es = {
  nav: ["Servicios", "Proyectos", "Sobre mí", "Contacto"],
  skip: "Ir al contenido",
  theme: "Cambiar tema claro u oscuro",
  eyebrow: "DESARROLLO INDEPENDIENTE · MÉRIDA, MÉXICO",
  headline: "Ideas claras.",
  headlineEnd: "Software que resuelve.",
  intro:
    "Transformo procesos complejos en experiencias simples. Desarrollo web, sistemas y aplicaciones con visión de negocio y atención al detalle.",
  cta: "Cuéntame tu proyecto",
  explore: "Explorar proyectos",
  location: "Desde Mérida. Sin fronteras.",
  discipline: "INGENIERÍA + CRITERIO + DISEÑO",
  servicesLabel: "01 / LO QUE PUEDO HACER POR TI",
  servicesTitle: "De la primera idea\na la solución correcta.",
  servicesIntro:
    "Un aliado técnico para entender el problema, construir con intención y acompañar cada decisión.",
  services: [
    {
      name: "Desarrollo web",
      description:
        "Sitios profesionales y plataformas web rápidas, accesibles y pensadas para tus usuarios.",
      tags: "Sitios web · Plataformas · Experiencias",
    },
    {
      name: "Sistemas a medida",
      description:
        "Convierte tareas repetitivas en flujos claros. Gestión, integraciones y herramientas que se adaptan a tu operación.",
      tags: "Automatización · APIs · Bases de datos",
    },
    {
      name: "Aplicaciones móviles",
      description:
        "Lleva tu servicio al bolsillo de tus usuarios, desde el alcance y el prototipo hasta la implementación.",
      tags: "Flutter · Android · iOS",
    },
    {
      name: "Consultoría técnica",
      description:
        "Aterriza tu idea con requerimientos, arquitectura y una ruta de desarrollo que responda a tus prioridades.",
      tags: "Análisis · Arquitectura · Prototipado",
    },
    {
      name: "Gestión de proyectos",
      description:
        "Conecta negocio y equipo técnico con planificación, comunicación y entregas que permiten avanzar con claridad.",
      tags: "Scrum · Kanban · BPMN",
    },
  ],
  projectsLabel: "02 / TRABAJO SELECCIONADO",
  projectsTitle: "El código es el medio.\nEl impacto, el objetivo.",
  projectsIntro:
    "Tres contextos distintos. Una misma intención: hacer que las cosas funcionen mejor.",
  case: "Explorar caso",
  confidential: "Casos anonimizados · Experiencia real",
  concept: "Diagrama conceptual",
  stackLabel: "03 / HERRAMIENTAS CON PROPÓSITO",
  stackTitle: "La tecnología al servicio\ndel problema.",
  stackIntro:
    "Selecciono el stack según el contexto. Mi experiencia principal combina desarrollo full stack, datos y despliegue.",
  stackGroups: [
    "Web y backend",
    "Datos",
    "Entrega y operación",
    "Otras tecnologías y conocimientos",
  ],
  aboutLabel: "04 / DETRÁS DE DEVSOURCE",
  aboutTitle: "Hola, soy Rafael.\nConstruyo con perspectiva.",
  aboutText:
    "Soy ingeniero en Desarrollo de Tecnología y Software. Me interesa tanto cómo se construye una solución como el problema que resuelve. Combino desarrollo full stack, análisis de procesos y coordinación técnica para conectar las necesidades del negocio con el trabajo del equipo.",
  aboutExtra:
    "De la conversación inicial al despliegue, valoro la claridad, la colaboración y el software que hace más sencillo el trabajo de las personas.",
  education: "Ingeniería en Desarrollo de Tecnología y Software",
  university: "Universidad Modelo · 2022–2026",
  cv: "Descargar CV",
  cvNote: "PDF · Español",
  timeline: [
    [
      "2025",
      "Gestión técnica y desarrollo full stack",
      "Coordinación de frontend y backend; plataforma de operación interna.",
    ],
    [
      "2025",
      "Consultoría y desarrollo independiente",
      "Sistema de administración y cobranza escolar.",
    ],
    [
      "2023",
      "Desarrollo frontend · Servicio social",
      "Plataforma de vinculación de productores y comerciantes.",
    ],
  ],
  contactLabel: "05 / SIGUIENTE PASO",
  contactTitle: "Tu próxima idea\nempieza con un hola.",
  contactIntro:
    "Cuéntame qué quieres construir o qué proceso te gustaría mejorar. Encontraremos un buen punto de partida.",
  mail: "Escríbeme por correo",
  alternativeMail: "Usar correo alternativo",
  primaryEmail: "Correo principal",
  alternativeEmail: "Correo alternativo",
  wa: "Conversar por WhatsApp",
  name: "Tu nombre",
  email: "Tu correo",
  service: "¿En qué puedo ayudarte?",
  select: "Selecciona un servicio (opcional)",
  message: "Cuéntame sobre tu proyecto",
  send: "Enviar mensaje",
  sending: "Enviando…",
  success: "Tu mensaje se envió correctamente. Gracias por contarme tu idea.",
  error:
    "No se pudo enviar. Tu mensaje sigue aquí: inténtalo de nuevo o contáctame por correo o WhatsApp.",
  limited:
    "Se alcanzó el límite de envíos. Inténtalo más tarde o contáctame por correo o WhatsApp.",
  required: "Completa este campo.",
  invalidEmail: "Introduce un correo válido.",
  direct: "Conversemos directamente por correo o WhatsApp.",
  privacyNote: "Usaré tus datos únicamente para responder a tu consulta.",
  privacy: "Privacidad",
  footer: "Software con intención. De principio a fin.",
  back: "Volver a proyectos",
  challenge: "El reto",
  contribution: "Mi aportación",
  solution: "La solución",
  outcome: "El resultado",
  projectCta: "¿Tu operación necesita algo similar?",
  notFound: "Esta página no está aquí.",
  home: "Volver al inicio",
};
type Dictionary = { [K in keyof typeof es]: (typeof es)[K] };
const en: Dictionary = {
  nav: ["Services", "Projects", "About", "Contact"],
  skip: "Skip to content",
  theme: "Toggle light or dark theme",
  eyebrow: "INDEPENDENT DEVELOPMENT · MÉRIDA, MEXICO",
  headline: "Clear ideas.",
  headlineEnd: "Software that solves.",
  intro:
    "I turn complex processes into simple experiences. Websites, systems and applications built with business perspective and care for the details.",
  cta: "Tell me about your project",
  explore: "Explore projects",
  location: "From Mérida. Without borders.",
  discipline: "ENGINEERING + PURPOSE + DESIGN",
  servicesLabel: "01 / HOW I CAN HELP",
  servicesTitle: "From the first idea\nto the right solution.",
  servicesIntro:
    "A technical partner to understand the problem, build with purpose and guide each decision.",
  services: [
    {
      name: "Web development",
      description:
        "Professional websites and web platforms that are fast, accessible and designed around your users.",
      tags: "Websites · Platforms · Experiences",
    },
    {
      name: "Custom systems",
      description:
        "Turn repetitive tasks into clear workflows. Management tools and integrations built around your operation.",
      tags: "Automation · APIs · Databases",
    },
    {
      name: "Mobile applications",
      description:
        "Bring your service to your users’ pockets, from scope and prototype through implementation.",
      tags: "Flutter · Android · iOS",
    },
    {
      name: "Technical consulting",
      description:
        "Shape your idea with requirements, architecture and a development roadmap aligned with your priorities.",
      tags: "Analysis · Architecture · Prototyping",
    },
    {
      name: "Project management",
      description:
        "Connect business and technical teams through planning, communication and iterative delivery.",
      tags: "Scrum · Kanban · BPMN",
    },
  ],
  projectsLabel: "02 / SELECTED WORK",
  projectsTitle: "Code is the means.\nImpact is the goal.",
  projectsIntro:
    "Three different contexts. One shared purpose: making things work better.",
  case: "Explore case study",
  confidential: "Anonymized cases · Real experience",
  concept: "Conceptual diagram",
  stackLabel: "03 / TOOLS WITH PURPOSE",
  stackTitle: "Technology in service\nof the problem.",
  stackIntro:
    "I choose the stack to fit the context. My core experience brings together full stack development, data and deployment.",
  stackGroups: [
    "Web & backend",
    "Data",
    "Delivery & operations",
    "Other technologies & knowledge",
  ],
  aboutLabel: "04 / BEHIND DEVSOURCE",
  aboutTitle: "Hi, I’m Rafael.\nI build with perspective.",
  aboutText:
    "I’m a Technology and Software Development engineer. I care about how a solution is built and the problem it solves. I combine full stack development, process analysis and technical coordination to connect business needs with the team’s work.",
  aboutExtra:
    "From the first conversation to deployment, I value clarity, collaboration and software that makes people’s work easier.",
  education: "Engineering in Technology and Software Development",
  university: "Universidad Modelo · 2022–2026",
  cv: "Download CV",
  cvNote: "PDF · In Spanish",
  timeline: [
    [
      "2025",
      "Technical management & full stack development",
      "Frontend and backend coordination; internal operations platform.",
    ],
    [
      "2025",
      "Independent consulting & development",
      "School administration and tuition collection system.",
    ],
    [
      "2023",
      "Frontend development · Community service",
      "Platform connecting local producers and merchants.",
    ],
  ],
  contactLabel: "05 / THE NEXT STEP",
  contactTitle: "Your next idea\nstarts with a hello.",
  contactIntro:
    "Tell me what you want to build or which process you’d like to improve. We’ll find a good place to start.",
  mail: "Email me",
  alternativeMail: "Use alternative email",
  primaryEmail: "Primary email",
  alternativeEmail: "Alternative email",
  wa: "Chat on WhatsApp",
  name: "Your name",
  email: "Your email",
  service: "How can I help?",
  select: "Select a service (optional)",
  message: "Tell me about your project",
  send: "Send message",
  sending: "Sending…",
  success:
    "Your message was sent successfully. Thank you for sharing your idea.",
  error:
    "Could not send your message. It is still here: try again or reach me by email or WhatsApp.",
  limited:
    "The submission limit was reached. Try later or reach me by email or WhatsApp.",
  required: "Please complete this field.",
  invalidEmail: "Enter a valid email address.",
  direct: "Let’s talk directly by email or WhatsApp.",
  privacyNote: "I will only use your details to respond to your inquiry.",
  privacy: "Privacy",
  footer: "Software with purpose. From start to finish.",
  back: "Back to projects",
  challenge: "The challenge",
  contribution: "My contribution",
  solution: "The solution",
  outcome: "The outcome",
  projectCta: "Does your operation need something similar?",
  notFound: "This page isn’t here.",
  home: "Back to home",
};
export const copy: Record<Locale, Dictionary> = { es, en };
