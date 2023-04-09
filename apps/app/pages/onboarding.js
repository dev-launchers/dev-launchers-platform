import Page from '@devlaunchers/user-profile/src/pages/userOnboardingPage.js';
import App from '@devlaunchers/user-profile/src/pages/_app';

/////////////////////////////////////////

import { constructAppPage } from '../utils/routingTools.js';
export default constructAppPage(App, Page);
