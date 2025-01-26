/**
 * OutlinedCat Component
 * Renders a button containing an SVG icon of a cat with customizable dimensions, colors, and additional attributes.
 *
 * @param {Object} props - The component props.
 * @param {string|number} props.width - Width of the SVG (default: 16).
 * @param {string|number} props.height - Height of the SVG (default: 16).
 * @param {string} props.colorClass - CSS class for the stroke color (default: 'stroke-white').
 * @param {string} props.className - Additional CSS classes for the SVG element.
 * @param {Object} props.attributes - Additional attributes to spread onto the button element.
 */

function OutlinedCat({ width, height, colorClass, className, ...attributes }) {
  return (
    // Button element with no appearance styling and disabled cursor interaction
    <button className="appearance-none cursor-auto" {...attributes}>
      {/* SVG element with customizable dimensions and optional class names */}
      <svg
        width={width ?? '16'} // Default width is 16 if not provided
        height={height ?? '16'} // Default height is 16 if not provided
        viewBox="0 0 16 16" // Viewbox for defining the SVG's coordinate system
        className={className} // Custom class names for additional styling
        fill="none" // Ensure the SVG has no fill color by default
        xmlns="http://www.w3.org/2000/svg" // Namespace for SVG
      >
        {/* Path element defining the cat's outline */}
        <path
          className={colorClass ?? 'stroke-white'} // Default stroke color class
          d="M5 9.5V9.875M11 9.5V9.875M7.99994 2.74983C8.50244 2.74983 9.0124 2.81733 9.4999 2.94483C10.8349 1.44483 13.2724 0.814832 14.3149 1.24983C15.3649 1.68483 13.9999 6.49983 13.9999 6.49983C14.4274 7.30233 14.7499 8.17983 14.7499 9.0798C14.7499 12.4248 11.7274 14.7498 7.99994 14.7498C4.27244 14.7498 1.24994 12.4998 1.24994 9.0798C1.24994 8.14233 1.62494 7.27983 1.99994 6.49983C1.99994 6.49983 0.582437 1.68483 1.62494 1.24983C2.66744 0.814832 5.16494 1.42233 6.49994 2.92233C6.99195 2.80916 7.49507 2.7513 7.99994 2.74983ZM7.4375 11.1875H8.5625L8 11.75L7.4375 11.1875Z"
          stroke="white" // Default stroke color
          stroke-linecap="round" // Rounds the endpoints of lines
          stroke-linejoin="round" // Rounds the corners where lines meet
        />
      </svg>
    </button>
  );
}

export default OutlinedCat;
