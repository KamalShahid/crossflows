import ProductPage from "../../components/ProductPage";
import { getProduct } from "../../data/products";

export default function SmartTalk() {
  const product = getProduct("smarttalk")!;
  return <ProductPage product={product} />;
}
