import React from "react";

// Get content data
let rewards = require("../../../content/collections/rewards.json").data;

export default function TaskTable() {
  return (
    <table
      style={{
        width: "90%",
        boxShadow:
          "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
        marginLeft: "auto",
        marginRight: "auto",
        borderCollapse: "collapse"
      }}
    >
      <tbody>
        <tr style={{ fontWeight: "bold", fontFamily: "Holtwood One SC" }}>
          <td>For Everyone</td>
        </tr>
        {(function() {
          // Group our entries by category first, then output
          let categories = rewards.tasks.reduce((categoryMemo, entry) => {
            let category = entry.category;
            if (!categoryMemo[category]) categoryMemo[category] = [];
            categoryMemo[category].push({
              description: entry.description,
              value: entry.value
            });
            return categoryMemo;
          }, {});
          console.log("categories", categories);

          // Array full of JSX to render
          let toRender = [];
          for (let category in categories) {
            let tasks = categories[category];
            toRender.push(
              <tr
                style={{
                  fontSize: ".9rem",
                  borderTop: "2px solid gray"
                }}
              >
                {category}
              </tr>
            );
            toRender.push(
              tasks.map(task => {
                console.log(task);
                return (
                  <tr style={{ borderTop: "1px solid lightgray" }}>
                    <td style={{ paddingLeft: "5%", paddingBottom: "1%" }}>
                      {task.description}
                    </td>
                    <td
                      style={{
                        width: "15%",
                        paddingBottom: "1%",
                        fontFamily: "Holtwood One SC",
                        fontSize: ".8rem",
                        textAlign: "center"
                      }}
                    >
                      {task.value}
                    </td>
                  </tr>
                );
              })
            );
          }
          return toRender;
        })()}
      </tbody>
    </table>
  );
}
