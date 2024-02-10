import React from "react";
import { Container } from "./StyledTag";

const Tag = ({ text, filled }) => <Container filled={filled}>{text}</Container>;

export default Tag;
