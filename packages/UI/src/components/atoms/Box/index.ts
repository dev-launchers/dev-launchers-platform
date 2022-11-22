import React from 'react';

export { Box as default } from './styled.Box';

export interface BoxProps {
  flexDirection?: React.CSSProperties['flexDirection'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  gap?: React.CSSProperties['gap'];
  margin?: React.CSSProperties['margin'];
  marginBlock?:React.CSSProperties['marginBlock'];
  marginInline?: React.CSSProperties['marginInline'];
  padding?:React.CSSProperties['padding'];
  paddingInline?: React.CSSProperties['paddingInline'];
  paddingBlock?: React.CSSProperties['paddingBlock'];
}
