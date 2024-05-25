import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';

function Interests() {
  return (
    <Card title="Interests">
      <Typography className="text-grayscale-500" type="p">
        {'No interests selected...'}
      </Typography>
    </Card>
  );
}

export default Interests;
