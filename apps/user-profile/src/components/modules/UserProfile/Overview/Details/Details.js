import Card from '../../../../common/Card';
import { atoms } from '@devlaunchers/components/components';
import mapPin from '../../../../../../src/images/icons/map-pin.svg';
import linkIcon from '../../../../../../src/images/icons/link.svg';
import suitCase from '../../../../../../src/images/icons/suit-case.svg';
import rocketLaunch from '../../../../../../src/images/icons/rocket-launch.svg';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

function Details({ details }) {
  const { userData } = useUserDataContext();
  const year = new Date(userData?.profile?.publishedAt).getFullYear();

  return (
    <Card title="Details">
      {details ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src={mapPin} className="h-6 w-6" alt="Location" />
            <atoms.Typography>{userData?.name ?? ''}</atoms.Typography>
          </div>

          <div className="flex items-center gap-3">
            <img src={suitCase} className="h-6 w-6" alt="Instagram" />
            <atoms.Typography>Member Since {year}</atoms.Typography>
          </div>

          <div className="flex items-center gap-3">
            <img src={rocketLaunch} className="h-6 w-6" alt="GitHub" />
            <atoms.Typography>
              {userData?.profile?.user?.experience}
            </atoms.Typography>
          </div>

          <div className="flex items-center gap-3">
            <img src={linkIcon} className="h-6 w-6" alt="LinkedIn" />
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
