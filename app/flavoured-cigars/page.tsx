import CategoryPage from "../components/CategoryPage";
import { flavouredCigars } from "../data/products";

export default function FlavouredCigarsPage() {
  return (
    <CategoryPage
      title="Flavoured Cigars"
      description="Sweet, aromatic, and infused cigars offering unique tasting experiences."
      products={flavouredCigars}
    />
  );
}
