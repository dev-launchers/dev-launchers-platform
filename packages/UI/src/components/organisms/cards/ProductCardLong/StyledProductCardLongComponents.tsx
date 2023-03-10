import testImage from '../../../../assets/images/test-image.png';
import useResponsive from '../../../../hooks/useResponsive';
import { Box, Layer } from '../../../atoms';
import type { ProductProps } from '.';

export const CardLayer = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useResponsive();
  return (
    <Layer
      type="light"
      css={{
        maxWidth: isMobile ? '360px' : '1216px',
        borderRadius: '16px',
      }}
    >
      {children}
    </Layer>
  );
};

export const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useResponsive();
  return (
    <Box
      flexDirection={isMobile ? 'column' : 'row'}
      alignItems={isMobile ? undefined : 'center'}
      gap={isMobile ? undefined : '32px'}
    >
      {children}
    </Box>
  );
};

export const ImageContainer = ({
  children,
  verticalSocialButtons,
}: {
  children: React.ReactNode;
  verticalSocialButtons: ProductProps['verticalSocialButtons'];
}) => {
  const { isMobile } = useResponsive();
  return (
    <Box
      flexDirection={verticalSocialButtons ? 'row' : 'column'}
      justifyContent="space-between"
      alignItems="center"
      gap="8px"
      css={{
        backgroundImage: `url(${testImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '294px',
        minWidth: '360px',
        borderRadius: isMobile ? '16px 16px 0 16px' : '16px 0 0 16px',
        padding: 0,
      }}
    >
      {children}
    </Box>
  );
};
