import CategoryPage from "../components/CategoryPage";
import { newWorldCigars } from "../data/products";

export default function NewWorldCigarsPage() {
  return (
    <CategoryPage
      title="New World Cigars"
      description="Premium cigars crafted across the globe — bold flavours from Nicaragua, Honduras, and beyond."
      products={newWorldCigars}
    />
  );
}
