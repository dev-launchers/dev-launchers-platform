import { Typography } from '@devlaunchers/components/components/atoms';

/**
 * @description BubbleList Component
 * Renders a list of items as styled "bubble" elements.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.list - The array of items to be displayed as bubbles.
 * @param {string} [props.colorClass='bg-white'] - Optional CSS class for the background color of each bubble.
 */

function BubbleList({ list, colorClass = 'bg-white' }) {
  return (
    // Container div with flex layout, gap between items, and wrapping for better layout on smaller screens
    <div className="flex gap-4 flex-wrap">
      {list.map((item) => {
        // Map through the list, only render a bubble if the item is truthy
        return item ? (
          <div
            // Bubble styling with dynamic color class, shadow, and rounded corners
            className={`flex justify-center items-center h-10 px-4 rounded-3xl shadow-lg ${colorClass}`}
          >
            <Typography type="p">{item}</Typography>
          </div>
        ) : null; // Skip rendering if the item is falsy
      })}
    </div>
  );
}

export default BubbleList;
