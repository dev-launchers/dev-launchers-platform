import React from "react";
import Tabletop from "tabletop";
import styles from "./CurrentPoints.module.css";

export default function CurrentPoints() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    Tabletop.init({
      // https://docs.google.com/spreadsheets/d/e/2PACX-1vQfJccD-2qd8eVQ6BPIc3EbbBUcTcxIUAxNub31QrWalpfExtTccMBYORQoFqPcxt_HRDuWLT9KXwN0/pubhtml
      // https://docs.google.com/spreadsheets/d/1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0/edit?usp=sharing
      key: "1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0",
      callback: googleData => {
        console.log("google sheet data --->", googleData);
        setStudents(googleData.students.elements);
      },
      simpleSheet: false
    });
  }, []);

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
          {students
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
