import { products } from "../app/data/products";
import { cigarBrands } from "../app/data/products/cigarBrands";
import { tobaccoBrands } from "../app/data/products/tobaccoBrands";

// ✅ If cigarBrands/tobaccoBrands are arrays of strings, use them directly
const allowedBrands = [...cigarBrands, ...tobaccoBrands];

const seen = new Map<string, string[]>();
let hasErrors = false;

products.forEach((p) => {
  const issues: string[] = [];

  // Brand must exist in allowed list
  if (!allowedBrands.includes(p.brand)) {
    issues.push(`❌ Brand "${p.brand}" not in allowed brands`);
  }

  // Duplicate product name across brands
  if (seen.has(p.name)) {
    issues.push(
      `⚠️ Duplicate product name (also found under ${seen
        .get(p.name)
        ?.join(", ")})`
    );
    seen.get(p.name)?.push(p.brand);
  } else {
    seen.set(p.name, [p.brand]);
  }

  if (issues.length > 0) {
    hasErrors = true;
    console.log(`Product: ${p.name} [${p.id}]`);
    issues.forEach((i) => console.log("   " + i));
  }
});

if (hasErrors) {
  console.error("❌ Audit failed: Fix issues above before deploying.");
  process.exit(1); // fail build
} else {
  console.log("✅ Audit complete: No issues found.");
}
