
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function CircularIndeterminateLoader({text, color}) {
    return (
      <Box align="center" >
        <CircularProgress align="center" sx={{color:color}}/> <br></br>
        <Typography sx={{color:color}}>
          <b>{text}</b>
        </Typography>
      </Box>
    );
  }