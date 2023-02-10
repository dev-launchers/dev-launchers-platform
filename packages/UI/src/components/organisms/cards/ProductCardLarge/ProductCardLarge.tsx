import React from 'react';
import testImage from '../../../../assets/images/test-image.png';
import useResponsive from '../../../../hooks/useResponsive';
import { Box, Layer, Button, Link } from '../../../atoms';
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
              {button1?.text && (
                <Button
                  buttonType={defaultButton ? 'secondary' : 'alternative'}
                  buttonSize="xl"
                  onClick={button1.onClick}
                >
                  <Link href={button1.href}>{button1?.text}</Link>
                </Button>
              )}
              {button2?.text && (
                <Button
                  buttonType={defaultButton ? 'secondary' : 'alternative'}
                  buttonSize="xl"
                  onClick={button2.onClick}
                >
                  <Link href={button2.href}>{button2?.text}</Link>
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layer>
  );
};
export default ProductCardLarge;
