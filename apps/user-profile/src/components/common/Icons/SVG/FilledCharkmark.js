/**
 * FilledCharkmark Component
 * Renders a button containing an SVG checkmark icon with customizable dimensions and color.
 *
 * @param {Object} props - The component props.
 * @param {string|number} [props.width=16] - Width of the SVG icon.
 * @param {string|number} [props.height=13] - Height of the SVG icon.
 * @param {string} [props.colorClass='fill-white'] - CSS class for the fill color of the checkmark.
 * @param {string} props.className - Additional CSS classes for the SVG element.
 * @param {Object} props.attributes - Additional attributes to spread onto the button element.
 *
 * @returns {JSX.Element} The rendered checkmark SVG icon wrapped in a button.
 */

function FilledCharkmark({
  width,
  height,
  colorClass,
  className,
  ...attributes
}) {
  return (
    // Button container for the checkmark SVG
    <button className="appearance-none cursor-auto" {...attributes}>
      {/* SVG element defining the checkmark icon */}
      <svg
        width={width ?? '16'} // Use provided width or default to 16
        height={height ?? '13'} // Use provided height or default to 13
        className={className} // Additional CSS classes for the SVG
        viewBox="0 0 16 13" // Viewbox defining the SVG's internal coordinate system
        fill="none" // Ensures no default fill for the SVG
        xmlns="http://www.w3.org/2000/svg" // Namespace for the SVG
      >
        <path
          className={colorClass ?? 'fill-white'}
          d="M5.33307 9.13336L13.1997 1.26669C13.4442 1.02225 13.7553 0.900024 14.1331 0.900024C14.5109 0.900024 14.822 1.02225 15.0664 1.26669C15.3109 1.51114 15.4331 1.82225 15.4331 2.20002C15.4331 2.5778 15.3109 2.88891 15.0664 3.13336L6.26641 11.9334C5.99974 12.2 5.68863 12.3334 5.33307 12.3334C4.97752 12.3334 4.66641 12.2 4.39974 11.9334L0.933072 8.46669C0.688628 8.22225 0.566406 7.91114 0.566406 7.53336C0.566406 7.15558 0.688628 6.84447 0.933072 6.60002C1.17752 6.35558 1.48863 6.23336 1.86641 6.23336C2.24418 6.23336 2.5553 6.35558 2.79974 6.60002L5.33307 9.13336Z"
        />
      </svg>
    </button>
  );
}

export default FilledCharkmark;
