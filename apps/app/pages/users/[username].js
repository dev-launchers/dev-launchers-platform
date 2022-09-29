import Page from '@devlaunchers/website/src/pages/users/[username]';
import IdeaApp from '@devlaunchers/website/src/pages/_app';
export { getStaticProps } from '@devlaunchers/website/src/pages/index';

/////////////////////////////////////////

import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(IdeaApp, Page);
