import React from "react";
import {
  Tasks,
  TasksRow,
  TasksCategory,
  TasksDescription,
  TasksValue
} from "./StyledEarnPoints";

// Get content data
let rewards = require("../../../../content/collections/rewards.json").data;

export default function EarnPoints() {
  return (
    <div>
      <h2>Earn points</h2>
      <Tasks>
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
              toRender.push(<TasksCategory>{category}</TasksCategory>);
              toRender.push(
                tasks.map(task => {
                  console.log(task);
                  return (
                    <TasksRow>
                      <TasksDescription>{task.description}</TasksDescription>
                      <TasksValue>{task.value}</TasksValue>
                    </TasksRow>
                  );
                })
              );
            }
            return toRender;
          })()}
        </tbody>
      </Tasks>
    </div>
  );
}
