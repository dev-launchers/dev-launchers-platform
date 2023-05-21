import { Container, Content } from './StyledBoxContainer';


export default function BoxContainer({
  bgColor,
  marginTop,
  marginBottom,
  paddingHorizontal,
  paddingVertical,
  children,
}) {
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
