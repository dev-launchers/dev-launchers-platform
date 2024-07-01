import Page from '@devlaunchers/dev-recruiters/src/pages/index';
//import App from '@devlaunchers/dev-recruiters/src/pages/_app';
import App from '../../../dev-recruiters/src/pages/_app';
export { getStaticProps } from '@devlaunchers/dev-recruiters/src/pages/index';

/////////////////////////////////////////
import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(App, Page);
