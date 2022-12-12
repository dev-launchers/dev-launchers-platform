import type CSS from 'csstype';

export { Box as default } from './styled.Box';
export interface BoxProps {
  flexDirection?: CSS.Properties['flexDirection'];
  justifyContent?: CSS.Properties['justifyContent'];
  alignItems?: CSS.Properties['alignItems'];
  gap?: CSS.Properties['gap'];
  margin?: CSS.Properties['margin'];
  marginBlock?: CSS.Properties['marginBlock'];
  marginInline?: CSS.Properties['marginInline'];
  padding?: CSS.Properties['padding'];
  paddingInline?: CSS.Properties['paddingInline'];
  paddingBlock?: CSS.Properties['paddingBlock'];
  flexWrap?: CSS.Properties['flexWrap'];
  maxWidth?: CSS.Properties['maxWidth'];
  width?: CSS.Properties['width'];
}
