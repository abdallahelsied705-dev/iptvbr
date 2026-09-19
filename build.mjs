import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const overridesRoot = path.join(root, "site-overrides");

if (fs.existsSync(overridesRoot)) {
  fs.cpSync(overridesRoot, root, { recursive: true, force: true });
}

execFileSync(process.platform === "win32" ? "npx.cmd" : "npx", ["next", "build"], { stdio: "inherit" });
