import Page from '@devlaunchers/site-projects/src/pages/index';
import App from '@devlaunchers/site-projects/src/pages/_app';
export { getStaticProps } from '@devlaunchers/site-projects/src/pages/index';

/////////////////////////////////////////

import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(App, Page);
