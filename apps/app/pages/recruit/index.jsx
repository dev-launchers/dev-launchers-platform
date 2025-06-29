import Page from '@devlaunchers/dev-recruiters/src/pages/index';
import App from '@devlaunchers/dev-recruiters/src/pages/recruit';
export { getStaticProps } from '@devlaunchers/dev-recruiters/src/pages/index';

import { constructAppPage } from '../../utils/routingTools.js';

const ConstructedPage = constructAppPage(App, Page);

export default ConstructedPage;
