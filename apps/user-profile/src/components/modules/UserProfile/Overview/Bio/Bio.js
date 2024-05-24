import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';

function Bio({ bio }) {
  return (
    <Card title="Bio">
      <Typography className={` ${bio ? '' : 'text-grayscale-500'}`} type="p">
        {bio ? bio : 'No bio added...'}
      </Typography>
    </Card>
  );
}

export default Bio;
