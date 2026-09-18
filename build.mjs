import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

execFileSync(process.execPath, ["build-legacy.mjs"], { stdio: "inherit" });

const root = process.cwd();
const overrides = [
  ["site-overrides/app/page.tsx", "app/page.tsx"],
  ["site-overrides/components/hero/Hero.tsx", "components/hero/Hero.tsx"],
  ["site-overrides/components/ui/Section.tsx", "components/ui/Section.tsx"],
  ["site-overrides/components/conversion/WhatsAppButton.tsx", "components/conversion/WhatsAppButton.tsx"],
  ["site-overrides/styles/globals.css", "styles/globals.css"]
];

for (const [from, to] of overrides) {
  const source = path.join(root, from);
  const target = path.join(root, to);
  if (!fs.existsSync(source)) throw new Error(`Missing override: ${from}`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

execFileSync(process.platform === "win32" ? "npx.cmd" : "npx", ["next", "build"], { stdio: "inherit" });
