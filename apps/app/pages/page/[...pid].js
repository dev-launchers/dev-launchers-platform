import Page from '@devlaunchers/website/src/pages/page/[...pid]';
import App from '@devlaunchers/website/src/pages/_app';
export { getStaticProps } from '@devlaunchers/website/src/pages/page/[...pid]';

/////////////////////////////////////////

import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(App, Page);
