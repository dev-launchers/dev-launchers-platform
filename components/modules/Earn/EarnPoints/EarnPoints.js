import React from "react";
import styles from "./EarnPoints.module.css";

// Get content data
let rewards = require("../../../../content/collections/rewards.json").data;

export default function EarnPoints() {
  return (
    <div>
      <h2>Earn points</h2>
      <table className={styles.tasks}>
        <tbody>
          <th>
            <td>For Everyone</td>
          </th>
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
                <tr className={styles.tasksCategory}>{category}</tr>
              );
              toRender.push(
                tasks.map(task => {
                  console.log(task);
                  return (
                    <tr className={styles.tasksRow}>
                      <td className={styles.tasksDescription}>
                        {task.description}
                      </td>
                      <td className={styles.tasksValue}>{task.value}</td>
                    </tr>
                  );
                })
              );
            }
            return toRender;
          })()}
        </tbody>
      </table>
    </div>
  );
}
