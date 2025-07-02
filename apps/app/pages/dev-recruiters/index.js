import Page from '@devlaunchers/dev-recruiters/src/pages/index';
import App from '@devlaunchers/dev-recruiters/src/pages/_app';
export { getStaticProps } from '@devlaunchers/dev-recruiters/src/pages/index';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

/////////////////////////////////////////

import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(App, Page);
