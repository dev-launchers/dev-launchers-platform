import { useTheme } from 'styled-components';
import testImage from '../../../../assets/images/test-image.png';
import useResponsive from '../../../../hooks/useResponsive';
import { Box, Layer, Button, Link } from '../../../atoms';
import { typographyStyles } from '../../../atoms/Typography';
import { LikeButton, SaveButton, ShareButton } from '../../../molecules';
import { CardDescription } from '../StyledCommonComponents';
import type { ProductProps } from '.';
const ProductCardLarge = ({
  socialButton,
  defaultButton,
  image,
  saveButton,
  title,
  subtitle,
  body,
  button1,
  button2,
}: ProductProps) => {
  const { isMobile } = useResponsive();
  const theme = useTheme();
  return (
    <Layer
      type="light"
      css={{
        maxWidth: isMobile ? '360px' : '966px',
        borderRadius: '16px',
        maxHeight: isMobile ? '575px' : undefined,
      }}
    >
      <Box flexDirection="column">
        {image ? (
          <img src={testImage} alt="Banner" height="642px"></img>
        ) : undefined}
        {saveButton ? (
          <Box justifyContent="flex-end">
            <SaveButton text="Save" />
          </Box>
        ) : undefined}
        <Box flexDirection="column" padding="48px 64px 32px 64px">
          <Box css={{ marginBottom: isMobile ? '16px' : '48px' }}>
            <CardDescription title={title} subtitle={subtitle} body={body} />
          </Box>
          <Box
            justifyContent={socialButton ? 'space-between' : 'flex-end'}
            flexWrap="wrap"
          >
            {socialButton && !isMobile ? (
              <Box gap="1rem">
                <LikeButton text="Like" />
                <ShareButton text="Share" />
              </Box>
            ) : undefined}
            <Box gap="1rem" flexDirection={isMobile ? 'column' : 'row'}>
              <Button
                buttonType={defaultButton ? 'secondary' : 'alternative'}
                buttonSize="xl"
                onClick={button1.onClick}
              >
                <a
                  href={button1.href}
                  css={typographyStyles.button}
                  style={{
                    color: defaultButton
                      ? theme.colors.GREYSCALE_WHITE
                      : theme.colors.GREYSCALE_BLACK,
                    textDecoration: 'none',
                  }}
                >
                  {button1.text}
                </a>
              </Button>

              <Button
                buttonType={defaultButton ? 'primary' : 'alternative'}
                buttonSize="xl"
                onClick={button2.onClick}
              >
                <a
                  href={button2.href}
                  css={typographyStyles.button}
                  style={{
                    color: defaultButton
                      ? theme.colors.GREYSCALE_WHITE
                      : theme.colors.GREYSCALE_BLACK,
                    textDecoration: 'none',
                  }}
                >
                  {button2.text}
                </a>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layer>
  );
};
export default ProductCardLarge;
