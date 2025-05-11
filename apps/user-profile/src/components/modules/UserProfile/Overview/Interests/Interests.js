import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';
import BubbleList from './../../../../common/BubbleList';

function Interests({ interestList }) {
  // filters interestList (removes empty/null values),
  // and transforms array of objects [{},{}] to array of strings ['a','b']
  const filteredInterestList = interestList
    .filter((interestObj) => Boolean(interestObj?.interest))
    .map((interestObj) => interestObj.interest);

  return (
    <Card title="Interests">
      {filteredInterestList?.length > 0 ? (
        <BubbleList list={filteredInterestList} />
      ) : (
        <Typography className="text-grayscale-500" variant="secondary">
          No interests selected...
        </Typography>
      )}
    </Card>
  );
}

export default Interests;
