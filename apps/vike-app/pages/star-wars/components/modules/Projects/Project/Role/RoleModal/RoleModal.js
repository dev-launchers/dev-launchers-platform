import Modal from "react-modal";
import ReactMarkdown from "react-markdown";
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
import SignUpForm from "../../../../../common/SignUpForm/SignUpForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "36.5rem",
    width: "80%",
    color: "#FCFCFC",
    backgroundColor: "#3C3B3C",
    padding: "0",
    display: "flex",
    flexDirection: "column",
  },
  overlay: {
    zIndex: "5",
    backgroundColor: "rgba(211,211,211,0.1)",
  },
};

const RoleModal = ({
  role,
  isOpen,
  onRequestClose,
  isFormOpen,
  onOpenForm,
  projectSlug,
}) => {
  const { title, description } = role;
  return (
    <Wrapper>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        ariaHideApp={false}
      >
        <Container>
          <ModalHeader>
            <CloseModal onClick={onRequestClose}>X</CloseModal>
            <Title isOpen={isOpen}>
              <ReactMarkdown>{title}</ReactMarkdown>
            </Title>
          </ModalHeader>
          {isFormOpen ? (
            // <ApplyForm onCloseForm={onCloseForm}/>
            <SignUpForm roleName={role.title} projectSlug={projectSlug} />
          ) : (
            <Description>
              <ReactMarkdown>{description}</ReactMarkdown>
            </Description>
          )}
        </Container>
        <ModalStrip>
          <FlexBox
            style={{
              fontSize: "1.125rem",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {isFormOpen ? (
              ""
            ) : (
              <>
                <p>Is this role right for you?</p>
                <CardButton onClick={onOpenForm} style={{ fontFamily: "Abel" }}>
                  Apply Now
                </CardButton>
              </>
            )}
          </FlexBox>
        </ModalStrip>
      </Modal>
    </Wrapper>
  );
};
export default RoleModal;
