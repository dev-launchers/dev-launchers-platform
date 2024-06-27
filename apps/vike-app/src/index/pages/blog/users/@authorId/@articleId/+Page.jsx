import Blog from '../../../../../modules/Blog';
import { usePageContext } from '@devlaunchers/vike-react/usePageContext';
// { authorId: 'kris-gano', articleId: 'somesing' }
export const Page = () => {
  const { routeParams } = usePageContext();
  console.log(routeParams);
  return (
    <div>
      <Blog authorId={routeParams.authorId} articleId={routeParams.articleId} />
    </div>
  );
};
