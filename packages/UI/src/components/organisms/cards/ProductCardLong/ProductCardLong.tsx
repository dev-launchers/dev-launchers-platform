import { useTheme } from 'styled-components';
import useResponsive from '../../../../hooks/useResponsive';
import { Box, Button, Typography } from '../../../atoms';
import { typographyStyles } from '../../../atoms/Typography';
import { LikeButton, SaveButton, ShareButton } from '../../../molecules';
import { CardDescription, TagsContainer } from '../StyledCommonComponents';
import {
  CardLayer,
  ImageContainer,
  CardWrapper,
} from './StyledProductCardLongComponents';
import type { ProductProps } from '.';

const ProductCardLong = ({
  socialButton,
  defaultButton,
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
  const { isMobile, isDesktop } = useResponsive();
  const theme = useTheme();
  return (
    <CardLayer>
      <CardWrapper>
        <ImageContainer verticalSocialButtons={verticalSocialButtons}>
          <Box
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            css={{
              padding:
                verticalSocialButtons && saveButton
                  ? '0 0 0 32px'
                  : '48px 32px 0',
            }}
          >
            <Typography
              type="h1"
              css={{
                color: theme.colors.GREYSCALE_WHITE,
                margin: 0,
              }}
            >
              {title}
            </Typography>
            <Typography type="h2" css={{ color: theme.colors.GREYSCALE_WHITE }}>
              {subtitle}
            </Typography>
          </Box>

          <Box
            flexDirection={verticalSocialButtons ? 'column' : 'row'}
            gap={verticalSocialButtons ? '87px' : isMobile ? '22px' : '19px'}
            alignItems="flex-end"
            css={{
              height: verticalSocialButtons && saveButton ? '294px' : '40px',
              width: verticalSocialButtons && saveButton ? '114px' : '360px',
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
        </ImageContainer>
        <Box
          flexDirection="column"
          justifyContent="space-between"
          css={{ width: isMobile ? undefined : '856px' }}
        >
          <Box
            flexDirection={isMobile ? 'column' : 'row'}
            justifyContent="space-between"
            gap="32px"
            css={{
              margin: isMobile ? '20px' : '0',
              padding: isMobile ? 'undefined' : '48px 0 16px',
              height: '222px',
            }}
          >
            <CardDescription
              subtitle={isMobile ? undefined : description}
              body={body}
            />
            {isDesktop ? (
              <TagsContainer list={tags} title="Product Tags" />
            ) : undefined}
          </Box>
          <Box
            flexDirection={isMobile ? 'column' : 'row'}
            justifyContent="flex-end"
            alignItems="center"
            css={{ padding: '16px 24px', height: '72px' }}
          >
            <Box
              gap="1rem"
              flexDirection={isMobile ? 'column' : 'row'}
              justifyContent="flex-end"
              css={{ width: isMobile ? '312px' : undefined }}
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
      </CardWrapper>
    </CardLayer>
  );
};
export default ProductCardLong;
