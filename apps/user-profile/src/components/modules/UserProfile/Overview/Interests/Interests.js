import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';
import BubbleList from './../../../../common/BubbleList';
import { editProfileDataContext } from '../../../../../context/EditProfileDataContext';

function Interests({ interestList, title, action }) {
  const { editProfileDispatch } = editProfileDataContext();
  // filters interestList (removes empty/null values),
  // and transforms array of objects [{},{}] to array of strings ['a','b']
  const filteredInterestList = interestList
    ?.filter((interestObj) => Boolean(interestObj?.interest))

    .map((interestObj) => interestObj.interest);

  //This Function will be called when  the Edit button is clicked
  const onEdit = () => {
    editProfileDispatch({ type: action });
  };

  return (
    <Card title={title} onEdit={onEdit}>
      {filteredInterestList?.length > 0 ? (
        <BubbleList list={filteredInterestList} />
      ) : (
        <Typography className="text-grayscale-500" variant="secondary">
          No {title.toLowerCase()} selected...
        </Typography>
      )}
    </Card>
  );
}

export default Interests;
