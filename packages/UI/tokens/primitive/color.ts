// primitives/colors.ts

// Define the color palette type using a more straightforward naming convention
interface ColorPalette {
  // Grey scale
  grey50: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;

  // Brand colors
  jupiter50: string;
  jupiter100: string;
  jupiter200: string;
  jupiter300: string;
  jupiter400: string;
  jupiter500: string;
  jupiter600: string;
  jupiter700: string;
  jupiter800: string;
  jupiter900: string;

  saturn50: string;
  saturn100: string;
  saturn200: string;
  saturn300: string;
  saturn400: string;
  saturn500: string;
  saturn600: string;
  saturn700: string;
  saturn800: string;
  saturn900: string;

  uranus50: string;
  uranus100: string;
  uranus200: string;
  uranus300: string;
  uranus400: string;
  uranus500: string;
  uranus600: string;
  uranus700: string;
  uranus800: string;
  uranus900: string;

  neptune50: string;
  neptune100: string;
  neptune200: string;
  neptune300: string;
  neptune400: string;
  neptune500: string;
  neptune600: string;
  neptune700: string;
  neptune800: string;
  neptune900: string;

  nebula50: string;
  nebula100: string;
  nebula200: string;
  nebula300: string;
  nebula400: string;
  nebula500: string;
  nebula600: string;
  nebula700: string;
  nebula800: string;
  nebula900: string;

  cosmic50: string;
  cosmic100: string;
  cosmic200: string;
  cosmic300: string;
  cosmic400: string;
  cosmic500: string;
  cosmic600: string;
  cosmic700: string;
  cosmic800: string;
  cosmic900: string;

  // Alert colors
  success50: string;
  success100: string;
  success200: string;
  success300: string;
  success400: string;
  success500: string;
  success600: string;
  success700: string;
  success800: string;
  success900: string;

  info50: string;
  info100: string;
  info200: string;
  info300: string;
  info400: string;
  info500: string;
  info600: string;
  info700: string;
  info800: string;
  info900: string;

  warning50: string;
  warning100: string;
  warning200: string;
  warning300: string;
  warning400: string;
  warning500: string;
  warning600: string;
  warning700: string;
  warning800: string;
  warning900: string;

  error50: string;
  error100: string;
  error200: string;
  error300: string;
  error400: string;
  error500: string;
  error600: string;
  error700: string;
  error800: string;
  error900: string;
}

