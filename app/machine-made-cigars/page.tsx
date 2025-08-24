import CategoryPage from "../components/CategoryPage";
import { machineMadeCigars } from "../data/products";

export default function MachineMadeCigarsPage() {
  return (
    <CategoryPage
      title="Machine-Made Cigars"
      description="Consistent, affordable, and reliable cigars produced by machine for everyday smoking."
      products={machineMadeCigars}
    />
  );
}
