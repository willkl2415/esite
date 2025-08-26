import CategoryPage from "../components/CategoryPage";
import { products } from "../data/products";

export default function AwardedCigarsPage() {
  // Filter products that belong to Awarded Cigars
  const awardedCigars = products.filter((p) => p.category === "awarded-cigars");

  return <CategoryPage title="Awarded Cigars" products={awardedCigars} />;
}
