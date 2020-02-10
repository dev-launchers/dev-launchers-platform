import React from "react";
import Tabletop from "tabletop";

export default function PointsTable() {
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
    <table style={{ margin: "5%", width: "75%", textAlign: "center" }}>
      <tbody>
        <tr style={{ fontWeight: "bold" }}>
          <td style={{}}>Name</td>
          <td>Points</td>
          <td>XP</td>
        </tr>
        {students
          .filter(entry => {
            if (entry.isActive == 1) return true;
            return false;
          })
          .map(entry => {
            return (
              <tr>
                <td style={{}}>{entry.name}</td>
                <td style={{}}>{entry.points}</td>
                <td style={{}}>{entry.xp}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
