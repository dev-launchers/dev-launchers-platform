import Page from '@devlaunchers/dev-recruiters/src/pages/confirmation';
import App from '@devlaunchers/dev-recruiters/src/pages/_app.jsx';
export { getStaticProps } from '@devlaunchers/dev-recruiters/src/pages/confirmation';

/////////////////////////////////////////

import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(App, Page);
