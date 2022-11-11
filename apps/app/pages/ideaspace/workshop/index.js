import Page from '@devlaunchers/ideaspacepace/src/pages/browse';
import IdeaApp from '@devlaunchers/ideaspacepace/src/pages/_app';
export { getStaticProps } from '@devlaunchers/ideaspacepace/src/pages/index';

/////////////////////////////////////////

import { constructAppPage } from '../../../utils/routingTools.js';
export default constructAppPage(IdeaApp, Page);
