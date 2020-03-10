import React from "react";
import styles from "./CurrentPoints.module.css";

import { useLeaderboardContext } from "../../../../context/LeaderboardContext.js";

export default function CurrentPoints() {
  const { leaderboard } = useLeaderboardContext();

  return (
    <div>
      <h2>
        Leaderboard
        <span style={{ fontSize: "1rem" }}>(Ranked by points!)</span>
      </h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.tableColumnHeading}>Name</td>
            <td className={styles.tableColumnHeading}>Points</td>
            <td className={styles.tableColumnHeading}>XP</td>
          </tr>
          {leaderboard
            .filter(entry => {
              if (entry.isActive == 1) return true;
              return false;
            })
            .map((entry, index) => {
              return (
                <tr>
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
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
