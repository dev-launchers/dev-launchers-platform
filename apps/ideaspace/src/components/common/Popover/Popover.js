import React from 'react';
import popoverSvg from '../../../images/popover.svg';
import {
  Popover, Typography
} from '@mui/material';

const Popballoon = ({
  content,
}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div>
      <img alt='submit_image' src={popoverSvg} aria-describedby={id} variant="contained" onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2, maxWidth: '16rem', color: 'white', backgroundColor: 'black', fontFamily: 'Nunito Sans'}}>
          {content}
          </Typography>
      </Popover></div>
  );
};

export default Popballoon;