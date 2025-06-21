import React, { useRef, useState, useEffect } from 'react';
import EditIdea from '../../../../src/components/modules/EditIdea/EditIdea';
import { atoms } from '@devlaunchers/components/src/components';
import { X } from 'lucide-react';

const EditComponent = ({ open, onClose, initialIdea, onEditSuccess }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);
  const editIdeaRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Add a key state to force re-render of EditIdea component
  const [componentKey, setComponentKey] = React.useState(Date.now());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset key when the form opens or initialIdea changes
  useEffect(() => {
    if (open) {
      setComponentKey(Date.now()); // Generate a new key to force re-render

      // Clear any localStorage cache
      localStorage.removeItem('ideaFormData');
      localStorage.removeItem('involveLevel');
    }
  }, [open, initialIdea]);

  const isMobileDrawer = windowWidth < 1024;

  let topMargin = 0;
  if (windowWidth < 768) {
    topMargin = 100; // Mobile gap
  } else if (windowWidth < 1024) {
    topMargin = 150; // Tablet gap
  }

  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    if (open) {
      setExiting(false);
    } else if (!isMobileDrawer) {
      setExiting(true);
      const timeout = setTimeout(() => setExiting(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open, isMobileDrawer]);

  const overlayVisible = isMobileDrawer ? open : open || exiting;

  const overlayClasses = `
    fixed inset-0 z-[1000] transition-colors duration-300 
    ${overlayVisible ? 'bg-[#676767]/60 visible' : 'bg-transparent invisible'}
    flex justify-center ${isMobileDrawer ? 'items-end' : 'items-center'}
  `;

  const desktopDialogClasses = `
    w-[640px] h-[664px] flex-shrink-0 rounded-[24px] 
    bg-[#F4F0F9] 
    flex flex-col overflow-hidden transition-all duration-300 ease 
    ${open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
  `;

  const mobileDialogClasses = `
    fixed bottom-0 left-0 right-0 w-full rounded-t-[24px] 
    bg-[#F4F0F9] shadow-[0px_-3px_9px_0px_rgba(212,194,229,0.8)] 
    flex flex-col overflow-hidden transition-all duration-300 ease 
    ${open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
  `;

  const headerClasses =
    'w-full flex justify-between items-center px-[20px] pt-[16px] pb-[14px] bg-white flex-shrink-0';
  const contentClasses = 'flex-1 overflow-y-auto px-[24px] py-[20px]';
  const footerClasses =
    'w-full flex justify-end items-center px-[24px] py-[20px] bg-white flex-shrink-0';

  const cancelButtonClasses =
    'flex px-[18px] py-[12px] justify-center items-center gap-[4px] cursor-pointer bg-white border-0 rounded-[4px] text-base';
  const closeButtonClasses =
    'bg-transparent border-0 text-[1.25rem] cursor-pointer';

  const handleSave = async () => {
    if (editIdeaRef.current) {
      setIsSubmitting(true);
      try {
        editIdeaRef.current.touchAllFields();
        await editIdeaRef.current.submitForm();
        setIsSubmitting(false);
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitting(false);
      }
    }
  };

  const handleClose = () => {
    // Clear localStorage
    localStorage.removeItem('ideaFormData');
    localStorage.removeItem('involveLevel');
    onClose();
  };

  const handleEditSuccess = (updatedIdea) => {
    // Generate a new key to force re-render next time the component opens
    setComponentKey(Date.now());

    // Pass the updated idea to parent
    if (onEditSuccess) {
      onEditSuccess(updatedIdea);
    }

    // Close the dialog
    handleClose();
  };

  const isSending = editIdeaRef.current?.isSending() || false;
  return (
    <div onClick={handleClose} className={overlayClasses}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={isMobileDrawer ? mobileDialogClasses : desktopDialogClasses}
        style={
          isMobileDrawer ? { height: `${windowHeight - topMargin}px` } : {}
        }
      >
        <div className={headerClasses}>
          <div className="font-medium text-lg">Edit Idea</div>
          {/* <button onClick={handleClose} className={closeButtonClasses}>
            X */}
          <button onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        <div className={contentClasses}>
          {open && (
            <EditIdea
              key={componentKey} // Use key to force re-create component
              ref={editIdeaRef}
              initialIdea={initialIdea}
              onEditSuccess={handleEditSuccess}
            />
          )}
        </div>

        <div className={footerClasses}>
          <atoms.Button
            type="secondary"
            size="medium"
            mode="light"
            color="nebula"
            onClick={handleClose}
          >
            Cancel
          </atoms.Button>
          {/* Add an explicit spacer */}
          <div style={{ width: '12px' }}></div>
          <atoms.Button
            type="primary"
            size="medium"
            mode="light"
            color="nebula"
            disabled={isSubmitting || isSending}
            onClick={handleSave}
          >
            {isSubmitting || isSending ? 'Wait' : 'Save Changes'}
          </atoms.Button>
        </div>
      </div>
    </div>
  );
};

export default EditComponent;
