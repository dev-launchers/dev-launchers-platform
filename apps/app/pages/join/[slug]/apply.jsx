import Page from '@devlaunchers/dev-recruiters/src/pages/[slug]/apply';
import App from '@devlaunchers/dev-recruiters/src/pages/_app';
export {
  getStaticProps,
  getStaticPaths,
} from '@devlaunchers/dev-recruiters/src/pages/[slug]/apply';

/////////////////////////////////////////

import { constructAppPage } from '../../../utils/routingTools.js';
export default constructAppPage(App, Page);
<<<<<<< HEAD
<<<<<<< HEAD
=======
*/
>>>>>>> d8bad424 (fix: bug fix)
=======
>>>>>>> 55a4d324 (build: bug fix)
