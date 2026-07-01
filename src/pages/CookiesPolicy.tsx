import LegalPage from "../components/LegalPage";
import { cookiesPolicy } from "../data/legal";

export default function CookiesPolicy() {
  return <LegalPage doc={cookiesPolicy} />;
}
