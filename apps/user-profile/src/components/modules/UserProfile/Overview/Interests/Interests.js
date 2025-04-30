import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';
import BubbleList from './../../../../common/BubbleList';

/**
 * The `Interests` component displays a list of user interests in a styled card.
 * - It accepts an array of interest objects, filters out those without a valid `interest` property,
 *   and extracts the `interest` values into a list of strings.
 * - If valid interests exist, they are displayed using the `BubbleList` component.
 * - If no interests are selected, a fallback message is shown to inform the user.
 *
 * @component
 * @param {Object} props - React component props.
 * @param {Array} props.interestList - Array of interest objects. Each object should have an `interest` property.
 * @returns {JSX.Element} A styled card containing a list of interests or a fallback message.
 */

function Interests({ interestList }) {
  /**
   * Filters and transforms the interestList array:
   * 1. Filters out objects where the `interest` property is empty, null, or undefined.
   * 2. Transforms/maps array of objects [{},{}] to array of strings ['a','b'].
   *
   * @param {Array} interestList - Array of interest objects. Each object should have an `interest` property.
   * @returns {Array} filteredInterestList - Array of non-empty interest strings.
   */
  const filteredInterestList = interestList
    .filter((interestObj) => Boolean(interestObj?.interest)) // Ensure `interest` is truthy.
    .map((interestObj) => interestObj.interest); // Extract the `interest` value.

  return (
    <Card title="Interests">
      {filteredInterestList?.length > 0 ? (
        // If there are interests after filtering, display them in a BubbleList component.
        <BubbleList list={filteredInterestList} />
      ) : (
        // If no interests are available, show a fallback message.
        <Typography type="p">No interests selected...</Typography>
      )}
    </Card>
  );
}

export default Interests;
