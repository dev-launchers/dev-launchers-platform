import * as React from 'react';
import {
  atoms,
  organisms,
  molecules,
} from '@devlaunchers/components/src/components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

const TitledHeader = ({ title, backButtonUrl }) => {
  const router = useRouter();
  const theme = useTheme();
  const finalSlashIndex = router.asPath.lastIndexOf('/');
  const previousPath = router.asPath.slice(0, finalSlashIndex);

  return (
    <atoms.Layer type="dark" hasRainbowBottom>
      <atoms.Box
        paddingBlock="2rem"
        paddingInline="1rem"
        justifyContent="space-between"
        alignItems="center"
        flexWrap='wrap'
      >
        <Link href={backButtonUrl || previousPath} passHref>
          <a>
            <molecules.BackButton type="small" withLabel={false} />
          </a>
        </Link>
        <atoms.Box margin='0 1rem 0 0'>
          <atoms.Typography
            type="h1"
            css={{ color: theme.colors.GREYSCALE_WHITE, textAlign: 'center' }}
          >
            {title}
          </atoms.Typography>
        </atoms.Box>
      </atoms.Box>
    </atoms.Layer>
  );
};

export default TitledHeader;
