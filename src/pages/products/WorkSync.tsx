import ProductPage from "../../components/ProductPage";
import { getProduct } from "../../data/products";

export default function WorkSync() {
  const product = getProduct("worksync")!;
  return <ProductPage product={product} />;
}
