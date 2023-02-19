import { useTheme } from 'styled-components';
import testImage from '../../../../assets/images/test-image.png';
import useResponsive from '../../../../hooks/useResponsive';
import { Box, Layer, Button, Typography } from '../../../atoms';
import { typographyStyles } from '../../../atoms/Typography';
import { LikeButton, SaveButton, ShareButton } from '../../../molecules';
import { CardDescription, TagsContainer } from '../StyledCommonComponents';
import type { ProductProps } from '.';
const ProductCardLong = ({
  socialButton,
  defaultButton,
  image,
  saveButton,
  title,
  subtitle,
  description,
  body,
  button1,
  button2,
  tags,
  verticalSocialButtons,
}: ProductProps) => {
  const { isMobile } = useResponsive();
  const theme = useTheme();
  return (
    <Layer
      type="light"
      css={{
        maxWidth: isMobile ? '360px' : '1216px',
        borderRadius: '16px',
      }}
    >
      <Box
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems={isMobile ? undefined : 'center'}
        gap="32px"
      >
        <Box
          flexDirection={verticalSocialButtons ? 'row' : 'column'}
          justifyContent={verticalSocialButtons ? undefined : 'flex-end'}
          alignItems={verticalSocialButtons ? 'center' : undefined}
          css={{
            backgroundImage: image
              ? `linear-gradient(rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url(${testImage})`
              : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '294px',
            width: '360px',
            borderRadius: '16px 0 0 16px',
          }}
        >
          <Box flexDirection="column" css={{ margin: '0 0 52px 32px' }}>
            {isMobile ? undefined : (
              <>
                <Typography
                  type="h1"
                  css={{
                    color: theme.colors.GREYSCALE_WHITE,
                    margin: 0,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  type="h5"
                  css={{ color: theme.colors.GREYSCALE_WHITE }}
                >
                  {subtitle}
                </Typography>
              </>
            )}
          </Box>
          <Box
            flexDirection={verticalSocialButtons ? 'column' : 'row'}
            gap={verticalSocialButtons ? '87px' : '19px'}
            css={{
              height: verticalSocialButtons && saveButton ? '294px' : undefined,
              width: verticalSocialButtons && saveButton ? '114px' : undefined,
            }}
          >
            {saveButton ? (
              <SaveButton
                text="Save"
                css={{
                  borderRadius: verticalSocialButtons
                    ? ' 0.5rem 0 0 0.5rem'
                    : ' 0 0.5rem 0.5rem 0.5rem',
                }}
              />
            ) : undefined}
            {socialButton ? (
              <>
                <LikeButton
                  text="Like"
                  css={{
                    borderRadius: verticalSocialButtons
                      ? ' 0.5rem 0 0 0.5rem'
                      : undefined,
                  }}
                />
                <ShareButton
                  text="Share"
                  css={{ borderRadius: ' 0.5rem 0 0 0.5rem' }}
                />
              </>
            ) : undefined}
          </Box>
        </Box>

        <Box
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="space-between"
          gap="32px"
          css={{ margin: isMobile ? '20px' : '0' }}
        >
          {isMobile ? (
            <>
              <Typography
                type="h1"
                css={{
                  color: theme.colors.GREYSCALE_BLACK,
                  margin: 0,
                }}
              >
                {title}
              </Typography>
              <Typography
                type="h5"
                css={{ color: theme.colors.GREYSCALE_BLACK }}
              >
                {subtitle}
              </Typography>
            </>
          ) : undefined}

          <CardDescription
            subtitle={isMobile ? undefined : description}
            body={body}
          />

          <Box flexDirection="column" justifyContent="space-between" gap="80px">
            {isMobile ? undefined : (
              <TagsContainer list={tags} title="Product Tags" />
            )}
            <Box
              gap="1rem"
              flexDirection={isMobile ? 'column' : 'row'}
              justifyContent="flex-end"
            >
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
export default ProductCardLong;
