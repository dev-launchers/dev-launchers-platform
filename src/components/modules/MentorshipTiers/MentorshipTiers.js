import React from "react";
import PageBody from "../../common/PageBody";
import Button from "../../common/Button";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import style from "./MentorshipTiers.module.css";

const progressionLevels = [
  {
    name: "DL0",
    description: "Ideal for members new to development",
    prerequisiteSkills: [],
    abilities: ["Access to our group mentorship program"],
    expectations: [
      "Initial setup",
      "Attend at least one session per month",
      "Be able to explain what variables and functions are in programming"
    ],
    advancementCriteria: [
      "A rank DL8 member decides when a DL0 member is ready to transition to the next level"
    ]
  },

  {
    name: "DL1",
    description: "Members with limited coding or digital design experience",
    prerequisiteSkills: ["A basic understanding of coding fundamentals"],
    abilities: [
      "Access to 1 on 1 mentorship sessions",
      "Access to laptops lending program",
      "Ability to earn attendance points"
    ],
    expectations: [
      "Be able to speak semi-fluently about all concepts contained in the Khan Academy programming intro course - (minus object oriented design)"
    ],
    advancementCriteria: [
      "A rank DL8 member decides when a DL1 member is ready to transition to the next level"
    ]
  },

  {
    name: "DL2",
    description:
      "Members who have a solid enough understanding of fundamentals to begin their own projects",
    prerequisiteSkills: ["Proven communication skills"],
    abilities: [
      "Full ability to begin earning within our points and rewards program",
      "GitHub repo with continuous deployment pipeline, hosted by Dev Launchers"
    ],
    expectations: [
      "Start simple personal project, and create a prototype",
      "Learn basic object oriented design",
      "Learn and be proficient in basic git"
    ],
    advancementCriteria: [
      "A rank DL8 member decides when a DL2 member is ready to transition to the next level"
    ]
  },

  {
    name: "DL3",
    description: "Members who have finished a simple project",
    prerequisiteSkills: [
      "Must have completed at least one simple personal project (or working prototype) or have X points of accumulated XP"
    ],
    abilities: ["Ability to cash in points"],
    expectations: [
      "Must spend at least one hour/week mentoring DL0-DL2 members",
      "Plan out a new project (Or extend the project from DL2), either alone or with a team, and create a working MVP"
    ],
    advancementCriteria: [
      "A rank DL8 member decides when a DL3 member is ready to transition to the next level"
    ]
  },

  {
    name: "DL4",
    description: "Members who have completed an in-depth project",
    prerequisiteSkills: [
      "Must have completed at least two personal projects or have X points of accumulated XP"
    ],
    abilities: [
      "Able to take on paid apprenticeship projects through the Dev Launchers Solutions Program",
      "Internship help TODO: Flesh out more"
    ],
    expectations: [
      "Must spend at least one hour/week mentoring DL0-DL3 members",
      "Start simple group project, and create a prototype"
    ],
    advancementCriteria: [
      "A rank DL8 member decides when a DL4 member is ready to transition to the next level"
    ]
  },

  {
    name: "DL5",
    description: "Members who have collaborated on an in-depth project",
    prerequisiteSkills: [
      "Proven project management ability",
      "Proven ability to communicate thoughts and ideas clearly",
      "Development Experience"
    ],
    abilities: [
      "Featured on some portion of the Dev Launchers site with a Star/Self Starter profile",
      "Able to write featured blog posts on https://devlaunchers.com"
    ],
    expectations: [
      "Be the dedicated mentor for one group of DL2 members/member or mentor DL0 - DL4 members for at least 1 hour per week",
      "Plan out a new project with a group (or extend the project from DL4) and create a working MVP"
    ],
    advancementCriteria: [
      "A rank DL8 member decides when a DL5 member is ready to transition to the next level"
    ]
  },

  {
    name: "DL6",
    description:
      "Recommended For: University students, Bootcamp students, Dedicated Hobbyists",
    prerequisiteSkills: [
      "Proven project management ability",
      "Proven ability to communicate thoughts and ideas clearly",
      "Development Experience"
    ],
    abilities: [
      "Able to begin offering one on one mentorship sessions through our official schedule"
    ],
    expectations: [
      "Be the dedicated mentor for one group of DL2 members/member or mentor DL0 - DL5 members for at least 1 hour per week"
    ],
    advancementCriteria: [
      "A rank DL8 member decides when a DL6 member is ready to transition to the next level"
    ]
  },

  {
    name: "DL7",
    description:
      "Recommended For: University students, Bootcamp students, Dedicated Hobbyists",
    prerequisiteSkills: [
      "Proven project management ability",
      "Proven ability to communicate thoughts and ideas clearly",
      "Development Experience"
    ],
    abilities: [
      "Career consulting",
      "Interview prep",
      "Become a Dev Launchers Partner to receive help and backup on client projects - Dev Launchers offers initial project planning, technical oversight, and architecture for X%. Rest goes to member"
    ],
    expectations: [
      "Be the dedicated mentor for one group of DL2-DL3 members/member or mentor DL0 - DL6 members for at least 1 hour per week"
    ],
    advancementCriteria: [
      "A rank DL8 member decides when a DL7 member is ready to transition to the next level"
    ]
  },

  {
    name: "DL8",
    description:
      "Recommended For: Professional tech worker with > 1 years of experience working with code or design",
    prerequisiteSkills: [
      "Ability to collaborate on and define projects",
      "1+ year of professional development experience",
      "Communication skills"
    ],
    abilities: ["Able to manage and guide a Dev Launchers Solutions projects"],
    expectations: [
      "Be the dedicated mentor for one group of DL4-DL5 members/member or mentor DL0 - DL8 members for at least 1 hour per week",
      "Help DL7 with career advice and interviews"
    ],
    advancementCriteria: []
  }
];

