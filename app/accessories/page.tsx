import CategoryPage from "../components/CategoryPage";
import { accessories } from "../data/products";

export default function AccessoriesPage() {
  return (
    <CategoryPage
      title="Cigar Accessories"
      description="Humidors, cutters, lighters, and everything you need for the perfect smoke."
      products={accessories}
    />
  );
}
