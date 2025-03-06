import React, { useRef } from 'react';
import EditIdea from '../../../../src/components/modules/EditIdea/EditIdea';

const EditComponent = ({ open, onClose, initialIdea, onEditSuccess }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);
  const editIdeaRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobileDrawer = windowWidth < 1024;

  let topMargin = 0;
  if (windowWidth < 768) {
    topMargin = 100; // Mobile gap
  } else if (windowWidth < 1024) {
    topMargin = 150; // Tablet gap
  }

  const [exiting, setExiting] = React.useState(false);
  React.useEffect(() => {
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
        await editIdeaRef.current.submitForm();
        setIsSubmitting(false);
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitting(false);
      }
    }
  };

  const isSending = editIdeaRef.current?.isSending() || false;
  return (
    <div onClick={onClose} className={overlayClasses}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={isMobileDrawer ? mobileDialogClasses : desktopDialogClasses}
        style={
          isMobileDrawer ? { height: `${windowHeight - topMargin}px` } : {}
        }
      >
        <div className={headerClasses}>
          <div className="font-medium text-lg">Edit Idea</div>
          <button onClick={onClose} className={closeButtonClasses}>
            X
          </button>
        </div>

        <div className={contentClasses}>
          <EditIdea
            ref={editIdeaRef}
            initialIdea={initialIdea}
            onEditSuccess={onEditSuccess}
          />
        </div>

        <div className={footerClasses}>
          <button onClick={onClose} className={cancelButtonClasses}>
            Cancel
          </button>
          <button onClick={handleSave} disabled={isSubmitting || isSending}>
            {isSubmitting || isSending ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditComponent;
