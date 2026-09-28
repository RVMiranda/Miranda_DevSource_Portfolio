export interface UniversityProject {
  name: string;
  category: { es: string; en: string };
  description: { es: string; en: string };
  stack: string[];
  links: { label: string; url: string }[];
  verified: boolean;
}

export const universityProjects: UniversityProject[] = [
  {
    name: "Rey Mixterio",
    category: { es: "Experiencia web", en: "Web experience" },
    description: {
      es: "Aplicación web para explorar recetas y recursos de mixología, acompañada por una experiencia de consulta mediante un chat con inteligencia artificial.",
      en: "Web application for exploring mixology recipes and resources, supported by an AI-powered conversational experience.",
    },
    stack: ["React", "Vite", "IA"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/RVMiranda/ReyMixterio_Front.git",
      },
    ],
    verified: false,
  },
  {
    name: "Memorama",
    category: { es: "Algoritmos y lógica", en: "Algorithms & logic" },
    description: {
      es: "Juego de memoria desarrollado como ejercicio académico para aplicar estructuras, control de estado y fundamentos de algoritmos.",
      en: "Memory game developed as an academic exercise in data structures, state control and algorithm fundamentals.",
    },
    stack: ["C#", "Algoritmos", "Desktop"],
    links: [
      {
        label: "Código",
        url: "https://github.com/RVMiranda/Ordinario_Algotimos.git",
      },
    ],
    verified: false,
  },
  {
    name: "GymHub",
    category: { es: "Sistema de gestión", en: "Management system" },
    description: {
      es: "Plataforma para la operación de gimnasios con módulos de entrenadores, horarios y seguimiento de entrenamientos dentro de una aplicación Laravel.",
      en: "Gym operations platform with trainer, schedule and workout tracking modules built as a Laravel application.",
    },
    stack: ["Laravel", "PHP", "Blade", "JavaScript"],
    links: [
      { label: "Repositorio", url: "https://github.com/RVMiranda/Gymhub_API.git" },
    ],
    verified: true,
  },
  {
    name: "Rick y Morty API",
    category: { es: "Consumo de API", en: "API integration" },
    description: {
      es: "Aplicación web en React que consume la API de Rick and Morty y organiza su información en distintas vistas de exploración.",
      en: "React web application that consumes the Rick and Morty API and organizes its data into different exploration views.",
    },
    stack: ["React", "Vite", "JavaScript", "REST API"],
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/RVMiranda/Rick-Morty-API.git",
      },
    ],
    verified: true,
  },
  {
    name: "Firebase Swift App",
    category: { es: "Aplicación iOS", en: "iOS application" },
    description: {
      es: "Aplicación nativa en Swift conectada con Firebase para actualizar contenido y personalizar aspectos de la interfaz en tiempo real.",
      en: "Native Swift application connected to Firebase to update content and customize parts of the interface in real time.",
    },
    stack: ["Swift", "Xcode", "Firebase", "iOS"],
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/RVMiranda/firebaseSwiftApp.git",
      },
    ],
    verified: true,
  },
  {
    name: "Aplicación escolar iOS",
    category: { es: "Arquitectura móvil", en: "Mobile architecture" },
    description: {
      es: "Solución académica con backend en Django como intermediario entre módulos y Firebase, conectada a una app en Swift cuya interfaz y contenido pueden configurarse dinámicamente.",
      en: "Academic solution with a Django backend coordinating modules and Firebase, connected to a Swift app whose interface and content can be configured dynamically.",
    },
    stack: ["Django", "Python", "Swift", "Firebase", "Docker"],
    links: [
      {
        label: "Backend",
        url: "https://github.com/RVMiranda/backend_ordinario_django.git",
      },
      {
        label: "iOS",
        url: "https://github.com/RVMiranda/frontend_ordinario_ios.git",
      },
    ],
    verified: true,
  },
  {
    name: "Cadena de responsabilidad",
    category: { es: "Microservicios", en: "Microservices" },
    description: {
      es: "Conjunto de microservicios en Java que simula el flujo de una aplicación de compras y aplica una cadena de responsabilidad con mensajería y reintentos mediante Kafka.",
      en: "Java microservices that simulate a shopping application flow and apply a chain-of-responsibility pattern with Kafka messaging and retries.",
    },
    stack: ["Java", "Kafka", "Microservicios", "Docker"],
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/RVMiranda/microservices-chain-responsability.git",
      },
    ],
    verified: true,
  },
  {
    name: "Bot de WWE",
    category: { es: "Bot conversacional", en: "Conversational bot" },
    description: {
      es: "Proyecto experimental en Python para construir un bot de Telegram orientado a consultas sobre WWE y explorar la integración de agentes y servicios web.",
      en: "Experimental Python project for a WWE-focused Telegram bot and for exploring agent and web-service integrations.",
    },
    stack: ["Python", "Flask", "Telegram", "Agentes"],
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/RVMiranda/bot_wwe_python.git",
      },
    ],
    verified: true,
  },
];
