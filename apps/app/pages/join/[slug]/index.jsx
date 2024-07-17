import Page from '@devlaunchers/dev-recruiters/src/pages/[slug]/index';
import App from '@devlaunchers/dev-recruiters/src/pages/_app.jsx';
export {
  getStaticProps,
  getStaticPaths,
} from '@devlaunchers/dev-recruiters/src/pages/[slug]/index';
/////////////////////////////////////////

import { constructAppPage } from '../../../utils/routingTools.js';
export default constructAppPage(App, Page);
