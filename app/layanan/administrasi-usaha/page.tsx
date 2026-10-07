import ServiceLanding from "../../components/ServiceLanding";
import { getService } from "../../lib/services";

export default function Page() {
  return <ServiceLanding service={getService("administrasi-usaha")} />;
}
