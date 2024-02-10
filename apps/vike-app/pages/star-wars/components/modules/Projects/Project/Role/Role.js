import { forwardRef } from "react";
import RoleCards from "./RoleCards/RoleCards";
import Section from "../Section";

const Role = ({ data, projectSlug }, ref) =>
  (
    <Section
      ref={ref}
      bgColor="#3A7CA5"
      Title="Open Roles"
      Content={data?.filter((openRole) => !openRole.isHidden)?.length ? <RoleCards data={data} projectSlug={projectSlug} /> : "There are no open positions currently, Please check again later!"}
    />
  );

export default forwardRef(Role);
