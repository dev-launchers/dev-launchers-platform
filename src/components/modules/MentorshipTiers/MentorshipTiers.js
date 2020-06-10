import React from "react";
import PageBody from "../../common/PageBody";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import style from "./MentorshipTiers.module.css";

export default function MentorshipTiers() {
  return (
    <div>
      <PageBody>
        <br />
        <h1 id="title">TIERED MENTORSHIP PROGRESSION PROGRAM</h1>
        <hr />
        <div className="page-description">
          <Accordion
            className={style.accordion}
            allowMultipleExpanded="True"
            allowZeroExpanded="True"
          >
            {/* DL-0 */}
            <AccordionItem className={style.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={style.accordion__button}>
                  <span className={style.accordion__button__lebel}>DL-0 </span>
                  Ideal for members new to development
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.accordion__panel}>
                <p>
                  <ul>
                    <li>
                      Rank abilities: Access to our group mentorship program
                    </li>
                    <li>
                      Expectations:
                      <ul>
                        <li>Initial setup</li>
                        <li>Attend at least one session per month</li>
                        <li>
                          Be able to explain what variables and functions are in
                          programming
                        </li>
                      </ul>
                    </li>
                    <li>
                      Level Up Criteria: A rank DL8 member decides when a DL0
                      member is ready to transition to the next level
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/* DL-1 */}
            <AccordionItem className={style.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={style.accordion__button}>
                  <span className={style.accordion__button__lebel}>DL-1 </span>
                  Members with limited coding or digital design experience
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.accordion__panel}>
                <p>
                  <ul>
                    <li>
                      Prerequisite Skills: A basic understanding of coding
                      fundamentals
                    </li>
                    <li>
                      Rank abilities:
                      <ul>
                        <li>Access to 1 on 1 mentorship sessions</li>
                        <li>Access to laptops lending program</li>
                        <li>Ability to earn attendance points</li>
                      </ul>
                    </li>
                    <li>
                      Expectations: Be able to speak semi-fluently about all
                      concepts contained in the Khan Academy programming intro
                      course - (minus object oriented design)
                    </li>
                    <li>
                      Level Up Criteria: A rank DL8 member decides when a DL1
                      member is ready to transition to the next level
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/* DL-2 */}
            <AccordionItem className={style.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={style.accordion__button}>
                  <span className={style.accordion__button__lebel}>DL-2 </span>{" "}
                  Members who have a solid enough understanding of fundamentals
                  to begin their own projects
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.accordion__panel}>
                <p>
                  <ul>
                    <li>Prerequisite Skills: Proven communication skills</li>
                    <li>
                      Rank abilities:
                      <ul>
                        <li>
                          Full ability to begin earning within our points and
                          rewards program
                        </li>
                        <li>
                          GitHub repo with continuous deployment pipeline,
                          hosted by Dev Launchers
                        </li>
                      </ul>
                    </li>
                    <li>
                      Expectations:
                      <ul>
                        <li>
                          Start simple personal project, and create a prototype
                        </li>
                        <li>Learn basic object oriented design</li>
                        <li>Learn and be proficient in basic git</li>
                      </ul>
                    </li>
                    <li>
                      Level Up Criteria: A rank DL8 member decides when a DL2
                      member is ready to transition to the next level
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/* DL-3 */}
            <AccordionItem className={style.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={style.accordion__button}>
                  <span className={style.accordion__button__lebel}>DL-3 </span>{" "}
                  Members who have finished a simple project
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.accordion__panel}>
                <p>
                  <ul>
                    <li>
                      Prerequisite Skills: Must have completed at least one
                      simple personal project (or working prototype) or have X
                      points of accumulated XP
                    </li>
                    <li>Rank abilities: Ability to cash in points</li>
                    <li>
                      Expectations:
                      <ul>
                        <li>
                          Must spend at least one hour/week mentoring DL0-DL2
                          members
                        </li>
                        <li>
                          Plan out a new project (Or extend the project from
                          DL2), either alone or with a team, and create a
                          working MVP
                        </li>
                      </ul>
                    </li>
                    <li>
                      Level Up Criteria: A rank DL8 member decides when a DL3
                      member is ready to transition to the next level
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/* DL-4 */}
            <AccordionItem className={style.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={style.accordion__button}>
                  <span className={style.accordion__button__lebel}>DL-4 </span>{" "}
                  Members who have completed an in-depth project
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.accordion__panel}>
                <p>
                  <ul>
                    <li>
                      Prerequisite Skills: Must have completed at least two
                      personal projects or have X points of accumulated XP
                    </li>
                    <li>
                      Rank abilities:
                      <ul>
                        <li>
                          Able to take on paid apprenticeship projects through
                          the Dev Launchers Solutions Program
                        </li>
                        <li>Internship help TODO: Flesh out more</li>
                      </ul>
                    </li>
                    <li>
                      Expectations:
                      <ul>
                        <li>
                          Must spend at least one hour/week mentoring DL0-DL3
                          members
                        </li>
                        <li>
                          Start simple group project, and create a prototype
                        </li>
                      </ul>
                    </li>
                    <li>
                      Level Up Criteria: A rank DL8 member decides when a DL4
                      member is ready to transition to the next level
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/* DL-5 */}
            <AccordionItem className={style.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={style.accordion__button}>
                  <span className={style.accordion__button__lebel}>DL-5 </span>{" "}
                  Members who have collaborated on an in-depth project
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.accordion__panel}>
                <p>
                  <ul>
                    <li>
                      Prerequisite Skills:
                      <ul>
                        <li>Proven project management ability</li>
                        <li>
                          Proven ability to communicate thoughts and ideas
                          clearly
                        </li>
                        <li>Development Experience</li>
                      </ul>
                    </li>
                    <li>
                      Rank abilities:
                      <ul>
                        <li>
                          Featured on some portion of the Dev Launchers site
                          with a Star/Self Starter profile
                        </li>
                        <li>
                          Able to write featured blog posts on{" "}
                          <a href="https://devlaunchers.com">
                            https://devlaunchers.com
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Expectations:
                      <ul>
                        <li>
                          Be the dedicated mentor for one group of DL2
                          members/member or mentor DL0 - DL4 members for at
                          least 1 hour per week
                        </li>
                        <li>
                          Plan out a new project with a group (or extend the
                          project from DL4) and create a working MVP
                        </li>
                      </ul>
                    </li>
                    <li>
                      Level Up Criteria: A rank DL8 member decides when a DL5
                      member is ready to transition to the next level
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/* DL-6 */}
            <AccordionItem className={style.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={style.accordion__button}>
                  <span className={style.accordion__button__lebel}>DL-6 </span>{" "}
                  Recommended For: University students, Bootcamp students,
                  Dedicated Hobbyists
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.accordion__panel}>
                <p>
                  <ul>
                    <li>
                      Prerequisite Skills:
                      <ul>
                        <li>Proven project management ability</li>
                        <li>
                          Proven ability to communicate thoughts and ideas
                          clearly
                        </li>
                        <li>Development Experience</li>
                      </ul>
                    </li>
                    <li>
                      Rank abilities: Able to begin offering one on one
                      mentorship sessions through our official schedule
                    </li>
                    <li>
                      Expectations: Be the dedicated mentor for one group of DL2
                      members/member or mentor DL0 - DL5 members for at least 1
                      hour per week
                    </li>
                    <li>
                      Level Up Criteria: A rank DL8 member decides when a DL6
                      member is ready to transition to the next level
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/* DL-7 */}
            <AccordionItem className={style.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={style.accordion__button}>
                  <span className={style.accordion__button__lebel}>DL-7 </span>{" "}
                  Recommended For: University Graduates, Bootcamp Graduates,
                  Dedicated Hobbyists
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.accordion__panel}>
                <p>
                  <ul>
                    <li>
                      Prerequisite Skills:
                      <ul>
                        <li>Proven project management ability</li>
                        <li>
                          Proven ability to communicate thoughts and ideas
                          clearly
                        </li>
                        <li>Development Experience</li>
                      </ul>
                    </li>
                    <li>
                      Rank abilities:
                      <ul>
                        <li>Career consulting</li>
                        <li>Interview prep</li>
                        <li>
                          Become a Dev Launchers Partner to receive help and
                          backup on client projects - Dev Launchers offers
                          initial project planning, technical oversight, and
                          architecture for X%. Rest goes to member
                        </li>
                      </ul>
                    </li>
                    <li>
                      Expectations: Be the dedicated mentor for one group of
                      DL2-DL3 members/member or mentor DL0 - DL6 members for at
                      least 1 hour per week
                    </li>
                    <li>
                      Level Up Criteria: A rank DL8 member decides when a DL7
                      member is ready to transition to the next level
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/* DL-8 */}
            <AccordionItem className={style.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={style.accordion__button}>
                  <span className={style.accordion__button__lebel}>DL-8 </span>{" "}
                  Recommended For: Professional tech worker with > 1 years of
                  experience working with code or design
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.accordion__panel}>
                <p>
                  <ul>
                    <li>
                      Prerequisite Skills:
                      <ul>
                        <li>1+ year of professional development experience </li>
                        <li>1+ year of professional development experience</li>
                        <li>Communication skills</li>
                      </ul>
                    </li>
                    <li>
                      Rank abilities: Able to manage and guide a Dev Launchers
                      Solutions projects
                    </li>
                    <li>
                      Expectations:
                      <ul>
                        <li>
                          Be the dedicated mentor for one group of DL4-DL5
                          members/member or mentor DL0 - DL8 members for at
                          least 1 hour per week
                        </li>
                        <li>Help DL7 with career advice and interviews</li>
                      </ul>
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <br />
      </PageBody>
    </div>
  );
}
