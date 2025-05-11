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
        }}
        className="flex items-center justify-between"
      >
        <atoms.Box alignItems="center">Permanently delete this idea?</atoms.Box>
        <button
          aria-label="close"
          onClick={handleClose}
          className="bg-[#ffffff] text-[#494949] hover:text-[#494949]"
          disabled={isDeleting}
        >
          <Icons.Close height={24} width={24} />
        </button>
      </DialogTitle>

      <DialogContent sx={{ padding: '0 20px' }}>
        <DialogContentText
          sx={{
            fontSize: '1rem',
            paddingBottom: '0.5rem',
            fontFamily: 'Nunito Sans',
            color: '#494949',
            lineHeight: '160%',
          }}
        >
          This action can't be undone. <br />
          Are you sure you want to delete this idea?
        </DialogContentText>
      </DialogContent>

      <DialogActions
        sx={{
          height: 'auto',
          fontSize: '14px',
          padding: '1.25rem',
          marginTop: '24px',
        }}
        className="border-t border-t-[#4747471a]"
      >
        <button
          className="bg-[#f0edee] rounded-md px-[18px] py-3"
          onClick={handleClose}
          disabled={isDeleting}
        >
          No, Keep It
        </button>
        <button
          className="bg-[#882D2D] rounded-md px-[18px] py-3 flex items-center justify-center gap-2 text-center text-white"
          disabled={isDeleting}
          style={{
            opacity: isDeleting ? 0.5 : 1,
          }}
          onClick={handleConfirm}
        >
          {isDeleting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Trash size={16} />
          )}{' '}
          Yes, Delete
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialogBox;
