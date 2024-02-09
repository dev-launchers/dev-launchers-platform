import { useState, useEffect } from "react";
import Modal from "react-modal";
import PlatformOnboarding from "./PlatformOnboarding/PlatformOnboarding";
import { ModalContainer, userUnboardingModalStyle } from "./StyledUserOnboardingModal";
import { UseOnboardingData, useOnboardingDataContext } from './../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../src/state/actions/onboardingActions';
import IntroductionModal from "./IntroductionModal/IntroductionModal";
import CloseModal from "./CloseModal/CloseModal";

Modal.setAppElement("#__next");

// /**
//  * @description This is custom modal for the user onboarding. 
//  */

// export default function UserOnboardingModal() {
//     const { onboardingData: { showIntroductionModal, showPlatformOnboardingModal }, dispatch } = useOnboardingDataContext();
//     const [modalIsOpen, setModalIsOpen] = useState(false);

//     useEffect(() => {
//         setModalIsOpen(showIntroductionModal || showPlatformOnboardingModal);
//     }, [showIntroductionModal, showPlatformOnboardingModal]);

//     const openModal = () => {
//         setModalIsOpen(true);
//     }

//     const closeModal = () => {
//         setModalIsOpen(false);
//     }

//     const showModals = () => {
        
//         if (showIntroductionModal) {
//             return <IntroductionModal />;
//         } else if (showPlatformOnboardingModal) {
//             return <PlatformOnboarding />;
//         } else if (showCloseModal) {
//             console.log('closemodal', showCloseModal)
//             return <CloseModal />
//         } else {
//             return null;
//         }
//     }
    
//     return (
//         <>
//             <Modal 
//                 isOpen={modalIsOpen}
//                 onAfterOpen={openModal} 
//                 onRequestClose={closeModal}
//                 style={userUnboardingModalStyle}
//                 contentLabel="User Onboarding"
//             >
//                 <ModalContainer>
//                     {showModals()}
//                 </ModalContainer>
//             </Modal>
//         </>
//     );
// }
export default function UserOnboardingModal({modalsToShow}) {
    const { onboardingData, dispatch } = useOnboardingDataContext();
    const tempData = useOnboardingDataContext();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        console.log('data', tempData)
        console.log('Modal conditions:', onboardingData?.showIntroductionModal, onboardingData?.showPlatformOnboardingModal);
        console.log('HELLO', onboardingData)
        console.log('MODALSTOSHOW', modalsToShow)
        const showIntro = onboardingData?.showIntroductionModal;
        const showPlatform = onboardingData?.showPlatformOnboardingModal;
        const showClose = onboardingData?.showCloseModal;
        setModalIsOpen(showIntro || showPlatform || showClose);
    }, []);


    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const showModals = () => {
        if (modalsToShow?.showIntroductionModal) {
            return <IntroductionModal />;
        } else if (modalsToShow?.showPlatformOnboardingModal) {
            return <PlatformOnboarding />;
        } else if (modalsToShow?.showCloseModal) {
            return <CloseModal />
        } else {
            return null;
        }
    }
    
    return (
        <>
            <Modal 
                isOpen={modalIsOpen}
                onAfterOpen={openModal} 
                onRequestClose={closeModal}
                style={userUnboardingModalStyle}
                contentLabel="User Onboarding"
            >
                <ModalContainer>
                    {showModals()}
                </ModalContainer>
            </Modal>
        </>
    );
}
