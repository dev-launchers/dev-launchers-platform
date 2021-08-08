// import sparkImage from "../../../images/spark-symbol.png?webp";

import level0Image from "../../../images/members/level-thumbnails/level-0.png?webp";
import level1Image from "../../../images/members/level-thumbnails/level-1.png?webp";
import level2Image from "../../../images/members/level-thumbnails/level-2.png?webp";
import level3Image from "../../../images/members/level-thumbnails/level-3.png?webp";
import level4Image from "../../../images/members/level-thumbnails/level-4.png?webp";
import level5Image from "../../../images/members/level-thumbnails/level-5.png?webp";
import level6Image from "../../../images/members/level-thumbnails/level-6.png?webp";
import level7Image from "../../../images/members/level-thumbnails/level-7.png?webp";
import level8Image from "../../../images/members/level-thumbnails/level-8.png?webp";

const TEXT_ALIGN = "center";
const progressionLevels = {
  beginner: [
    {
      title: "DL0",
      description: "Ideal for members new to development",
      imageSrc: level0Image,
      abilities: ["🚪 Access to our group mentorship program"],
      expectations: [
        "👋 Attend at least two sessions per month",
        "🏗️ Initial setup",
        // "⚙️ Be able to explain what variables and functions are in programming"
      ],
      advancementCriteria: [
        "A member of level DL3 or higher decides when a DL0 member is ready to transition to the next level",
      ],
      textAlignment: TEXT_ALIGN,
      titleAlignment: TEXT_ALIGN,
    },

    {
      title: "DL1",
      description: "Members with limited coding or digital design experience",
      imageSrc: level1Image,
      prerequisiteSkills: ["👩🏿‍💻 A basic understanding of coding fundamentals"],
      abilities: [
        "🤝 Access to 1 on 1 mentorship sessions",
        "💻 Access to laptops lending program",
        "💯 Ability to earn attendance points",
      ],
      expectations: [
        "👋 Attend at least two sessions per month",
        // "📖 Be able to speak semi-fluently about all concepts contained in the Khan Academy programming intro course - (minus object oriented design)"
        "📖 Learn the intro level basics of your chosen discipline, alongside other members!",
      ],
      advancementCriteria: [
        "A member of level DL3 or higher decides when a DL1 member is ready to transition to the next level",
      ],
      textAlignment: TEXT_ALIGN,
      titleAlignment: TEXT_ALIGN,
    },

    {
      title: "DL2",
      description:
        "Members who have a solid enough understanding of fundamentals to begin their own projects",
      imageSrc: level2Image,
      prerequisiteSkills: ["💭 Proven communication skills"],
      abilities: [
        "🏅 Full ability to begin earning within our points and rewards program",
        "🔌 GitHub repo with continuous deployment pipeline, hosted by Dev Launchers",
      ],
      expectations: [
        "👋 Attend at least two sessions per month",
        "💡 Start simple personal project, and create a prototype",
        // "🧩 Learn basic object oriented design",
        // "📮 Learn and be proficient in basic git"
      ],
      advancementCriteria: [
        "A member of level DL4 or higher decides when a DL2 member is ready to transition to the next level",
      ],
      textAlignment: TEXT_ALIGN,
      titleAlignment: TEXT_ALIGN,
    },
  ],
  intermediate: [
    {
      title: "DL3",
      description: "Members who have finished a simple project",
      imageSrc: level3Image,
      prerequisiteSkills: [
        "🚧 Must have completed at least one simple personal project (or working prototype) or have X points of accumulated XP",
      ],
      abilities: ["💱 Ability to cash in points"],
      expectations: [
        "👋 Attend at least two sessions per month",
        "⏲️ Must spend at least one hour/week mentoring DL0-DL2 members",
        "👷 Plan out a new project (Or extend the project from DL2), either alone or with a team, and create a working MVP",
      ],
      advancementCriteria: [
        "A member of level DL5 or higher decides when a DL3 member is ready to transition to the next level",
      ],
      textAlignment: TEXT_ALIGN,
      titleAlignment: TEXT_ALIGN,
    },

    {
      title: "DL4",
      description: "Members who have completed an in-depth project",
      imageSrc: level4Image,
      prerequisiteSkills: [
        "🚧 Must have completed at least two personal projects or have X points of accumulated XP",
      ],
      abilities: [
        "💸 Able to take on paid apprenticeship projects through the Dev Launchers Solutions Program",
        "🖊️ Internship help",
      ],
      expectations: [
        "👋 Attend at least two sessions per month",
        "⏲️ Must spend at least one hour/week mentoring DL0-DL3 members",
        "🤝 Start simple group project, and create a prototype",
      ],
      advancementCriteria: [
        "A member of level DL6 or higher decides when a DL4 member is ready to transition to the next level",
      ],
      textAlignment: TEXT_ALIGN,
      titleAlignment: TEXT_ALIGN,
    },

    {
      title: "DL5",
      description: "Members who have collaborated on an in-depth project",
      imageSrc: level5Image,
      prerequisiteSkills: [
        "📝 Proven project management ability",
        "💭 Proven ability to communicate thoughts and ideas clearly",
        "👩🏿‍💻 Development Experience",
      ],
      abilities: [
        "👋 Attend at least two sessions per month",
        "⭐ Featured on some portion of the Dev Launchers site with a Star profile",
        "✍️ Able to write featured blog posts on https://devlaunchers.com",
      ],
      expectations: [
        "🦸 Be the dedicated mentor for one group of DL2 members/member or mentor DL0 - DL4 members for at least 1 hour per week",
        "🔧 Plan out a new project with a group (or extend the project from DL4) and create a working MVP",
      ],
      advancementCriteria: [
        "A member of level DL7 or higher decides when a DL5 member is ready to transition to the next level",
      ],
      textAlignment: TEXT_ALIGN,
      titleAlignment: TEXT_ALIGN,
    },
    {
      title: "DL6",
      description:
        "Recommended For: University students, Bootcamp students, and dedicated hobbyists",
      imageSrc: level6Image,
      prerequisiteSkills: [
        "👋 Attend at least two sessions per month",
        "📝 Proven project management ability",
        "💭 Proven ability to communicate thoughts and ideas clearly",
        "👩🏿‍💻 Development Experience",
      ],
      abilities: [
        "📅 Able to begin offering one on one mentorship sessions through our official schedule",
      ],
      expectations: [
        "🦸 Be the dedicated mentor for one group of DL2 members/member or mentor DL0 - DL5 members for at least 1 hour per week",
      ],
      advancementCriteria: [
        "A member of level DL8 or higher decides when a DL6 member is ready to transition to the next level",
      ],
      textAlignment: TEXT_ALIGN,
      titleAlignment: TEXT_ALIGN,
    },
  ],
  advanced: [
    {
      title: "DL7",
      description:
        "Recommended For: University graduates, Bootcamp graduates, and advanced dedicated hobbyists",
      imageSrc: level7Image,
      prerequisiteSkills: [
        "👋 Attend at least one session per month",
        "📝 Proven project management ability",
        "💭 Proven ability to communicate thoughts and ideas clearly",
        "👩🏿‍💻 Development Experience",
      ],
      abilities: [
        "👔 Career consulting",
        "🙋 Interview prep",
        "💼 Become a Dev Launchers Partner to receive help and backup on client projects - Dev Launchers offers initial project planning, technical oversight, and architecture for X%. Rest goes to member",
      ],
      expectations: [
        "🦸 Be the dedicated mentor for one group of DL2-DL3 members/member or mentor DL0 - DL6 members for at least 1 hour per week",
      ],
      advancementCriteria: [
        "A panel of DL8 members decides when a DL7 member is ready to transition to the next level",
      ],
      textAlignment: TEXT_ALIGN,
      titleAlignment: TEXT_ALIGN,
    },

    {
      title: "DL8",
      description:
        "Recommended For: Professional tech worker with > 1 years of experience working with code or design",
      imageSrc: level8Image,
      prerequisiteSkills: [
        "🏗️ Ability to collaborate on and define projects",
        "📅 1+ year of professional development experience",
        "👥 Communication skills",
      ],
      abilities: [
        "🗺️ Able to manage and guide Dev Launchers Solutions projects",
      ],
      expectations: [
        "👋 Attend at least one session per month",
        "🦸 Be the dedicated mentor for one group of DL4-DL5 members/member or mentor DL0 - DL8 members for at least 1 hour per week",
        "👍 Help DL7 with career advice and interviews",
      ],
      advancementCriteria: [
        "At this level, members are exclusively collecting badges in specialized areas",
      ],
      textAlignment: TEXT_ALIGN,
      titleAlignment: TEXT_ALIGN,
    },
  ],
};

export default progressionLevels;