export default function MentorshipTiers() {
  return (
    <div>
      <PageBody>
        <br />
        <h1 id="title">Our Member System!</h1>
        <div className="page-description">
          Dev Launchers members become an integral part of our community full of
          developers and creators. Our programs, which provide content and
          experience{" "}
          <u>
            on par with programs and classes that could otherwise cost hundreds
            to thousands of dollars
          </u>
          , are <b>offered for free</b> by leveraging the expertise of our
          members!
          <br />
          <br />
          We're here help you reach your goals.
          <Button style={{ fontSize: ".75rem" }}>JOIN NOW</Button>
          <br />
          <br />
          Check below to see where you fit in at Dev Launchers!
        </div>
        <hr />
        <div style={{ width: "100%" }}>
          <Accordion
            className={style.accordion}
            allowMultipleExpanded="True"
            allowZeroExpanded="True"
          >
            {progressionLevels.map(entry => {
              return (
                <AccordionItem className={style.accordion__item}>
                  <AccordionItemHeading>
                    <AccordionItemButton className={style.accordion__button}>
                      <span className={style.accordion__button__lebel}>
                        {entry.name}{" "}
                      </span>
                      <b>{entry.description}</b>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={style.accordion__panel}>
                    <p>
                      <ul>
                        <li>
                          <b>Prerequisite Skills</b>:{" "}
                          <ul>
                            {entry.prerequisiteSkills.map(item => {
                              return <li>{item}</li>;
                            })}
                          </ul>
                        </li>
                        <li>
                          <b>Rank Abilities</b>:{" "}
                          <ul>
                            {entry.abilities.map(item => {
                              return <li>{item}</li>;
                            })}
                          </ul>
                        </li>
                        <li>
                          <b>Expectations</b>:
                          <ul>
                            {entry.expectations.map(item => {
                              return <li>{item}</li>;
                            })}
                          </ul>
                        </li>
                        <li>
                          <b>Level Up Criteria</b>:{" "}
                          <ul>
                            {entry.advancementCriteria.map(item => {
                              return <li>{item}</li>;
                            })}
                          </ul>
                        </li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>

          <Button
            style={{
              fontSize: "2rem",
              margin: "2%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            JOIN NOW
          </Button>
        </div>
        <br />
      </PageBody>
    </div>
  );
}
