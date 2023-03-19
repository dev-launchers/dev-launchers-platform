import Modal from 'react-modal';
import { useState } from 'react';
import {
  Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { atoms } from '@devlaunchers/components/src/components';

const useConfirm = (title, message) => {
  const [promise, setPromise] = useState(null);

  const confirm = () => new Promise((resolve, reject) => {
    setPromise({ resolve });
  });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => (

    <Dialog
      open={promise !== null}
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '1rem',
          width: '25rem',
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleCancel}
        sx={{
          position: 'absolute',
          right: '1rem',
          top: '0.8rem',
          borderRadius: 0,
          height: '1.5rem',
          width: '1.5rem',
        }}
      >
        x
      </IconButton>

      <DialogTitle
        sx={{
          paddingTop: '2.2rem',
          paddingBottom: '0.5rem'
        }}
      >
        {title}
      </DialogTitle>

      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: '1.1rem',
            paddingBottom: '0.5rem',
          }}
        >
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions
        sx={{
          paddingRight: '1rem',
          backgroundColor: '#F0EDEE',
          height: '3.2rem',
          fontSize: '0.8rem'
        }}
      >
        <atoms.Button
          buttonSize='standard'
          buttonType='alternative'
          onClick={handleCancel}
        >
          CANCEL
        </atoms.Button>
        <atoms.Button
          buttonSize='standard'
          buttonType='primary'
          onClick={handleConfirm}
        >
          LEAVE
        </atoms.Button>
      </DialogActions>

    </Dialog>
  );
  return [ConfirmationDialog, confirm];
};

export default useConfirm;