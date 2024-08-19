import Page from '@devlaunchers/site-projects/src/pages/[slug]';
import App from '@devlaunchers/site-projects/src/pages/_app';
export { getStaticPaths, getStaticProps } from '@devlaunchers/site-projects/src/pages/[slug]';

/////////////////////////////////////////

import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(App, Page);