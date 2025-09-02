// inflate.js
// Simple script to inflate products dataset for stress testing
// Run: node inflate.js

const fs = require("fs");  // ✅ no more Node warnings

// === CONFIG ===
const filePath = "app/data/products/index.ts";  // this will be overwritten
const multiplier = 1000; // adjust duplicates per product (e.g., 100 = 10k, 1000 = 100k)

// === SCRIPT ===
const content = fs.readFileSync(filePath, "utf-8");

// Grab everything between export const products = [ ... ];
const match = content.match(/export const products = \[(.*)\];/s);
if (!match) {
  console.error("❌ Could not find products array in index.ts");
  process.exit(1);
}

const productBlock = match[1].trim();
const objects = productBlock.split("},").map(o => o.trim()).filter(Boolean);
const products = objects.map(o => (o.endsWith("}") ? o : o + "}"));

let inflated = [];
let counter = 1;

for (const obj of products) {
  inflated.push(obj); // keep the original
  for (let i = 0; i < multiplier; i++) {
    let copy = obj
      .replace(/id:\s*"([^"]+)"/, (m, id) => `id: "${id}-copy${counter}"`)
      .replace(/name:\s*"([^"]+)"/, (m, name) => `name: "${name} Copy ${counter}"`);
    inflated.push(copy);
    counter++;
  }
}

const finalContent = `// AUTO-GENERATED DATASET
export const products = [
${inflated.join(",\n")}
];`;

fs.writeFileSync(filePath, finalContent, "utf-8");

console.log(`✅ index.ts updated with ${inflated.length} products (multiplier: ${multiplier})`);
