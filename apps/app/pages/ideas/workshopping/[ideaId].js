import Page from "@devlaunchers/ideas/src/pages/workshopping/[ideaId]";
import IdeaApp from "@devlaunchers/ideas/src/pages/_app";
export { getStaticProps } from "@devlaunchers/ideas/src/pages/workshopping/[ideaId]";
export { getStaticPaths } from "@devlaunchers/ideas/src/pages/workshopping/[ideaId]";

/////////////////////////////////////////

import { constructAppPage } from '../../../utils/routingTools.js';
export default constructAppPage(IdeaApp, Page);
