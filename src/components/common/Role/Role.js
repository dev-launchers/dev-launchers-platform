import { RoleSection, Wrapper, SectionTitle } from "./StyledRole";
import RoleCards from "./RoleCards/RoleCards";

const Role = () => (
  <RoleSection>
    <Wrapper>
      <SectionTitle>Open Roles</SectionTitle>
      <RoleCards />
    </Wrapper>
  </RoleSection>
);

export default Role;
