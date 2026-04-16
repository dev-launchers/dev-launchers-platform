import Page from '@devlaunchers/user-profile/src/pages/users/[displayName].js';
import App from '@devlaunchers/user-profile/src/pages/_app';
export {
  getStaticPaths,
  getStaticProps,
} from '@devlaunchers/user-profile/src/pages/users/[displayName].js';

/////////////////////////////////////////

import { constructAppPage } from '../../utils/routingTools.js';
export default constructAppPage(App, Page);
