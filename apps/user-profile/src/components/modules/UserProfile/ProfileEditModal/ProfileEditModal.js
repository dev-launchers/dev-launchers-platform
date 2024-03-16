import { Typography } from "@devlaunchers/components/components/atoms";
import { ModalHeader, ModalBody,userUnboardingModalStyle} from "./StyledProfileEditModal";
import rocket from "../../../../../../../packages/UI/src/images/logo-monogram.png"
import { useReducer, useContext } from "react";
import Modal from "react-modal";
Modal.setAppElement("#__next");

import { editModalReducer, editModalState } from "../../../../state/reducers/editModalReducer";

// import { UserProfileDataContext } from "../../../../context/UserProfileDataContext";

export default function ProfileEditModal() {
    const [isOpen, dispatch] = useReducer(editModalReducer, editModalState);

    const openModal = () => {
        dispatch({type: 'SHOW_PROFILE_EDIT_MODAL'});
    }

    const closeModal = () => {
        dispatch({type: 'HIDE_PROFILE_EDIT_MODAL'});
    }

    return (
        <>
            <button onClick={() => openModal()} style={{backgroundColor:"orange" , borderRadius:"20px", fontSize:"15px", padding:"5px", color:"white"}}>Edit Profile</button>
            <Modal 
                style={userUnboardingModalStyle} 
                isOpen={isOpen.showProfileEditModal}
            >
                <ModalHeader>
                    <img src={rocket} className="rocket-img"></img>
                    <Typography type="h4" className="navbar-title">Dev Launchers</Typography>
                    <button className="close-button" onClick={() => closeModal()}>×</button>
                </ModalHeader>
                <ModalBody/>
            </Modal>
        </>
    )

    // const { editModalIsOpen, dispatch } = useContext(UserProfileDataContext)

    // const openModal = () => {
    //     dispatch({type: 'SHOW_PROFILE_EDIT_MODAL'});
    // }

    // const closeModal = () => {
    //     dispatch({type: 'HIDE_PROFILE_EDIT_MODAL'});
    // }

    // return (
    //     <>
    //         <button onClick={() => openModal()} style={{backgroundColor:"orange" , borderRadius:"20px", fontSize:"15px", padding:"2px", color:"white"}}>Edit Profile Button</button>
    //         <Modal 
    //             style={userUnboardingModalStyle} 
    //             isOpen={editModalIsOpen}
    //             onRequestOpen={openModal}
    //             onRequestClose={closeModal}
    //         >
    //             <ModalHeader>
    //                 <img src={rocket} className="rocket-img"></img>
    //                 <Typography type="h4" className="navbar-title">Dev Launchers</Typography>
    //                 <button className="close-button" onClick={() => closeModal()}>×</button>
    //             </ModalHeader>
    //             <ModalBody/>
    //         </Modal>
    //     </>
    // )
}