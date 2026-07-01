import LegalPage from "../components/LegalPage";
import { termsOfService } from "../data/legal";

export default function TermsOfService() {
  return <LegalPage doc={termsOfService} />;
}
