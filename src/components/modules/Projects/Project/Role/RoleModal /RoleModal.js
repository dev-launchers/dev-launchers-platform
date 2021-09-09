import Modal from "react-modal";
import {
  Wrapper,
  ModalStrip,
  ModalHeader,
  Description,
  Container,
  CloseModal,
} from "./StyledRoleModal";
import { Title, FlexBox } from "../RoleCards/StyledRoleCards";
import { CardButton } from "../Button/StyledButton";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "32.5rem",
    width: "80%",
    color: "#FCFCFC",
    backgroundColor: "#3C3B3C",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
  },
  overlay: {
    zIndex: "5",
    backgroundColor: "rgba(211,211,211,0.1)",
  },
};

const RoleModal = ({ role, isOpen, onRequestClose }) => {
  const { title, description } = role;
  return (
    <Wrapper>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <Container>
          <ModalHeader>
            <CloseModal onClick={onRequestClose}>X</CloseModal>
            <Title>{title}</Title>
          </ModalHeader>

          <Description>{description}</Description>
        </Container>
        <ModalStrip>
          <FlexBox
            style={{
              fontSize: "1.125rem",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p>Is this role right for you?</p>
            <CardButton style={{ fontFamily: "Abel" }}>Apply Now</CardButton>
          </FlexBox>
        </ModalStrip>
      </Modal>
    </Wrapper>
  );
};
export default RoleModal;
