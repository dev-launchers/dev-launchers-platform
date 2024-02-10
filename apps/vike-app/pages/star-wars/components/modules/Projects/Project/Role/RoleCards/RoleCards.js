import { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Cards,
  Wrapper,
  Title,
  Subtitle,
  Container,
  FlexBox,
} from "./StyledRoleCards";
import { CardButton } from "../Button/StyledButton";
import RoleModal from "../RoleModal";

const truncateText = (text, truncateAt, replaceWith) => {
  if (text.length <= truncateAt) return <ReactMarkdown>{text}</ReactMarkdown>;
  return (
    <ReactMarkdown>{text.slice(0, truncateAt) + replaceWith}</ReactMarkdown>
  );
};
const RoleCards = ({ data, projectSlug }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState({});
  const [formIsOpen, setFormIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function openForm() {
    setFormIsOpen(true);
  }
  function closeForm() {
    setFormIsOpen(false);
  }
  return (
    <Wrapper>
      {data
        .filter(({ isHidden }) => !isHidden)
        .map((role, roleIndex) => (
          <Cards key={roleIndex}>
            <Container>
              <Title>{role.title}</Title>
              <Subtitle style={{ padding: ".5rem 0" }}>
                {truncateText(role.description, 255, "...")}
              </Subtitle>
              {/* <RoleContent roleContent={role.expectations} />
            <Subtitle>Prerequisite skills</Subtitle>
            <RoleContent roleContent={role.skills} /> */}
              <FlexBox>
                <CardButton
                  onClick={() => {
                    openModal();
                    openForm();
                    setSelectedRole(role);
                  }}
                >
                  Apply Now
                </CardButton>
                <CardButton
                  onClick={() => {
                    openModal();
                    setSelectedRole(role);
                    setFormIsOpen(false);
                  }}
                  fontColor
                  bgColor
                  border
                >
                  Read More
                </CardButton>
              </FlexBox>
              <RoleModal
                onRequestClose={closeModal}
                isOpen={modalIsOpen}
                role={selectedRole}
                projectSlug={projectSlug}
                isFormOpen={formIsOpen}
                onOpenForm={openForm}
                onCloseForm={closeForm}
              />
            </Container>
          </Cards>
        ))}
    </Wrapper>
  );
};

export default RoleCards;
