/**
 * @description
 * Renders a chevron icon wrapped in a button, which can be dynamically rotated and styled.
 *
 * @param {Object} props - The component props.
 * @param {string|number} [props.width=8] - Sets the width of the SVG element.
 * @param {string|number} [props.height=14] - Sets the height of the SVG element.
 * @param {string} [props.point=''] - Controls the rotation angle of the chevron. Accepts:
 *   - 'up': Rotates the chevron 90 degrees upwards.
 *   - 'down': Rotates the chevron -90 degrees downwards.
 *   - 'left': Points the chevron to the left (default orientation).
 *   - 'right': Rotates the chevron 180 degrees to point right.
 *   - Custom angle: You can also pass a custom numeric angle (e.g., '45').
 * @param {string} [props.colorClass='fill-grayscale-600'] - CSS class to set the fill color of the chevron.
 *   Use Tailwind's `fill-[color]` class for customization, e.g., `fill-red-500`.
 * @param {string} props.className - Additional CSS classes for the SVG element.
 * @param {Object} props.attributes - Additional attributes to spread onto the button element.
 *
 * @example
 * <FilledChevron point="up" colorClass="fill-blue-600" />
 * <FilledChevron width={12} height={18} point="45" />
 */
function FilledChevron({
  width,
  height,
  colorClass,
  point = '',
  className,
  ...attributes
}) {
  let angle = '';
  switch (point) {
    case 'up': {
      angle = '90'; // Rotate chevron 90 degrees for "up" orientation
      break;
    }
    case 'down': {
      angle = '-90'; // Rotate chevron -90 degrees for "down" orientation
      break;
    }
    case 'left': {
      angle = '0'; // Default "left" orientation
      break;
    }
    case 'right': {
      angle = '180'; // Rotate chevron 180 degrees for "right" orientation
      break;
    }
    default: {
      angle = point ?? '0'; // Use custom angle or default to '0' (left)
    }
  }
  return (
    // Button container for the chevron SVG
    <button className="appearance-none cursor-auto" {...attributes}>
      {/* SVG element defining the chevron icon */}
      <svg
        width={width ?? '8'} // Use provided width or default to 8
        height={height ?? '14'} // Use provided height or default to 14
        viewBox="0 0 8 14" // Defines the SVG's internal coordinate system
        transform={`rotate(${angle})`} // Applies rotation based on the `point` prop
        className={className} // Additional CSS classes for the SVG
        fill="none" // Ensures no default fill for the SVG
        xmlns="http://www.w3.org/2000/svg" // Namespace for the SVG
      >
        <path
          className={colorClass ?? 'fill-grayscale-600'}
          d="M7.2334 0.933313C7.40007 1.09998 7.4834 1.29731 7.4834 1.52531C7.4834 1.75331 7.40007 1.95042 7.2334 2.11665L2.35007 6.99998L7.25007 11.9C7.40562 12.0555 7.4834 12.25 7.4834 12.4833C7.4834 12.7166 7.40007 12.9166 7.2334 13.0833C7.06673 13.25 6.8694 13.3333 6.6414 13.3333C6.4134 13.3333 6.21629 13.25 6.05007 13.0833L0.450065 7.46665C0.383399 7.39998 0.336066 7.32776 0.308066 7.24998C0.280066 7.1722 0.266288 7.08887 0.266732 6.99998C0.266732 6.91109 0.280732 6.82776 0.308732 6.74998C0.336732 6.6722 0.383843 6.59998 0.450065 6.53331L6.06673 0.916647C6.22229 0.761091 6.41407 0.683313 6.64207 0.683313C6.87007 0.683313 7.06718 0.766646 7.2334 0.933313Z"
        />
      </svg>
    </button>
  );
}

export default FilledChevron;
