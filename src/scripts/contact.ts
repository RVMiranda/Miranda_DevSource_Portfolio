import { copy } from "../i18n";
const form = document.querySelector<HTMLFormElement>("[data-contact]");
if (form) {
  const t = copy[form.dataset.lang === "en" ? "en" : "es"];
  const button = form.querySelector<HTMLButtonElement>("button[type=submit]")!;
  const status = form.querySelector<HTMLElement>(".form-status")!;
  const controls = Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]"),
  );
  const validate = (field: HTMLInputElement | HTMLTextAreaElement) => {
    const message = !field.value.trim()
      ? t.required
      : field.validity.typeMismatch
        ? t.invalidEmail
        : !field.validity.valid
          ? t.required
          : "";
    field.setAttribute("aria-invalid", String(Boolean(message)));
    document.getElementById(`${field.id}-error`)!.textContent = message;
    return !message;
  };
  controls.forEach((field) => {
    field.addEventListener("blur", () => validate(field));
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validate(field);
    });
  });
  form.noValidate = true;
  let pending = false;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (pending) return;
    const checks = controls.map(validate);
    if (checks.includes(false)) {
      controls[checks.indexOf(false)].focus();
      return;
    }
    pending = true;
    button.disabled = true;
    form.setAttribute("aria-busy", "true");
    status.textContent = t.sending;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!response.ok) {
        status.textContent = response.status === 429 ? t.limited : t.error;
        return;
      }
      status.textContent = t.success;
      form.reset();
      controls.forEach((c) => c.removeAttribute("aria-invalid"));
    } catch {
      status.textContent = t.error;
    } finally {
      clearTimeout(timeout);
      pending = false;
      button.disabled = false;
      form.removeAttribute("aria-busy");
    }
  });
}
