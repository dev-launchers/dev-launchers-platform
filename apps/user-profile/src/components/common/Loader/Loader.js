/**
 * Loader Component
 *
 * A reusable component that displays a spinning loader when `isLoading` is true.
 * It supports customizable height, border width, and border color for styling flexibility.
 *
 * Props:
 * - `isLoading` (Boolean): Determines if the loader is visible (default: true).
 * - `heightClass` (String): Tailwind CSS class for the loader's height and width.
 * - `borderWidthClass` (String): Tailwind CSS class for the loader's border width.
 * - `borderColorClass` (String): Tailwind CSS class for the loader's border color.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element|null} The rendered Loader component or null if not loading.
 */
const Loader = ({
  isLoading = true, // Whether the loader is visible
  heightClass, // Custom height/width classes for the loader
  borderWidthClass, // Custom border width class for the loader
  borderColorClass, // Custom border color class for the loader
}) => {
  return isLoading ? (
    <div
      // Apply custom or default Tailwind CSS classes for loader styling
      className={`${heightClass ?? 'h-6 w-6'} ${
        borderWidthClass ?? 'border-2'
      } ${
        borderColorClass ?? 'border-blue-600'
      } inline-block animate-spin rounded-full border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
    >
      {/* Hidden text for accessibility */}
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  ) : null; // Return null if `isLoading` is false
};

export default Loader;
