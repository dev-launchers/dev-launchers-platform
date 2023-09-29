import { CLIENT_STATIC_FILES_RUNTIME_AMP } from 'next/dist/shared/lib/constants';
import Section from '../organisms/NotificationSection/Section'
import { tv } from 'tailwind-variants';
import Navbar from '../organisms/Navigation/Navigation'
import { User } from '@devlaunchers/models';
import Header from '../organisms/NotificationSection/Header'

export interface DocumentScreenProps {
  user: {
    id: 2, 
    name: 'John',
    username: 'john',
    email: 'john@test.com',
    bio: 'test',
    profilePictureUrl: 'string',
    socialMediaLinks: [],
    totalPoints: 2,
    totalSeasonPoints: 2,
    availablePoints: 2,
    volunteerHours: 2,
    discord: {
      id: 1,
      avatar: 'url', 
      username: 'discordUsername',
      discriminator: '1234', 
    },
    interests: [],
  };
}
const grid = tv({

});

export function DocumentScreen({ user }: DocumentScreenProps) {
  return (
    <>
      <Navbar user={user} />
      <div className='inline-flex py-8 px-4 flex-col items-center lg:py-16 lg:px-22 md:w-full'>
        <div className="md:grid lg:grid-cols-[1fr_1015px_1fr] md:grid-cols-[1fr_699px_1fr] flex flex-col items-start">
          <div className="md:col-start-2 lg:m-auto md:col-end-3 lg:w-[1015px] md:w-[699px] flex w-[min(100%,358px)] flex-col items-start">
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
              name="checkbox2"
              htmlFor="checkbox2"
            />
            <Section
              disabled={false}
              header={'EVENTS'}
              paragraph="Get notified about upcoming events, workshops, or conferences."
              name="checkbox3"
              htmlFor="checkbox3"
            />
            <Section
              disabled={false}
              header={'TIP OF THE DAY'}
              paragraph="Recieve daily tips, tricks, or helpful insights to enhance your experience."
              name="checkbox4"
              htmlFor="checkbox4"
            />
            <Section
              disabled={false}
              header={'LATEST NEWS'}
              paragraph="Stay up to date with the latest news and updates of the organization"
              name="checkbox5"
              htmlFor="checkbox5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default DocumentScreen;

