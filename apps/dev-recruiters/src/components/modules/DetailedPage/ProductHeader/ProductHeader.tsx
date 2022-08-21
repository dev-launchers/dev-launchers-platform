import React from "react";
import Avatar from "@images/avatar.png";
import {
  HeaderBlock,
  ColumnTitle,
  Type,
  Username,
  Tags,
  CreationDate,
  Column,
  Row,
  Commitment,
  Vision,
  UsernameAvatar,
} from "./StyledProductHeader";
import { Leader2, Project, Team } from "@devlaunchers/models/project";

interface ProductHeaderProps
  extends Pick<
    Project,
    "title" | "vision" | "isPlatform" | "interests" | "published_at" | "team"
  > {
  type: "Product" | "Project" | "Idea";
  userAvatar?: string;
  minCommitmentHours: number;
  maxCommitmentHours: number;
}

export default function ProductHeader({
  title,
  vision,
  isPlatform = false,
  type,
  interests = [], //keywords = [],
  published_at, //date,
  team, //username,
  // userAvatar,
  minCommitmentHours,
  maxCommitmentHours,
}: ProductHeaderProps) {
  const teamLeader = (team?.leaders[0] as Partial<Leader2>)?.username;
  const formattedDate = new Date(published_at)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");
  return (
    <HeaderBlock>
      <Row>
        <Column bgColor="#30363E" w="614px" style={{ flexGrow: 1 }}>
          <ColumnTitle>{title}</ColumnTitle>
          <Type>
            {isPlatform ? "Platform" : "Independent"} {type}
          </Type>
          <Vision>{vision}</Vision>
        </Column>
        <Column bgColor="#4f5154" w="384px" style={{ flexGrow: 1 }}>
          <ColumnTitle>Tags</ColumnTitle>
          <Row>
            {interests.map((interest, id) => (
              <Tags key={id}>{interest.interest}</Tags>
            ))}
          </Row>
        </Column>
        <Column
          bgColor="#59687B"
          w="384px"
          fa="flex-end"
          style={{ flexGrow: 1 }}
        >
          <ColumnTitle style={{ width: "100%", textAlign: "left" }}>
            {type} Lead
          </ColumnTitle>
          <Row
            css={`
              width: 100%;
              text-align: left;
              margin-top: 1rem;
              gap: 0.5rem;
            `}
          >
            <UsernameAvatar src={Avatar} />
            <Username>{teamLeader}</Username>
          </Row>
          <CreationDate style={{ width: "100%", textAlign: "left" }}>
            Product Created: {formattedDate}
          </CreationDate>
          <Commitment style={{ width: "100%", textAlign: "left" }}>
            {minCommitmentHours} - {maxCommitmentHours} hrs/week
          </Commitment>
        </Column>
      </Row>
    </HeaderBlock>
  );
}
