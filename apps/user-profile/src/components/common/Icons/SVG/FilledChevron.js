/**
 * @description
 * This is a chevron icon that can be dynamically modified using any of the
 * attributes listed below.
 * @height `height` sets the height of the svg element
 * @width `width` sets the width of the svg element
 * @point `point` Changes the angle of the chevron e.g `<FilledChevron point='up'>`
 * @colorClass `colorClass` changes the color of the svg/icon, use the **tailwind** `fill-[colour]` class names
 * e.g `<FilledChevron colorClass="fill-red-600">`
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
      angle = '90';
      break;
    }
    case 'down': {
      angle = '-90';
      break;
    }
    case 'left': {
      angle = '0';
      break;
    }
    case 'right': {
      angle = '180';
      break;
    }
    default: {
      angle = point ?? '0';
    }
  }
  return (
    <button className="appearance-none cursor-auto" {...attributes}>
      <svg
        width={width ?? '8'}
        height={height ?? '14'}
        viewBox="0 0 8 14"
        transform={`rotate(${angle})`}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
