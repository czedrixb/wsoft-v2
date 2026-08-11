import { test, expect } from "@playwright/test";
import { fetchSsr, extractHrefs } from "./helpers";

/**
 * AB-134 item 1 — every contact email on the site must open a correct
 * mailto: link, and the SkinArch page specifically must have one, since it
 * previously had none (zero mailto: links existed anywhere on the site).
 */

const ALLOWED_EMAILS = ["contact@wsoft.space"];
const ALLOWED_PHONES = ["+821050678800"];

const PAGES_WITH_CONTACT_CHROME = [
  "/",
  "/optical-microscope",
  "/products",
  "/wiz-assistant",
  "/contact-us",
  "/about-us",
];

test.describe("contact address allowlist", () => {
  // Catches typos generically instead of asserting one happy path — this is
  // what the acceptance criteria actually asks for ("no typos").
  for (const path of PAGES_WITH_CONTACT_CHROME) {
    test(`${path} exposes only known-good mailto:/tel: addresses`, async ({
      request,
    }) => {
      const { html } = await fetchSsr(request, path, { acceptLanguage: "" });

      for (const href of extractHrefs(html, "mailto")) {
        const address = href.replace(/^mailto:/, "").split("?")[0];
        expect(ALLOWED_EMAILS, `${path}: unexpected mailto ${href}`).toContain(
          address
        );
      }
      for (const href of extractHrefs(html, "tel")) {
        const number = href.replace(/^tel:/, "");
        expect(ALLOWED_PHONES, `${path}: unexpected tel ${href}`).toContain(
          number
        );
      }
    });
  }

  test("the SkinArch page has at least one mailto: link (zero before AB-134)", async ({
    request,
  }) => {
    const { html } = await fetchSsr(request, "/optical-microscope", {
      acceptLanguage: "",
    });
    expect(extractHrefs(html, "mailto").length).toBeGreaterThan(0);
  });

  test("contact-us has both a mailto: and a tel: link", async ({ request }) => {
    const { html } = await fetchSsr(request, "/contact-us", {
      acceptLanguage: "",
    });
    expect(extractHrefs(html, "mailto").length).toBeGreaterThan(0);
    expect(extractHrefs(html, "tel").length).toBeGreaterThan(0);
  });

  test("the dead /contact route is never linked", async ({ request }) => {
    for (const path of PAGES_WITH_CONTACT_CHROME) {
      const { html } = await fetchSsr(request, path, { acceptLanguage: "" });
      expect(html, path).not.toMatch(/href="\/contact"[^-]/);
    }
  });
});

const SKINARCH_SUBJECT = "SkinArch™ LC-OCT Analyzer inquiry";
// contact-modal.enter-subject, both locales — the input's placeholder, used
// to locate the Topic/Subject field regardless of language.
const subjectField = (page: import("@playwright/test").Page) =>
  page
    .getByPlaceholder(/Enter what you want to ask/)
    .or(page.getByPlaceholder(/문의하실 내용을 입력하세요/));

