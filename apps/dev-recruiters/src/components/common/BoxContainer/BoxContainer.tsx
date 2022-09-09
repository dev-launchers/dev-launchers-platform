import { Theme } from '../../../styles/theme';
import { Container, Content } from './StyledBoxContainer';

interface Props {
  bgColor?: Partial<keyof Theme['colors']>;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginTop?: number;
  marginBottom?: number;
  children: JSX.Element | JSX.Element[];
}

export default function BoxContainer({
  bgColor,
  marginTop,
  marginBottom,
  paddingHorizontal,
  paddingVertical,
  children,
}: Props) {
  return (
    <Container
      bgColor={bgColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Content
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
      >
        {children}
      </Content>
    </Container>
  );
}
