import Page from '@devlaunchers/dev-recruiters/src/pages/[slug]/apply';
//import App from '@devlaunchers/dev-recruiters/src/pages/_app';
//Above path format didnt work. So updated to the below format path
import App from '../../_app';
export {
  getStaticProps,
  getStaticPaths,
} from '@devlaunchers/dev-recruiters/src/pages/[slug]/apply';

/////////////////////////////////////////

import { constructAppPage } from '../../../utils/routingTools.js';
export default constructAppPage(App, Page);
