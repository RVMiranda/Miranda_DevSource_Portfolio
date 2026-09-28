import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("case studies, privacy and static assets are reachable", async ({
  page,
  request,
}) => {
  for (const lang of ["es", "en"]) {
    for (const path of [
      "desarrollo-web-merida/",
      "proyectos/",
      "projects/operations/",
      "projects/school/",
      "projects/producers/",
      "privacy/",
    ]) {
      const response = await page.goto(`/${lang}/${path}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(
        (
          await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa"])
            .analyze()
        ).violations,
      ).toEqual([]);
    }
  }
  for (const path of [
    "/social.png",
    "/favicon.svg",
    "/robots.txt",
    "/sitemap-index.xml",
  ])
    expect((await request.get(path)).ok()).toBeTruthy();
});

test("service process and project archive expose complete, localized content", async ({
  page,
}) => {
  for (const lang of ["es", "en"]) {
    await page.goto(`/${lang}/desarrollo-web-merida/`);
    await expect(page.locator(".delivery-phase")).toHaveCount(4);
    await expect(page.locator(".delivery-phase > ol > li")).toHaveCount(12);
    await expect(page.locator(".faq-list details")).toHaveCount(4);

    await page.goto(`/${lang}/proyectos/`);
    await expect(page.locator(".archive-card")).toHaveCount(8);
    const repositoryLinks = page.locator('.archive-card a[href^="https://github.com/"]');
    expect(await repositoryLinks.count()).toBeGreaterThanOrEqual(8);
    for (const link of await repositoryLinks.all()) {
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  }
});

test("large text and blocked storage keep navigation usable", async ({
  page,
}) => {
  await page.addInitScript(() =>
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new Error("Storage unavailable");
      },
    }),
  );
  await page.setViewportSize({ width: 768, height: 1000 });
  await page.goto("/en/");
  await page.addStyleTag({ content: "html {font-size:200% !important}" });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
  await page
    .getByRole("button", { name: "Toggle light or dark theme" })
    .click();
  await expect(page.locator("html")).toHaveAttribute(
    "data-theme",
    /light|dark/,
  );
});

test("localized navigation, equivalent case, CV and persisted theme", async ({
  page,
  request,
}) => {
  await page.goto("/es/");
  await expect(page.locator("h1")).toContainText("Miranda");
  await page
    .getByRole("button", { name: "Cambiar tema claro u oscuro" })
    .click();
  const theme = await page.locator("html").getAttribute("data-theme");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", theme!);
  await page.locator("a.project-link").first().click();
  await expect(page).toHaveURL(/projects\/operations/);
  await page.getByRole("link", { name: "Read this page in English" }).click();
  await expect(page).toHaveURL("/en/projects/operations/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  const pdf = await request.get("/downloads/CV_Rafael_Miranda.pdf");
  expect(pdf.ok()).toBeTruthy();
  expect((await pdf.body()).subarray(0, 4).toString()).toBe("%PDF");
  const missing = await request.get("/does-not-exist/");
  expect(missing.status()).toBe(404);
});
for (const lang of ["es", "en"])
  for (const width of [360, 768, 1440])
    for (const theme of ["light", "dark"] as const) {
      test(`${lang} ${width}px ${theme}: layout and accessibility`, async ({
        page,
      }) => {
        await page.setViewportSize({ width, height: 1000 });
        await page.emulateMedia({
          colorScheme: theme,
          reducedMotion: "reduce",
        });
        await page.goto(`/${lang}/`);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBeTruthy();
        const result = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        expect(result.violations).toEqual([]);
      });
    }
test("essential content works without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4321/en/");
  await expect(page.locator("#services")).toBeVisible();
  await page.locator("a.project-link").first().click();
  await expect(page.locator("h1")).toContainText("connected");
  await context.close();
});
test("fallback provides genuine contact links without endpoint", async ({
  page,
}) => {
  test.skip(Boolean(process.env.TEST_FORM), "Configured build");
  await page.goto("/es/");
  await expect(page.locator("[data-contact]")).toHaveCount(0);
  await expect(
    page.locator('.direct-contact a[href^="mailto:"]'),
  ).toBeVisible();
  await expect(
    page.locator('.direct-contact a[href^="https://wa.me/"]'),
  ).toBeVisible();
});
for (const lang of ["es", "en"]) {
  test(`${lang}: form validation, success, server errors and disconnection`, async ({
    page,
  }) => {
    test.skip(
      !process.env.TEST_FORM,
      "Run against build with PUBLIC_FORMSPREE_ENDPOINT set",
    );
    await page.goto(`/${lang}/`);
    const form = page.locator("[data-contact]");
    await form.locator("button").click();
    await expect(page.locator("#name")).toBeFocused();
    await page.locator("#name").fill("Test person");
    await page.locator("#email").fill("test@example.com");
    await page.locator("#message").fill("A meaningful project inquiry.");
    for (const status of [422, 429, 500]) {
      await page.route("https://formspree.io/**", (route) =>
        route.fulfill({ status, body: "{}", contentType: "application/json" }),
      );
      await form.locator("button").click();
      await expect(form.locator(".form-status")).toContainText(
        status === 429
          ? lang === "es"
            ? "límite"
            : "limit"
          : lang === "es"
            ? "No se pudo"
            : "Could not",
      );
      await expect(page.locator("#message")).not.toHaveValue("");
      await page.unroute("https://formspree.io/**");
    }
    await page.route("https://formspree.io/**", (route) => route.abort());
    await form.locator("button").click();
    await expect(form.locator(".form-status")).toContainText(
      lang === "es" ? "No se pudo" : "Could not",
    );
    await page.unroute("https://formspree.io/**");
    let count = 0;
    await page.route("https://formspree.io/**", async (route) => {
      count++;
      await new Promise((r) => setTimeout(r, 250));
      await route.fulfill({
        status: 200,
        body: '{"ok":true}',
        contentType: "application/json",
      });
    });
    await form.locator("button").click();
    await expect(form.locator("button")).toBeDisabled();
    await expect(form.locator(".form-status")).toContainText(
      lang === "es" ? "correctamente" : "successfully",
    );
    expect(count).toBe(1);
    await expect(page.locator("#message")).toHaveValue("");
  });
}
