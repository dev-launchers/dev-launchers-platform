import React from "react";

import { useLeaderboardContext } from "../../../../context/LeaderboardContext";
import { Table, TableColumnHeading } from "./StyledCurrentPoints";

export default function CurrentPoints() {
  const { leaderboard } = useLeaderboardContext();

  return (
    <div>
      <h2>
        Leaderboard
        <span style={{ fontSize: "1rem" }}>(Ranked by points!)</span>
      </h2>
      <Table>
        <tbody>
          <tr>
            <TableColumnHeading>Name</TableColumnHeading>
            <TableColumnHeading>Points</TableColumnHeading>
            <TableColumnHeading>XP</TableColumnHeading>
          </tr>
          {Object.keys(leaderboard) !== 0 &&
            leaderboard
              .filter((entry) => {
                if (entry.isActive === 1) return true;
                return false;
              })
              .map((entry, index) => (
                <tr key={index}>
                  <td>
                    {/* Output leaderboard flair! */}
                    {index === 0 ? "  🥇  " : ""}
                    {index === 1 ? "  🥈  " : ""}
                    {index === 2 ? "  🥉  " : ""}
                    {entry.name}
                    {index === 0 ? "  🥇  " : ""}
                    {index === 1 ? "  🥈  " : ""}
                    {index === 2 ? "  🥉  " : ""}
                  </td>

                  <td>{entry.points}</td>
                  <td>{entry.xp}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
}
