import Page from '@devlaunchers/dev-recruiters/src/pages/confirmation';
//import App from '@devlaunchers/dev-recruiters/_app.js';
import App from '../../../dev-recruiters/src/pages/_app';
export { getStaticProps } from '@devlaunchers/dev-recruiters/src/pages/confirmation';

/////////////////////////////////////////

import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(App, Page);
