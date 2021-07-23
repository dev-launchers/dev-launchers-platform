import React from "react";
import {
  Tasks,
  TasksRow,
  TasksCategory,
  TasksDescription,
  TasksValue,
} from "./StyledEarnPoints";

// Get content data
const rewards = require("../../../../content/collections/rewards.json").data;

export default function EarnPoints() {
  return (
    <div>
      <h2>Earn points</h2>
      <Tasks>
        <tbody>
          <th>
            <td>For Everyone</td>
          </th>
          {(() => {
            // Group our entries by category first, then output
            const categories = rewards.tasks.reduce((categoryMemo, entry) => {
              const { category } = entry;
              const currentCategoryMemo = categoryMemo;
              if (!categoryMemo[category]) currentCategoryMemo[category] = [];
              currentCategoryMemo[category].push({
                description: entry.description,
                value: entry.value,
              });
              return currentCategoryMemo;
            }, {});

            // Array full of JSX to render
            const toRender = [];
            categories.forEach((category) => {
              const tasks = categories[category];
              toRender.push(<TasksCategory>{category}</TasksCategory>);
              toRender.push(
                tasks.map((task, i) => (
                  <TasksRow key={i}>
                    <TasksDescription>{task.description}</TasksDescription>
                    <TasksValue>{task.value}</TasksValue>
                  </TasksRow>
                ))
              );
            });

            return toRender;
          })()}
        </tbody>
      </Tasks>
    </div>
  );
}