test.describe("SkinArch inquiry CTA", () => {
  test("opens the contact modal with the SkinArch subject prefilled (EN)", async ({
    page,
  }) => {
    await page.context().addCookies([
      { name: "lang", value: "en", url: "http://localhost:3000" },
    ]);
    await page.goto("/optical-microscope");

    await page.getByRole("button", { name: /Request a Quote/i }).click();
    await expect(subjectField(page)).toHaveValue(SKINARCH_SUBJECT);
  });

  test("opens the contact modal with the SkinArch subject prefilled (KO)", async ({
    page,
  }) => {
    await page.context().addCookies([
      { name: "lang", value: "ko", url: "http://localhost:3000" },
    ]);
    await page.goto("/optical-microscope");

    await page.getByRole("button", { name: "견적 문의하기" }).click();
    // The subject string is deliberately identical in both locales, so
    // inbox filtering on it is reliable regardless of visitor language.
    await expect(subjectField(page)).toHaveValue(SKINARCH_SUBJECT);
  });

  test("the visible email address is clickable and copyable", async ({
    page,
  }) => {
    await page.context().addCookies([
      { name: "lang", value: "en", url: "http://localhost:3000" },
    ]);
    await page.goto("/optical-microscope");

    const link = page.locator('a[href^="mailto:contact@wsoft.space"]');
    await expect(link).toBeVisible();
    await expect(link).toHaveText("contact@wsoft.space");
  });

  test("submitting the form sends the SkinArch subject in the POST body", async ({
    page,
  }) => {
    await page.context().addCookies([
      { name: "lang", value: "en", url: "http://localhost:3000" },
    ]);

    let postedSubject: string | undefined;
    await page.route("**/api/contact", async (route) => {
      const body = route.request().postDataJSON();
      postedSubject = body?.subject;
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      });
    });

    await page.goto("/optical-microscope");
    await page.getByRole("button", { name: /Request a Quote/i }).click();

    // Scoped to the modal's own <form>: the footer's persistent newsletter
    // input shares the same "Enter your email" placeholder as the modal's
    // email field, so an unscoped getByPlaceholder resolves to both.
    const modalForm = page
      .locator("form")
      .filter({ has: subjectField(page) });

    await modalForm.getByPlaceholder("First Name").fill("Ada");
    await modalForm.getByPlaceholder("Last Name").fill("Lovelace");
    await modalForm.getByPlaceholder("Enter your email").fill("ada@example.com");
    await modalForm.getByPlaceholder("Enter phone number").fill("15551234567");
    await modalForm.getByLabel(/privacy/i).check();
    await modalForm
      .getByPlaceholder("Your message here")
      .fill("Interested in a research collaboration.");

    await modalForm.getByRole("button", { name: /Submit Inquiry/i }).click();
    await expect.poll(() => postedSubject).toBe(SKINARCH_SUBJECT);
  });
});

test.describe("contact modal left-panel text is legible", () => {
  // Regression for a global `p { color: #20252C }` rule stomping the
  // modal's inherited `text-white` on any <p> without its own color class —
  // #20252C is nearly identical to the modal's own #20252CE5 background, so
  // the description and contact-detail paragraphs were effectively invisible.
  test("description and contact-detail paragraphs render in a light color, not the dark body default", async ({
    page,
  }) => {
    await page.context().addCookies([
      { name: "lang", value: "en", url: "http://localhost:3000" },
    ]);
    await page.goto("/optical-microscope");
    await page.getByRole("button", { name: /Request a Quote/i }).click();

    const description = page.getByText(
      "Reach out to us and our dedicated team"
    );
    const emailValue = page.getByText("contact@wsoft.space").first();

    await expect(description).toBeVisible();

    for (const locator of [description, emailValue]) {
      const color = await locator.evaluate(
        (el) => getComputedStyle(el).color
      );
      // rgb(32, 37, 44) is #20252C, the near-invisible body-default color.
      expect(color).not.toBe("rgb(32, 37, 44)");
    }
  });
});

test.describe("global navbar/footer inquiries are attributable", () => {
  test("the navbar 문의하기 button prefills the SkinArch subject on this page", async ({
    page,
  }) => {
    await page.context().addCookies([
      { name: "lang", value: "en", url: "http://localhost:3000" },
    ]);
    await page.goto("/optical-microscope");

    await page.locator("nav").getByText("Contact Us", { exact: false }).click();
    await expect(subjectField(page)).toHaveValue(SKINARCH_SUBJECT);
  });

  test("the navbar 문의하기 button has no subject on an unrelated page", async ({
    page,
  }) => {
    await page.context().addCookies([
      { name: "lang", value: "en", url: "http://localhost:3000" },
    ]);
    await page.goto("/about-us");

    await page.locator("nav").getByText("Contact Us", { exact: false }).click();
    await expect(subjectField(page)).toHaveValue("");
  });
});
