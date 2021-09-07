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
import RoleModal from "../RoleModal ";

const ROLES = [
  {
    title: "Rol1",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
  {
    title: "Rol2",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
  {
    title: "Rol3",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
  {
    title: "Rol4",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
  {
    title: "Rol5",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
  {
    title: "Rol6",
    expectations: ["Expectaction1", "Expectation2"],
    skills: ["Skill1", "Skill2"],
    description:
      "Help bring the game to life through Vector Art! Design and create visually diverse collectible components, intuitive UI, and even promotional materials. You will be working directly with the art team and our exciting, inviting visual style meant for all audiences. Create in-game assets, icons, or menus based on the concept art from our talented team, and your imagination! Some experience with Vector Art (Adobe Illustrator, Inkscape, etc.) required, but we'll try to meet you where you are!",
  },
];

const RoleCards = () => (
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
            <CardButton color bgColor border>
              Read More
            </CardButton>
          </FlexBox>
          <RoleModal />
        </Container>
      </Cards>
    ))}
  </Wrapper>
);

export default RoleCards;
