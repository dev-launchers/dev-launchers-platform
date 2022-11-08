export { Box as default } from './styled.Box';

export interface BoxProps {
  flexDirection?: React.CSSProperties['flexDirection'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  gap?: React.CSSProperties['gap'];
}
