import Page from '@devlaunchers/ideaspace/src/pages/dashboard';
import IdeaApp from '@devlaunchers/ideaspace/src/pages/_app';
//export { getStaticProps } from "@devlaunchers/ideaspace/src/pages/index";

/////////////////////////////////////////

import { constructAppPage } from '../../../utils/routingTools.js';
export default constructAppPage(IdeaApp, Page);