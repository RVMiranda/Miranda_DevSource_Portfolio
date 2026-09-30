export const site = {
  name: "Miranda DevSource",
  email: "contacto@mirandadevsource.com",
  alternativeEmail: "rv.miranda.builds@gmail.com",
  phone: "+52 998 601 7858",
  github: "https://github.com/RVMiranda",
  linkedin: "https://www.linkedin.com/in/rafael-miranda-cruz-243120384",
  cv: "/downloads/CV_Rafael_Miranda.pdf",
};
export type Locale = "es" | "en";
export const locales: Locale[] = ["es", "en"];
export const whatsapp = (lang: Locale) =>
  "https://wa.me/529986017858?text=" +
  encodeURIComponent(
    lang === "es"
      ? "Hola Rafael, me interesa conversar sobre un proyecto de software."
      : "Hi Rafael, I would like to discuss a software project.",
  );
const rawEndpoint = import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || "";
export const formEndpoint = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(
  rawEndpoint,
)
  ? rawEndpoint
  : "";
