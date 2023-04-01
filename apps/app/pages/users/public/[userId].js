import Page from '@devlaunchers/website/src/pages/users/public/[userId].js';
import App from '@devlaunchers/website/src/pages/_app';
export { getStaticPaths, getStaticProps } from '@devlaunchers/website/src/pages/users/public/[userId].js';

/////////////////////////////////////////

import { constructAppPage } from '../../../utils/routingTools.js';
export default constructAppPage(App, Page);
