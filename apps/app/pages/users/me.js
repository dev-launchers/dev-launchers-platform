import Page from '@devlaunchers/user-profile/src/pages/users/me';
import IdeaApp from '@devlaunchers/user-profile/src/pages/_app';

/////////////////////////////////////////

import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(IdeaApp, Page);
