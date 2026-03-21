import Card from '../../../../common/Card';
import { atoms } from '@devlaunchers/components/components';
import mapPin from '../../../../../../src/images/icons/map-pin.svg';
import linkIcon from '../../../../../../src/images/icons/link.svg';
import suitCase from '../../../../../../src/images/icons/suit-case.svg';
import rocketLaunch from '../../../../../../src/images/icons/rocket-launch.svg';

function Details({ userData }) {
  const publishedAt = userData?.profile?.publishedAt;
  const date = publishedAt ? new Date(publishedAt) : null;
  const year =
    date && !Number.isNaN(date.getTime()) ? date.getFullYear() : null;

  return (
    <Card title="Details">
      {userData?.profile ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src={mapPin} className="h-6 w-6" alt="Name icon" />
            <atoms.Typography>
              {userData?.profile?.displayName ?? ''}
            </atoms.Typography>
          </div>

          <div className="flex items-center gap-3">
            <img src={suitCase} className="h-6 w-6" alt="Member since icon" />
            <atoms.Typography>Member Since {year}</atoms.Typography>
          </div>

          <div className="flex items-center gap-3">
            <img src={rocketLaunch} className="h-6 w-6" alt="Experience icon" />
            <atoms.Typography>
              {userData?.profile?.user?.experience}
            </atoms.Typography>
          </div>

          <div className="flex items-center gap-3">
            <img src={linkIcon} className="h-6 w-6" alt="Email icon" />
            <atoms.Typography>
              {userData?.profile?.user?.email}
            </atoms.Typography>
          </div>
        </div>
      ) : (
        <atoms.Typography className="text-grayscale-500" variant="secondary">
          No details added...
        </atoms.Typography>
      )}
    </Card>
  );
}

export default Details;
