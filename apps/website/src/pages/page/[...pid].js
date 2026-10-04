import { useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../components/common/Header";
import DynamicPage from "../../components/modules/DynamicPage";
import Footer from "../../components/common/Footer";

// The only pages that should ever exist under /page/
const VALID_PAGE_SLUGS = ["privacy-policy", "terms-and-conditions"];

export default function DynamicPageRoute() {
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    if (!pid) return;
    // pid is a list of every URL piece after /page/.
    // A real page should have exactly ONE piece, and it
    // should be one of our two known page names.
    const isValid = pid.length === 1 && VALID_PAGE_SLUGS.includes(pid[0]);
    if (!isValid) {
      router.replace("/404");
    }
  }, [pid, router]);

  return (
    <div>
      <DynamicPage pageId={pid} />
    </div>
  );
}