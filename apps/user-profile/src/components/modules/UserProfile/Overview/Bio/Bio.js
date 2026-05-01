import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';

function Bio({ userData }) {
  const bio = userData?.profile?.bio;
  return (
    <Card title="Bio">
      <Typography
        className={` ${bio ? '' : 'text-grayscale-500'}`}
        variant="secondary"
      >
        {bio ? bio : 'No bio added...'}
      </Typography>
    </Card>
  );
}

export default Bio;
