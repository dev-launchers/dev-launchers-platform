import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';
import BubbleList from './../../../../common/BubbleList';

/**
 * The `Skills` component displays a list of user skills in a styled card format.
 * - It accepts an array of skill objects, filters out those without a valid `interest` property,
 *   and extracts the `interest` values into a list of strings.
 * - If valid skills exist, they are displayed using the `BubbleList` component with a custom background color.
 * - If no skills are selected, a fallback message is shown to inform the user.
 *
 * @component
 * @param {Object} props - React component props.
 * @param {Array} props.skills - Array of skill objects. Each object should have an `interest` property.
 * @returns {JSX.Element} A styled card containing a list of skills or a fallback message.
 * @note In the backend, the interest table in strapi holds the different values/interest.
 * The backend mapped those interest, to create the skills field. hence why there is a `interest` property instead of `skill`,
 * in `skillObj.interest`. Speak with chung-ting if you need more information on this.
 */

function Skills({ skills }) {
  /**
   * Filters and transforms the skills array:
   * 1. Filters out objects where the `interest` property is empty, null, or undefined.
   * 2. Transforms/maps array of objects [{},{}] to array of strings ['a','b'].
   *
   *
   * @param {Array} skills - Array of skill objects. Each object should have an `interest` property.
   * @returns {Array} filteredSkills - Array of non-empty skill strings.
   */
  const filteredSkills = skills
    .filter((skillObj) => Boolean(skillObj?.interest)) // Ensure `interest` is truthy.
    .map((skillObj) => skillObj.interest); // Extract the `interest` value.

  return (
    <Card title="Skills">
      {filteredSkills?.length > 0 ? (
        // If there are skills after filtering, display them in a BubbleList component.
        <BubbleList list={filteredSkills} colorClass="bg-jupiter-300" />
      ) : (
        // If no skills are available, show a fallback message.
        <Typography className="text-grayscale-500" type="p">
          No skills selected...
        </Typography>
      )}
    </Card>
  );
}

export default Skills;
