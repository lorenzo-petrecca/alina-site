import fs from "node:fs";
import path from "node:path";

const srcDir = path.join(process.cwd(), "src", "data", "manifests");
const outDir = path.join(process.cwd(), "public", "manifests");

fs.mkdirSync(outDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  if (!file.endsWith(".json")) continue;
  fs.copyFileSync(path.join(srcDir, file), path.join(outDir, file));
}

console.log("✅ Manifests synced to public/manifests");
