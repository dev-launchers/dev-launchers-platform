import { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { atoms } from '@devlaunchers/components/src/components';
import { Icons } from '@devlaunchers/components/src/assets';
import DialogBoxButton from './DialogBoxButton';

const useConfirm = (title, message, buttonInfo, options = {}) => {
  const [promise, setPromise] = useState(null);
  const isDark = options.variant === 'dark';

  const confirm = () =>
    new Promise((resolve, reject) => {
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
      onClose={handleCancel}
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '1rem',
          width: '25rem',
          ...(isDark && { backgroundColor: 'var(--base-04, #292929)' }),
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
          ...(isDark && { color: 'var(--content-00, #FFF)' }),
        }}
      >
        x
      </IconButton>

      <DialogTitle
        sx={{
          paddingTop: '2.2rem',
          paddingBottom: '0.5rem',
        }}
      >
        <atoms.Box
          alignItems="center"
          style={{
            columnGap: '0.5rem',
            color: title[2] || (isDark ? 'var(--content-00, #FFF)' : undefined),
          }}
        >
          {title[1] == '' ? null : title[1] == 'Success' ? (
            <Icons.Success />
          ) : (
            <Icons.Error />
          )}
          {title[0]}
        </atoms.Box>
      </DialogTitle>

      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: '1.1rem',
            paddingBottom: '0.5rem',
            ...(isDark && { color: 'var(--content-03, #B9B9B9)' }),
          }}
        >
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions
        sx={{
          paddingRight: '1rem',
          height: '3.2rem',
          fontSize: '0.8rem',
          ...(isDark
            ? {
                background: 'var(--surface-04, #292929)',
                borderTop: '1px solid var(--interactive-border, #676767)',
              }
            : { backgroundColor: '#F0EDEE' }),
        }}
      >
        <DialogBoxButton
          handleConfirmButton={handleConfirm}
          handleCancelButton={handleCancel}
          buttonDetail={buttonInfo}
          variant={options.variant}
        />
      </DialogActions>
    </Dialog>
  );
  return [ConfirmationDialog, confirm];
};

export default useConfirm;