export const colors: ColorPalette = {
  // Grey scale
  grey50: 'rgba(255, 255, 255, var(--opacity))',
  grey100: 'rgba(240, 237, 238, var(--opacity))',
  grey200: 'rgba(218, 216, 217, var(--opacity))',
  grey300: 'rgba(185, 185, 185, var(--opacity))',
  grey400: 'rgba(151, 151, 151, var(--opacity))',
  grey500: 'rgba(103, 103, 103, var(--opacity))',
  grey600: 'rgba(73, 73, 73, var(--opacity))',
  grey700: 'rgba(41, 41, 41, var(--opacity))',
  grey800: 'rgba(28, 28, 28, var(--opacity))',
  grey900: 'rgba(0, 0, 0, var(--opacity))',

  // Jupiter
  jupiter50: 'rgba(255, 242, 231, var(--opacity))',
  jupiter100: 'rgba(255, 215, 180, var(--opacity))',
  jupiter200: 'rgba(255, 196, 144, var(--opacity))',
  jupiter300: 'rgba(255, 169, 94, var(--opacity))',
  jupiter400: 'rgba(255, 153, 62, var(--opacity))',
  jupiter500: 'rgba(255, 127, 14, var(--opacity))',
  jupiter600: 'rgba(232, 116, 13, var(--opacity))',
  jupiter700: 'rgba(181, 90, 10, var(--opacity))',
  jupiter800: 'rgba(140, 70, 8, var(--opacity))',
  jupiter900: 'rgba(107, 53, 6, var(--opacity))',

  // Saturn
  saturn50: 'rgba(255, 247, 230, var(--opacity))',
  saturn100: 'rgba(255, 229, 176, var(--opacity))',
  saturn200: 'rgba(255, 216, 138, var(--opacity))',
  saturn300: 'rgba(255, 199, 84, var(--opacity))',
  saturn400: 'rgba(255, 188, 51, var(--opacity))',
  saturn500: 'rgba(255, 171, 0, var(--opacity))',
  saturn600: 'rgba(232, 156, 0, var(--opacity))',
  saturn700: 'rgba(181, 121, 0, var(--opacity))',
  saturn800: 'rgba(140, 94, 0, var(--opacity))',
  saturn900: 'rgba(107, 72, 0, var(--opacity))',

  // Uranus
  uranus50: 'rgba(242, 249, 251, var(--opacity))',
  uranus100: 'rgba(216, 236, 243, var(--opacity))',
  uranus200: 'rgba(197, 227, 237, var(--opacity))',
  uranus300: 'rgba(171, 215, 228, var(--opacity))',
  uranus400: 'rgba(154, 207, 223, var(--opacity))',
  uranus500: 'rgba(129, 195, 215, var(--opacity))',
  uranus600: 'rgba(117, 177, 196, var(--opacity))',
  uranus700: 'rgba(92, 138, 153, var(--opacity))',
  uranus800: 'rgba(71, 107, 118, var(--opacity))',
  uranus900: 'rgba(54, 82, 90, var(--opacity))',

  // Neptune
  neptune50: 'rgba(235, 242, 246, var(--opacity))',
  neptune100: 'rgba(194, 214, 227, var(--opacity))',
  neptune200: 'rgba(164, 195, 214, var(--opacity))',
  neptune300: 'rgba(123, 167, 195, var(--opacity))',
  neptune400: 'rgba(97, 150, 183, var(--opacity))',
  neptune500: 'rgba(58, 124, 165, var(--opacity))',
  neptune600: 'rgba(53, 113, 150, var(--opacity))',
  neptune700: 'rgba(41, 88, 117, var(--opacity))',
  neptune800: 'rgba(32, 68, 91, var(--opacity))',
  neptune900: 'rgba(24, 52, 69, var(--opacity))',

  // Nebula
  nebula50: 'rgba(241, 235, 247, var(--opacity))',
  nebula100: 'rgba(205, 183, 225, var(--opacity))',
  nebula200: 'rgba(189, 156, 222, var(--opacity))',
  nebula300: 'rgba(166, 129, 202, var(--opacity))',
  nebula400: 'rgba(153, 111, 195, var(--opacity))',
  nebula500: 'rgba(115, 57, 172, var(--opacity))',
  nebula600: 'rgba(105, 52, 157, var(--opacity))',
  nebula700: 'rgba(82, 40, 122, var(--opacity))',
  nebula800: 'rgba(63, 31, 95, var(--opacity))',
  nebula900: 'rgba(48, 24, 72, var(--opacity))',

  // Cosmic
  cosmic50: 'rgba(235, 237, 247, var(--opacity))',
  cosmic100: 'rgba(194, 200, 229, var(--opacity))',
  cosmic200: 'rgba(164, 173, 217, var(--opacity))',
  cosmic300: 'rgba(122, 135, 199, var(--opacity))',
  cosmic400: 'rgba(97, 112, 189, var(--opacity))',
  cosmic500: 'rgba(57, 76, 172, var(--opacity))',
  cosmic600: 'rgba(52, 69, 157, var(--opacity))',
  cosmic700: 'rgba(40, 54, 122, var(--opacity))',
  cosmic800: 'rgba(31, 42, 95, var(--opacity))',
  cosmic900: 'rgba(24, 32, 72, var(--opacity))',

  // Success
  success50: 'rgba(236, 249, 237, var(--opacity))',
  success100: 'rgba(196, 235, 198, var(--opacity))',
  success200: 'rgba(167, 226, 170, var(--opacity))',
  success300: 'rgba(127, 212, 131, var(--opacity))',
  success400: 'rgba(102, 204, 107, var(--opacity))',
  success500: 'rgba(58, 174, 64, var(--opacity))',
  success600: 'rgba(45, 136, 50, var(--opacity))',
  success700: 'rgba(34, 102, 38, var(--opacity))',
  success800: 'rgba(27, 80, 29, var(--opacity))',
  success900: 'rgba(21, 61, 22, var(--opacity))',

  // Info
  info50: 'rgba(234, 248, 246, var(--opacity))',
  info100: 'rgba(190, 232, 228, var(--opacity))',
  info200: 'rgba(159, 221, 215, var(--opacity))',
  info300: 'rgba(115, 206, 197, var(--opacity))',
  info400: 'rgba(88, 197, 186, var(--opacity))',
  info500: 'rgba(46, 182, 169, var(--opacity))',
  info600: 'rgba(39, 155, 143, var(--opacity))',
  info700: 'rgba(25, 99, 93, var(--opacity))',
  info800: 'rgba(17, 69, 65, var(--opacity))',
  info900: 'rgba(12, 49, 46, var(--opacity))',

  // Warning
  warning50: 'rgba(253, 250, 231, var(--opacity))',
  warning100: 'rgba(248, 239, 179, var(--opacity))',
  warning200: 'rgba(245, 231, 142, var(--opacity))',
  warning300: 'rgba(240, 220, 91, var(--opacity))',
  warning400: 'rgba(237, 213, 59, var(--opacity))',
  warning500: 'rgba(233, 203, 10, var(--opacity))',
  warning600: 'rgba(212, 185, 9, var(--opacity))',
  warning700: 'rgba(107, 93, 5, var(--opacity))',
  warning800: 'rgba(82, 71, 3, var(--opacity))',
  warning900: 'rgba(51, 44, 2, var(--opacity))',

  // Error
  error50: 'rgba(249, 236, 236, var(--opacity))',
  error100: 'rgba(235, 196, 196, var(--opacity))',
  error200: 'rgba(226, 152, 152, var(--opacity))',
  error300: 'rgba(212, 127, 127, var(--opacity))',
  error400: 'rgba(204, 102, 102, var(--opacity))',
  error500: 'rgba(190, 85, 85, var(--opacity))',
  error600: 'rgba(174, 58, 58, var(--opacity))',
  error700: 'rgba(136, 45, 45, var(--opacity))',
  error800: 'rgba(105, 35, 35, var(--opacity))',
  error900: 'rgba(80, 27, 27, var(--opacity))',
} as const;

// Helper function with simpler typing
export const getColorWithOpacity = (
  colorKey: keyof ColorPalette,
  opacity: number
): string => {
  return colors[colorKey].replace('var(--opacity)', opacity.toString());
};

export type { ColorPalette };
