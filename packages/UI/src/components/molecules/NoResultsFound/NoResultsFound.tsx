import ufo from '../../../assets/images/ufo.svg';
import { Box, Layer, Typography } from '../../atoms';
import type { NoResultsFoundProps } from '.';
function NoResultsFound({ header, paragraph }: NoResultsFoundProps) {
  return (
    <Layer type="dark" css={{ borderRadius: '16px', padding: '16px' }}>
      <Box
        justifyContent={'center'}
        alignItems={'center'}
        css={{ position: 'relative' }}
      >
        <img
          css={{
            maxWidth: '437px',
            maxHeight: '380px',
            width: '100%',
            height: '100%',
          }}
          src={ufo}
          alt="ufo"
        />
        <Box
          css={{
            position: 'absolute',
            top: '55.76%',
            bottom: '26.5%',
          }}
          gap="8px"
          flexDirection="column"
          width="11%"
        >
          <Typography type="subtitle">{header}</Typography>
          <Typography type="p">{paragraph}</Typography>
        </Box>
      </Box>
    </Layer>
  );
}

export default NoResultsFound;
