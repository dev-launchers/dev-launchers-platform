import { useRouter } from 'next/router';

import DynamicPage from '../../components/modules/DynamicPage';

export default function DynamicPageRoute() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <DynamicPage pageId={pid} />
    </div>
  );
}
