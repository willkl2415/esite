import CategoryPage from "../components/CategoryPage";
import { samplers } from "../data/products";

export default function SamplersPage() {
  return (
    <CategoryPage
      title="Cigar Samplers"
      description="Curated collections of cigars — perfect for trying new blends or gifting."
      products={samplers}
    />
  );
}
