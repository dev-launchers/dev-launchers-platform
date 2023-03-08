import Page from '@devlaunchers/ideaspace/src/pages/edit/[ideaId]';
import IdeaApp from '@devlaunchers/ideaspace/src/pages/_app';
export { getStaticProps } from '@devlaunchers/ideaspace/src/pages/edit/[ideaId]';
export { getStaticPaths } from '@devlaunchers/ideaspace/src/pages/edit/[ideaId]';

/////////////////////////////////////////

import { constructAppPage } from '../../../utils/routingTools.js';
export default constructAppPage(IdeaApp, Page);
