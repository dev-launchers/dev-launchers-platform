function FilledCharkmark({
  width,
  height,
  colorClass,
  className,
  ...attributes
}) {
  return (
    <button className="appearance-none cursor-auto" {...attributes}>
      <svg
        width={width ?? '16'}
        height={height ?? '13'}
        className={className}
        viewBox="0 0 16 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
