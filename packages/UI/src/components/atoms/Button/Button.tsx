import { twMerge } from 'tailwind-merge';
import { darkColorConfig, lightColorConfig, focusStyles } from './colors';
import { ColorType, PropsType } from './types';

const DEFAULTS = {
  mode: 'dark',
  size: 'small',
  disabled: false,
  type: 'primary',
  color: 'pure',
  iconPosition: 'left',
  as: 'button',
  alertType: 'none',
} as const;

const VALID_OPTIONS = {
  types: ['primary', 'secondary', 'tertiary'],
  modes: ['light', 'dark'],
  sizes: ['small', 'medium', 'large'],
  iconPositions: ['right', 'left'],
  colors: [
    'pure',
    'uranus',
    'jupiter',
    'neptune',
    'saturn',
    'cosmic',
    'nebula',
    'info',
    'warning',
    'success',
    'error',
  ],
  alertTypes: ['none', 'info', 'warning', 'success', 'error'],
} as const;

const STYLES = {
  base: 'rounded-lg px-6 border-[3px] flex items-center justify-center gap-2 text-center transition-all duration-200 font-medium',

  size: {
    small: 'px-1 py-2 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-2 text-lg',
  },

  iconPosition: {
    left: '',
    right: 'flex-row-reverse',
  },

  getColorClasses: (
    type: string,
    color: ColorType,
    state?: 'base' | 'hover' | 'active' | 'disabled' | 'focus',
    mode: 'light' | 'dark' = 'dark'
  ) => {
    const colorConfig = mode === 'light' ? lightColorConfig : darkColorConfig;

    if (state === 'focus') return focusStyles[color];
    const validType = type as keyof typeof colorConfig;

    if (
      state &&
      colorConfig[validType] &&
      (state === 'base' ||
        state === 'hover' ||
        state === 'active' ||
        state === 'disabled')
    ) {
      return colorConfig[validType][state][color];
    }

    return colorConfig[validType]?.base[color] || '';
  },
};

export default function Button(props: PropsType) {
  const mergedProps = { ...DEFAULTS, ...props };
  const {
    mode,
    iconPosition,
    size,
    disabled,
    type,
    color,
    onClick,
    children,
    as,
    href,
    target,
    isAlert,
    alertType,
    icon,
    className,
  } = mergedProps;

  const safeType = validateField(type, VALID_OPTIONS.types);
  const safeMode = validateField(mode, VALID_OPTIONS.modes);
  const safeSize = validateField(size, VALID_OPTIONS.sizes);
  const safeIconPosition = validateField(
    iconPosition,
    VALID_OPTIONS.iconPositions
  );
  const safeColor = validateField(color, VALID_OPTIONS.colors);
  const safeAlertType = validateField(alertType, VALID_OPTIONS.alertTypes);

  const effectiveColor =
    isAlert && safeAlertType !== 'none'
      ? (safeAlertType as ColorType)
      : safeColor;

  const btnClasses = twMerge(
    STYLES.base,
    STYLES.getColorClasses(safeType, effectiveColor, 'base', safeMode),
    STYLES.getColorClasses(safeType, effectiveColor, 'hover', safeMode),
    STYLES.getColorClasses(safeType, effectiveColor, 'active', safeMode),
    STYLES.getColorClasses(safeType, effectiveColor, 'focus', safeMode),
    disabled
      ? STYLES.getColorClasses(safeType, effectiveColor, 'disabled', safeMode)
      : '',
    STYLES.size[safeSize],
    STYLES.iconPosition[safeIconPosition],
    className || ''
  );

  const Component = as === 'a' ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={btnClasses}
      disabled={disabled}
      target={target}
    >
      {icon}
      {children}
    </Component>
  );
}

function validateField<T>(
  field: T | undefined,
  validOptions: readonly T[],
  defaultIndex = 0
) {
  return !field || !validOptions.includes(field)
    ? validOptions[defaultIndex]
    : field;
}
