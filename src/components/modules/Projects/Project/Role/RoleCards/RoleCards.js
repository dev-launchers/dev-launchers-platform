import { useState } from "react";
import {
  Cards,
  Wrapper,
  Title,
  Subtitle,
  Container,
  FlexBox,
} from "./StyledRoleCards";
// import RoleContent from "../RoleContent/RoleContent";
import { CardButton } from "../Button/StyledButton";
import RoleModal from "../RoleModal /RoleModal";

const truncateText = (text, truncateAt, replaceWith) => {
  if (text.length <= truncateAt) return text;
  return text.slice(0, truncateAt) + replaceWith;
};
const RoleCards = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState({});

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Wrapper>
      {data.map((role, roleIndex) => (
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
              <CardButton>Apply Now</CardButton>
              <CardButton
                onClick={() => {
                  openModal();
                  setSelectedRole(role);
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
            />
          </Container>
        </Cards>
      ))}
    </Wrapper>
  );
};

export default RoleCards;
