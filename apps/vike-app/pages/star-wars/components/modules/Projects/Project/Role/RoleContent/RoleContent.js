import React from "react";
import { List } from "./StyledRoleContent";

const RoleContent = ({ roleContent }) => (
  <List>
    {roleContent.map((expectation, expectationIndex) => (
      <li key={expectationIndex}>{expectation}</li>
    ))}
  </List>
);
export default RoleContent;
