import { Typography } from "@devlaunchers/components/components/atoms";
import { ModalHeader, ModalBody,userUnboardingModalStyle} from "./StyledProfileEditModal";
import rocket from "../../../../../../../packages/UI/src/images/logo-monogram.png"
import { useReducer, useContext } from "react";
import Modal from "react-modal";
Modal.setAppElement("#__next");

import { UserProfileDataContext } from "../../../../context/UserProfileDataContext";

export default function ProfileEditModal() {
    const { editModalIsOpen, closeModal } = useContext(UserProfileDataContext);

    return (
        <>
            <Modal 
                style={userUnboardingModalStyle} 
                isOpen={editModalIsOpen.showProfileEditModal}
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
}