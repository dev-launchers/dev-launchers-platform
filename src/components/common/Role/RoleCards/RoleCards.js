import { useState } from "react";
import {
  Cards,
  Wrapper,
  Title,
  Subtitle,
  Container,
  FlexBox,
} from "./StyledRoleCards";
import RoleContent from "../RoleContent/RoleContent";
import { CardButton } from "../Button/StyledButton";
import RoleModal from "../RoleModal /RoleModal";

const ROLES = [
  {
    id: "1",
    title: "Rol1",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
  {
    id: "2",
    title: "Rol2",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
  {
    id: "3",
    title: "Rol3",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
  {
    id: "4",
    title: "Rol4",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
  {
    id: "5",
    title: "Rol5",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
  {
    id: "6",
    title: "Rol6",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
];

const RoleCards = () => {
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
      {ROLES.map((role, roleIndex) => (
        <Cards key={roleIndex}>
          <Container>
            <Title>{role.title}</Title>
            <Subtitle>Expectations</Subtitle>
            <RoleContent roleContent={role.expectations} />
            <Subtitle>Prerequisite skills</Subtitle>
            <RoleContent roleContent={role.skills} />
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
