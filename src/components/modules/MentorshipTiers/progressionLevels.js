import sparkImage from "../../../images/spark-symbol.png";

const progressionLevels = [
  {
    title: "DL0",
    description: "Ideal for members new to development",
    imageSrc: sparkImage,
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
    title: "DL1",
    description: "Members with limited coding or digital design experience",
    imageSrc: sparkImage,
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
    title: "DL2",
    description:
      "Members who have a solid enough understanding of fundamentals to begin their own projects",
    imageSrc: sparkImage,
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
    title: "DL3",
    description: "Members who have finished a simple project",
    imageSrc: sparkImage,
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
    title: "DL4",
    description: "Members who have completed an in-depth project",
    imageSrc: sparkImage,
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
    title: "DL5",
    description: "Members who have collaborated on an in-depth project",
    imageSrc: sparkImage,
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
    title: "DL6",
    description:
      "Recommended For: University students, Bootcamp students, Dedicated Hobbyists",
    imageSrc: sparkImage,
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
    title: "DL7",
    description:
      "Recommended For: University students, Bootcamp students, Dedicated Hobbyists",
    imageSrc: sparkImage,
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
    title: "DL8",
    description:
      "Recommended For: Professional tech worker with > 1 years of experience working with code or design",
    imageSrc: sparkImage,
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
export default progressionLevels;
