import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';
import BubbleList from './../../../../common/BubbleList';

function Interests({ interestList }) {
  let interestArray = null;

  if (interestList.length > 0) {
    // whats provided by backend is an array of objects [{},{}], so mapping is needed
    interestArray = interestList.map((interestObj) => {
      return interestObj.interest ?? null;
    });
  }

  return (
    <Card title="Interests">
      {interestArray ? (
        <BubbleList list={interestArray} />
      ) : (
        <Typography className="text-grayscale-500" type="p">
          No interests selected...
        </Typography>
      )}
    </Card>
  );
}

export default Interests;
