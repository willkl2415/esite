// inflate.js
// Stream-writing version (safe for 60k+ products)
// Run: node inflate.js

const fs = require("fs");

const filePath = "app/data/products/index.ts";  // will be overwritten
const multiplier = 1250; // ~59,000 products

const content = fs.readFileSync(filePath, "utf-8");
const match = content.match(/export const products = \[(.*)\];/s);

if (!match) {
  console.error("❌ Could not find products array in index.ts");
  process.exit(1);
}

const productBlock = match[1].trim();
const objects = productBlock.split("},").map(o => o.trim()).filter(Boolean);
const products = objects.map(o => (o.endsWith("}") ? o : o + "}"));

const stream = fs.createWriteStream(filePath, { flags: "w" });

stream.write("// AUTO-GENERATED DATASET (~59,000 products)\n");
stream.write("export const products = [\n");

let counter = 1;
for (const obj of products) {
  stream.write(obj + ",\n"); // original
  for (let i = 0; i < multiplier; i++) {
    let copy = obj
      .replace(/id:\s*"([^"]+)"/, (m, id) => `id: "${id}-copy${counter}"`)
      .replace(/name:\s*"([^"]+)"/, (m, name) => `name: "${name} Copy ${counter}"`);
    stream.write(copy + ",\n");
    counter++;
  }
}

stream.write("];\n");
stream.end();

console.log(`✅ index.ts updated with ~${products.length * (multiplier + 1)} products`);
