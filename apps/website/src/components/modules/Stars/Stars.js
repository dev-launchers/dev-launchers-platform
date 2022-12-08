import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import axios from "axios";

import { useSheetsContext } from "../../../context/SheetsContext";

import PageBody from "../../common/PageBody";
import Section from "../../common/Section/Section";
import ProfileCard from "../../common/ProfileCard/ProfileCard";

export default function Stars() {
  const { learnPageData } = useSheetsContext();

  const [myProjects, setMyProjects] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [people, setPeople] = React.useState([]);

  // Start Projects/Opportunities
  React.useEffect(() => {
    getProjectData();
  }, []);
  const getProjectData = async () => {
    //await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`)
    await axios(`https://api.devlaunchers.org/projects`)
      .then(({ data }) => {
        if (data) {
          setProjects(data);

          const tempOpportunities = [];
          const tempPeople = [];

          data.map((project) => {
            /*
            project.opportunities.map((opportunity) => {
              opportunity.project = project;
              tempOpportunities.push(opportunity);
            });
            setOpportunities(tempOpportunities);
            */

            project.team.leaders.map((person) => {
              console.log("leader");
              person.profile = {
                profilePictureUrl: "",
                displayName: person.username,
                bio: "This is a test bio! and it's kind of long! This is a test bio! and it's kind of long! This is a test bio! and it's kind of long! "
              };
              tempPeople.push(person);
            });
            project.team.members.map((person) => {
              console.log("member");
              person.profile = {
                profilePictureUrl: "",
                displayName: person.username,
                bio: "This is a test bio!"
              };
              tempPeople.push(person);
            });
          });
          console.log(tempPeople);
          setPeople(tempPeople);
        }
      })
      .catch(() => {
        console.error("Could not fetch project data");
      });
  };
  // End Projects/Opportunities

  return (
    <div>
      <PageBody width="95%">
        <br />
        <h1 id="title">The People Who Make It All Happen ⭐</h1>
        <div className="page-description">
          We love these people!
        </div>
        <hr />
        <br />
        <div style={{display:"flex", flexWrap:"wrap"}}>
          {people.map((person, index) => {
            return <ProfileCard key={index} person={person}></ProfileCard>;
          })}
        </div>
      </PageBody>
    </div>
  );
}
