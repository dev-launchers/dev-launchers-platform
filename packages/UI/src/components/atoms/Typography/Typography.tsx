import { Text } from './Styled.Typography';
import type { TypographyProps } from '.';

const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
  type = 'p',
  children,
  ...props
}) => {
  let tag: Extract<
    TypographyProps['type'],
    'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'label'
  >;
  if (type === 'subtitle') {
    tag = 'p';
  } else if (type === 'labelSmall' || type === 'label') {
    tag = 'label';
  } else if (type === 'h1' || type === 'h2' || type === 'h3' || type === 'h4') {
    tag = type;
  } else if (type === 'p' || type === 'pLarge' || type === 'pSmall') {
    tag = 'p';
  } else {
    tag = 'p';
  }
  return (
    <Text type={type} as={tag} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
