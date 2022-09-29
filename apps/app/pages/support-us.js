import Page from '@devlaunchers/website/src/pages/support-us';
import App from '@devlaunchers/website/src/pages/_app';
//export { getStaticProps } from '@devlaunchers/website/src/pages/index';

/////////////////////////////////////////

import { constructAppPage } from '../utils/routingTools.js';
export default constructAppPage(App, Page);
