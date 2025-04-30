/**
 * FilledCamera Component
 * Renders a button containing an SVG icon of a camera with an optional outer ring.
 *
 * @param {Object} props - The component props.
 * @param {string|number} [props.width=38] - Width of the SVG icon.
 * @param {string|number} [props.height=38] - Height of the SVG icon.
 * @param {string} [props.colorClass='fill-[#5C5F5C]'] - CSS class for the main camera fill color.
 * @param {string} [props.ringColorClass='stroke-[#C5C7C3]'] - CSS class for the ring stroke color.
 * @param {boolean} [props.showRing=true] - Controls whether the outer ring around the camera is visible.
 * @param {string} props.className - Additional CSS classes for the SVG element.
 * @param {Object} props.attributes - Additional attributes to spread onto the button element.
 *
 * @returns {JSX.Element} The rendered camera SVG icon wrapped in a button.
 */

function FilledCamera({
  width,
  height,
  colorClass,
  ringColorClass,
  showRing = true,
  className,
  ...attributes
}) {
  return (
    // Button container for the camera SVG
    <button className="appearance-none cursor-auto" {...attributes}>
      {/* SVG element defining the camera icon */}
      <svg
        width={width ?? '38'} // Use provided width or default to 38
        height={height ?? '38'} // Use provided height or default to 38
        className={className} // Additional classes for the SVG
        viewBox="0 0 38 38" // Viewbox defining the SVG's internal coordinate system
        fill="none" // Ensures no default fill for the SVG
        xmlns="http://www.w3.org/2000/svg" // Namespace for the SVG
      >
        {/* Conditional rendering of the outer ring around the camera */}
        {showRing ? (
          <path
            className={`${ringColorClass ?? 'stroke-[#C5C7C3]'}`} // Use provided or default ring stroke color
            d="M18.9031 36.5767C28.274 36.5767 35.8707 28.9801 35.8707 19.6091C35.8707 10.2382 28.274 2.64151 18.9031 2.64151C9.53212 2.64151 1.93545 10.2382 1.93545 19.6091C1.93545 28.9801 9.53212 36.5767 18.9031 36.5767Z"
            fill="white" // Fill color for the ring
            stroke-width="1.93525" // Stroke width for the ring
          />
        ) : null}

        {/* Main camera body */}
        <path
          className={colorClass ?? 'fill-[#5C5F5C]'} // Use provided or default camera fill color
          d="M25.1538 13.8462H23.0215L21.9731 12.2738C21.9169 12.1897 21.8408 12.1206 21.7516 12.0729C21.6624 12.0251 21.5627 12.0001 21.4615 12H16.5385C16.4373 12.0001 16.3376 12.0251 16.2484 12.0729C16.1592 12.1206 16.0831 12.1897 16.0269 12.2738L14.9777 13.8462H12.8462C12.3565 13.8462 11.8869 14.0407 11.5407 14.3869C11.1945 14.7331 11 15.2027 11 15.6923V24.3077C11 24.7973 11.1945 25.2669 11.5407 25.6131C11.8869 25.9593 12.3565 26.1538 12.8462 26.1538H25.1538C25.6435 26.1538 26.1131 25.9593 26.4593 25.6131C26.8055 25.2669 27 24.7973 27 24.3077V15.6923C27 15.2027 26.8055 14.7331 26.4593 14.3869C26.1131 14.0407 25.6435 13.8462 25.1538 13.8462ZM21.7692 19.6923C21.7692 20.24 21.6068 20.7754 21.3025 21.2308C20.9982 21.6862 20.5657 22.0411 20.0597 22.2507C19.5537 22.4603 18.9969 22.5152 18.4598 22.4083C17.9226 22.3015 17.4291 22.0377 17.0419 21.6504C16.6546 21.2632 16.3908 20.7697 16.284 20.2326C16.1771 19.6954 16.232 19.1386 16.4416 18.6326C16.6512 18.1266 17.0061 17.6941 17.4615 17.3898C17.9169 17.0855 18.4523 16.9231 19 16.9231C19.7344 16.9231 20.4388 17.2148 20.9581 17.7342C21.4775 18.2535 21.7692 18.9579 21.7692 19.6923Z"
        />
      </svg>
    </button>
  );
}

export default FilledCamera;
