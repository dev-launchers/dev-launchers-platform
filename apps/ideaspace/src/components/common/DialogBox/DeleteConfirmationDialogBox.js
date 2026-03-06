import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Loader2, Trash } from 'lucide-react';
import { atoms } from '@devlaunchers/components/src/components';
import { cleanData, cleanIdeaForPost } from '../../../utils/StrapiHelper';
import { agent } from '@devlaunchers/utility';
import { Icons } from '@devlaunchers/components/src/assets';

const DeleteConfirmationDialogBox = ({ card, onClose, onDelete }) => {
  const [isDeleting, setIsDeleting] = React.useState(false);
  const handleClose = () => {
    onClose(false);
  };
  const putIdea = async () => {
    const id = card.id;
    const cardForPut = cleanIdeaForPost(card);
    cardForPut.data.status = 'deleted';
    return cleanData(await agent.Ideas.put(id, cardForPut));
  };
  const handleConfirm = () => {
    setIsDeleting(true);
    putIdea()
      .then((res) => {
        if (res.status === 'deleted') {
          onDelete();
        } else {
          alert('Failed to delete idea!');
          onDelete();
        }
      })
      .catch((error) => {
        console.error('Error deleting idea:', error);
        alert('Error deleting idea. Please try again later.');
        onDelete();
      });
  };
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '1rem',
          width: '25rem',
          backgroundColor: 'var(--base-04, #292929)',
        },
        fontFamily: 'Nunito Sans',
      }}
    >
      <DialogTitle
        sx={{
          paddingTop: '16px',
          paddingBottom: '14px',
          fontSize: '1rem',
          fontWeight: 'bold',
          fontFamily: 'Nunito Sans',
          lineHeight: '160%',
          paddingLeft: '20px',
          paddingRight: '20px',
          color: 'var(--content-00, #FFF)',
        }}
        className="flex items-center justify-between"
      >
        <atoms.Box alignItems="center">Permanently delete this idea?</atoms.Box>
        <button
          aria-label="close"
          onClick={handleClose}
          className="bg-transparent text-[#494949]"
          disabled={isDeleting}
        >
          <Icons.Close height={24} width={24} stroke="#fff" />
        </button>
      </DialogTitle>

      <DialogContent sx={{ padding: '0 20px' }}>
        <DialogContentText
          sx={{
            fontSize: '1rem',
            paddingBottom: '0.5rem',
            fontFamily: 'Nunito Sans',
            color: 'var(--content-03, #B9B9B9)',
            lineHeight: '160%',
          }}
        >
          <atoms.Typography type="p">
            This action can't be undone.
          </atoms.Typography>
          <atoms.Typography type="p">
            Are you sure you want to delete this idea?
          </atoms.Typography>
        </DialogContentText>
      </DialogContent>

      <DialogActions
        sx={{
          height: 'auto',
          fontSize: '14px',
          padding: '1.25rem',
          marginTop: '24px',
          borderTop: '1px solid var(--interactive-border, #676767)',
          background: 'var(--surface-04, #292929)',
        }}
      >
        <atoms.Button
          type="secondary"
          size="small"
          mode="light"
          color="nebula"
          onClick={handleClose}
          disabled={isDeleting}
        >
          No, Keep It
        </atoms.Button>
        <atoms.Button
          size="small"
          type="primary"
          mode="dark"
          color="error"
          onClick={handleConfirm}
          disabled={isDeleting}
          style={{
            opacity: isDeleting ? 0.5 : 1,
          }}
        >
          {isDeleting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Trash size={16} />
          )}{' '}
          Yes, Delete
        </atoms.Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialogBox;
