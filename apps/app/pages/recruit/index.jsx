import Page from '@devlaunchers/dev-recruiters/src/pages/index';
import App from '@devlaunchers/dev-recruiters/src/pages/recruit';
export { getStaticProps } from '@devlaunchers/dev-recruiters/src/pages/index';

import { constructAppPage } from '../../utils/routingTools.js';

// Add debugging to check the content
console.log('App Component:', App);
console.log('Page Component:', Page);

const ConstructedPage = constructAppPage(App, Page);

// static site rendering.
export default ConstructedPage;
