import { expect, test } from "@playwright/test";

test("homepage exposes essential SEO signals", async ({ request }) => {
  const response = await request.get("/");
  expect(response.ok()).toBeTruthy();
  const html = await response.text();
  expect(html).toMatch(/<title>[^<]*IPTV Portugal[^<]*<\/title>/i);
  expect(html.match(/<h1(?:\s|>)/gi)).toHaveLength(1);
  expect(html).toMatch(/<link rel="canonical" href="https:\/\/iptvbr\.pt\/?"/i);
  expect(html).toMatch(/<meta name="description" content="[^"]+"/i);
});

test("trust pages and machine-readable SEO files respond", async ({ request }) => {
  for (const path of ["/sobre-nos/", "/contacto/", "/politica-privacidade/", "/politica-cookies/", "/aviso-legal/", "/robots.txt", "/sitemap.xml"]) {
    const response = await request.get(path);
    expect(response.ok(), `${path} should respond successfully`).toBeTruthy();
  }
});
