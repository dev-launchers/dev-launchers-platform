import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@devlaunchers/components/components/atoms';

export default function CircularIndeterminateLoader({ text, color }) {
  return (
    <Box align="center">
      <CircularProgress align="center" sx={{ color: color }} /> <br></br>
      <Typography variant="secondary">
        <b>{text}</b>
      </Typography>
    </Box>
  );
}
