import ProductPage from "../../components/ProductPage";
import { getProduct } from "../../data/products";

export default function DriveFlow() {
  const product = getProduct("driveflow")!;
  return <ProductPage product={product} />;
}
