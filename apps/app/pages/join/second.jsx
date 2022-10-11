import Page from '@devlaunchers/dev-recruiters/src/pages/second';
import App from '@devlaunchers/dev-recruiters/src/pages/_app';
export { getStaticProps } from '@devlaunchers/dev-recruiters/src/pages/second';

/////////////////////////////////////////

import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(App, Page);
