import CategoryPage from "../components/CategoryPage";
import { awardedCigars } from "../data/products";

export default function AwardedCigarsPage() {
  return (
    <CategoryPage
      title="Awarded Cigars"
      description="Explore award-winning cigars recognised worldwide for their quality and craftsmanship."
      products={awardedCigars}
    />
  );
}
