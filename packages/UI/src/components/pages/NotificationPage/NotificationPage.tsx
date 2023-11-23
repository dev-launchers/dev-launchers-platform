import { User } from '@devlaunchers/models';
import { CLIENT_STATIC_FILES_RUNTIME_AMP } from 'next/dist/shared/lib/constants';
import { tv } from 'tailwind-variants';
import Navbar from '../../organisms/Navigation/Navigation';
import Header from '../../organisms/NotificationSection/Header';
import Section from '../../organisms/NotificationSection/Section';

export interface DocumentScreenProps {
  user: {
    id: 2;
    name: 'John';
    username: 'john';
    email: 'john@test.com';
    bio: 'test';
    profilePictureUrl: 'string';
    socialMediaLinks: [];
    totalPoints: 2;
    totalSeasonPoints: 2;
    availablePoints: 2;
    volunteerHours: 2;
    discord: {
      id: 1;
      avatar: 'url';
      username: 'discordUsername';
      discriminator: '1234';
    };
    interests: [];
  };
}

export function NotificationSettingsPage({ user }: DocumentScreenProps) {
  return (
    <>
      <div className="inline-flex w-full flex-col items-center px-4 py-8 md:w-full lg:px-[128px] lg:py-16">
        <div className="flex flex-col items-start md:grid md:grid-cols-[1fr_699px_1fr] lg:grid-cols-[1fr_1015px_1fr]">
          <div className="flex flex-col items-start md:col-start-2 md:col-end-3 md:w-[699px] lg:m-auto lg:w-[1015px]">
            <Header />
            <Section
              disabled={false}
              header={'SAVED IDEAS'}
              paragraph="Keep track of progress or updates related to your saved ideas"
            />
            <Section
              disabled={false}
              header={'PROFILE UPDATES'}
              paragraph="Stay informed about any updates to your profile and account settings."
            />
            <Section
              disabled={false}
              header={'EVENTS'}
              paragraph="Get notified about upcoming events, workshops, or conferences."
            />
            <Section
              disabled={false}
              header={'TIP OF THE DAY'}
              paragraph="Recieve daily tips, tricks, or helpful insights to enhance your experience."
            />
            <Section
              disabled={false}
              header={'LATEST NEWS'}
              paragraph="Stay up to date with the latest news and updates of the organization"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default NotificationSettingsPage;
