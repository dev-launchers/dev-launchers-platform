import Page from "@devlaunchers/ideas/src/pages/workshop/[ideaId]";
import IdeaApp from "@devlaunchers/ideas/src/pages/_app";
export { getStaticProps } from "@devlaunchers/ideas/src/pages/workshop/[ideaId]";
export { getStaticPaths } from "@devlaunchers/ideas/src/pages/workshop/[ideaId]";

/////////////////////////////////////////

import { constructAppPage } from '../../../utils/routingTools.js';
export default constructAppPage(IdeaApp, Page);
