import Modal from "react-modal";
import { useState } from "react";
import { Wrapper } from "./StyledRoleModal";

const RoleModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Wrapper>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}></Modal>
    </Wrapper>
  );
};

export default RoleModal;
