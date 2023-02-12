import React from 'react';
import { useTheme } from 'styled-components';
import testImage from '../../../../assets/images/test-image.png';
import useResponsive from '../../../../hooks/useResponsive';
import { Box, Layer, Button, Link, Typography } from '../../../atoms';
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
}: ProductProps) => {
  const { isMobile } = useResponsive();
  const theme = useTheme();
  return (
    <Layer
      type="light"
      css={{
        maxWidth: isMobile ? '360px' : '1216px',
        borderRadius: '16px',
        maxHeight: isMobile ? '575px' : undefined,
      }}
    >
      <Box
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems="center"
        gap="32px"
      >
        <Box
          flexDirection="column"
          justifyContent="flex-end"
          css={{
            backgroundImage: image
              ? `linear-gradient(rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url(${testImage})`
              : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '294px',
            borderRadius: '16px 0 0 16px',
          }}
        >
          <Box flexDirection="column" css={{ margin: '0 0 52px 32px' }}>
            <Typography
              type="h1"
              css={{
                color: theme.colors.GREYSCALE_WHITE,
                margin: 0,
              }}
            >
              {title}
            </Typography>
            <Typography type="h5" css={{ color: theme.colors.GREYSCALE_WHITE }}>
              {subtitle}
            </Typography>
          </Box>
          <Box flexDirection="row" gap="16px">
            {saveButton ? (
              <SaveButton
                text="Save"
                css={{ borderRadius: ' 0 0.5rem 0.5rem 0' }}
              />
            ) : undefined}
            {socialButton && !isMobile ? (
              <>
                <LikeButton text="Like" />
                <ShareButton text="Share" />
              </>
            ) : undefined}
          </Box>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" gap="32px">
          <CardDescription subtitle={description} body={body} />

          <Box flexDirection="column" justifyContent="space-between" gap="80px">
            <TagsContainer list={tags} title="Product Tags" />
            <Box gap="1rem" flexDirection="row" justifyContent="flex-end">
              <Button
                buttonType={defaultButton ? 'secondary' : 'alternative'}
                buttonSize="xl"
                onClick={button1.onClick}
              >
                <Link href={button1.href}>{button1.text}</Link>
              </Button>

              <Button
                buttonType={defaultButton ? 'secondary' : 'alternative'}
                buttonSize="xl"
                onClick={button2.onClick}
              >
                <Link href={button2.href}>{button2.text}</Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layer>
  );
};
export default ProductCardLong;
