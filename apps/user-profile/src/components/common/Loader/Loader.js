/**
 * This is a component that will show a loading page.
 * @return {*}
 */
const Loader = ({
  isLoading = true,
  heightClass,
  borderWidthClass,
  borderColorClass,
}) => {
  return isLoading ? (
    <div
      className={`${heightClass ?? 'h-6 w-6'} ${
        borderWidthClass ?? 'border-2'
      } ${
        borderColorClass ?? 'border-blue-600'
      } inline-block animate-spin rounded-full 00 border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
    >
      <span
        span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >
        {' '}
        Loading...
      </span>
    </div>
  ) : null;
};

export default Loader;
