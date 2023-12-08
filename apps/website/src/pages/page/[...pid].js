import { useRouter } from "next/router";

import Header from "../../components/common/Header";
import DynamicPage from "../../components/modules/DynamicPage";
import Footer from "../../components/common/Footer";

export default function DynamicPageRoute() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <DynamicPage pageId={pid} />
    </div>
  );
}
