import { Typography } from "@devlaunchers/components/components/atoms";
import { ModalHeader, ModalBody,userUnboardingModalStyle} from "./StyledProfileEditModal";
import rocket from "../../../../../../../packages/UI/src/images/logo-monogram.png"
import {useState} from "react";
import Modal from "react-modal";
Modal.setAppElement("#__next");

export default function ProfileEditModal() {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <>
            {/* <button onClick={() => openModal()} style={{backgroundColor:"orange" , borderRadius:"20px", fontSize:"15px", padding:"2px", color:"white"}}>Edit Profile Button</button> */}
            <Modal style={userUnboardingModalStyle} isOpen={modalIsOpen}>
                <ModalHeader>
                    <img src={rocket} className="rocket-img"></img>
                    <Typography type="h4" className="navbar-title">Dev Launchers</Typography>
                    <button className="close-button" onClick={() => closeModal(false)}>×</button>
                </ModalHeader>
                <ModalBody/>
            </Modal>
        </>
    )
}