import React from "react";
import { Entry, EntryCost, EntryTitle, EntryContent } from "./StyledSpendCard";

export default function SpendCard(props) {
  return (
    <Entry>
      <EntryTitle>{props.entry.title}</EntryTitle>
      <EntryContent>
        {props.entry.description}
        <br />
        <br />
        <EntryCost>
          {props.entry.cost} <span>Points</span>
        </EntryCost>
      </EntryContent>
    </Entry>
  );
}
