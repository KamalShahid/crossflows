import ProductPage from "../../components/ProductPage";
import { getProduct } from "../../data/products";

export default function LearnMate() {
  const product = getProduct("learnmate")!;
  return <ProductPage product={product} />;
}
