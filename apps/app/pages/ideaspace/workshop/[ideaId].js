import Page from '@devlaunchers/ideaspace/src/pages/workshop/[ideaId]';
import IdeaApp from '@devlaunchers/ideaspace/src/pages/_app';
export { getStaticProps } from '@devlaunchers/ideaspace/src/pages/workshop/[ideaId]';
export { getStaticPaths } from '@devlaunchers/ideaspace/src/pages/workshop/[ideaId]';

/////////////////////////////////////////

import { constructAppPage } from '../../../utils/routingTools.js';
export default constructAppPage(IdeaApp, Page);
