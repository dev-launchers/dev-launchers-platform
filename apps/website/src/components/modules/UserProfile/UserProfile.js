import React from 'react';
import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css'; // import react-tabs styles
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';

import Button from '../../common/Button';
import PageBody from '../../common/PageBody';

import { useUserDataContext } from '../../../context/UserDataContext';
import BioBox from './BioBox';
import Opportunities from './Opportunities';
import ProfileCard from './ProfileCard';
import RecommendedIdeas from './RecommendedIdeas';
import UserProjects from './UserProjects';
import People from './People';

import { env } from '../../../utils/EnvironmentVariables';

import { Misc, UserInfo, UserSection, Wrapper } from './StyledUserProfile';
import UserInterests from './UserInterests';
import { useRouter } from 'next/router';
// import DiscordSection from "./DiscordSection/DiscordSection";

// State management component
export default function UserProfile({ otherUser }) {
  const { userData, isAuthenticated } = useUserDataContext();
  const [loading, setLoading] = useState(true);
  const [opportunities, setOpportunities] = React.useState([]);
  const [myProjects, setMyProjects] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [ideas, setIdeas] = React.useState([]);
  const [people, setPeople] = React.useState([]);
  const [interests, setInterests] = React.useState([]);

  // If user hasn't set a username, redirect them to the signup form
  const router = useRouter();
  React.useEffect(() => {
    if (isAuthenticated && userData.name === '') router.push('/signup');
  }, [isAuthenticated]);

  // Start Projects/Opportunities
  React.useEffect(() => {
    getProjectData();
  }, []);
  const getProjectData = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`)
      .then(({ data }) => {
        if (data) {
          setProjects(data);

          const tempOpportunities = [];
          data.map((project) => {
            project.opportunities.map((opportunity) => {
              opportunity.project = project;
              tempOpportunities.push(opportunity);
            });
          });
          setOpportunities(tempOpportunities);
        }
      })
      .catch(() => {
        console.error('Could not fetch project data');
      });
  };
  React.useEffect(() => {
    const myProjects = [];
    projects.map((project) => {
      [...project.team.leaders, ...project.team.members].map((member) => {
        if (member.id == userData.id) myProjects.push(project);
      });
    });
    setMyProjects(myProjects);
  }, [projects, userData]);
  // End Projects/Opportunities

  // Start Ideas
  React.useEffect(() => {
    getIdeaData();
  }, []);
  const getIdeaData = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`)
      .then(({ data }) => {
        if (data) {
          setIdeas(data);
        }
      })
      .catch(() => {
        console.error('Could not fetch idea data');
      });
  };
  // End Ideas

  // Start People
  React.useEffect(() => {
    getPeopleData();
  }, []);
  const getPeopleData = async () => {
    const userCount = (
      await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/count`)
    ).data;
    let randomUserIds = [
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
    ];
    console.log(randomUserIds);
    let usersData = await Promise.all(
      randomUserIds.map(
        async (userId) =>
          (
            await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}`)
          ).data
      )
    );

    console.log(usersData);
    setPeople(usersData);
  };
  // End People

  // Start Interests
  React.useEffect(() => {
    getInterests();
  }, []);
  const getInterests = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/interests`)
      .then(({ data }) => {
        if (data) {
          setInterests(data);
        }
      })
      .catch(() => {
        console.error('Could not fetch interest data');
      });
  };
  // End Interests

  useEffect(() => {
    setLoading(userData?.id === -1 || otherUser?.id === -1);
  }, [otherUser, userData]);

  return (
    <UserProfileView
      otherUser={otherUser}
      userData={userData}
      loading={loading}
      opportunities={opportunities}
      myProjects={myProjects}
      projects={projects}
      ideas={ideas}
      people={people}
      interests={interests}
    />
  );
}

// View component
export function UserProfileView({
  otherUser,
  userData,
  loading,
  opportunities,
  myProjects,
  projects,
  ideas,
  people,
  interests,
}) {
  if (loading) {
    return <strong>Loading.....</strong>;
  }

  const serializeSchedule = () => {
    // id={`scheduler-hour-block-${day}-${hour}`}
    // Create an array of objects representing the days
    // Each object has a day property and an array of hours
    let days = [
      { day: 'Sunday', hours: [] },
      { day: 'Monday', hours: [] },
      { day: 'Tuesday', hours: [] },
      { day: 'Wednesday', hours: [] },
      { day: 'Thursday', hours: [] },
      { day: 'Friday', hours: [] },
      { day: 'Saturday', hours: [] },
    ];

    // Loop through all the days and get data from the dom
		let dayIndex = 0;
    days.forEach((day) => {
			console.log(day);
			let dayString = day.day;
      // Get all the hours for the day
			let newHours = [];
      let hours = [...Array(24).keys()].map((hourNum) => {
				let hourElement = document.getElementById(`scheduler-hour-block-${dayString}-${hourNum}`);

				// Add hourElement state to the day object
				// Mark whether the hour is available or not
				newHours.push(hourElement.classList.contains('available'));

				return hourElement;
			});
			day.hours = newHours;

			// Store data back into days array
			days[dayIndex] = day;

			dayIndex++;
    });
    console.log(JSON.stringify(days));
  };

  return (
    <PageBody>
      {/*}{userData?.id || (otherUser?.id && !loading) ? ( {*/}
      {true ? (
        <Wrapper>
          <UserSection>
            <ProfileCard
              img={
                otherUser?.profile?.profilePictureUrl ||
                userData.profilePictureUrl
              }
              name={otherUser?.profile?.displayName || userData.name}
              username={otherUser?.username || userData.username}
            />

            <UserInfo>
              {/* }
							<Points
								availablePoints={
									otherUser?.point?.availablePoints || userData.availablePoints
								}
								seasonPoints={
									otherUser?.point?.totalSeasonPoints ||
									userData.totalSeasonPoints
								}
								volunteerHours={
									otherUser?.point?.volunteerHours || userData.volunteerHours
								}
							/>
							{ */}
              <BioBox
                data={otherUser?.profile || userData}
                canEdit={!otherUser}
              />
            </UserInfo>
          </UserSection>

          {/*
					<LabCampus />
					*/}

          <Misc>
            <Tabs
              defaultFocus={true}
              defaultIndex="0"
              style={{ width: '80vw', maxWidth: '1400px', minHeight: '30rem' }}
            >
              <TabList
                style={{
                  width: '100%',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {
                  // Have to do this hack for some reason (create empty tab if page not loaded)...
                  // otherwise tabs break
                  Object.entries(userData || {}).length === 0 ? <Tab></Tab> : ''
                }
                {
                  // Render tabs from our dynamically built learnPageData object
                  [
                    'Projects',
                    'People',
                    'Interests',
                    'Ideas',
                    'Opportunities',
                  ].map((key) => (
                    <Tab key={`tab${key}`}>{key}</Tab>
                  ))
                }
              </TabList>

              <TabPanel key={0}>
                <UserProjects myProjects={myProjects} />
              </TabPanel>

              <TabPanel key={1}>
                <People people={people} />
              </TabPanel>

              <TabPanel key={2}>
                <UserInterests interests={interests} />
              </TabPanel>

              <TabPanel key={3}>
                <RecommendedIdeas ideas={ideas} />
              </TabPanel>

              <TabPanel key={4}>
                <Opportunities opportunities={opportunities} />
              </TabPanel>
            </Tabs>

            <div style={{ width: '100%' }}>
              My Availability
              <br />
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {[
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ].map((weekday) => (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '13%',
                    }}
                  >
                    <b style={{ fontSize: '1.5em', flex: 1 }}>{weekday}</b>

                    {/* This is the list of hours for each day */}
                    {/* It will be a list of 24 divs, each representing an hour */}
                    {/* Each div will be clickable and will alert the user of the day and hour */}
                    {/* Hours are from 1-12, so we will need to convert from 24 hour time */}
                    {/* We also need to add AM/PM */}
                    {[...Array(24).keys()].map((hourNum) => (
                      <SchedulerHourBlock day={weekday} hour={hourNum} />
                    ))}
                  </div>
                ))}
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              ></div>
              {/* Add a button that serializes the entire schedule and outputs it to the console */}
              {/* It should be a button that says "Save Schedule" */}
              {/* When clicked, it should output the schedule to the console */}
              {/* The schedule should be an array of objects, each object representing a day */}
              {/* Each object should have a day property and an array of hours */}
              {/* Each hour should be a boolean, true if the hour is available, false if not */}
              {/* Example: [{day: 's', hours: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, true, true, true, true, true, true]}, {day: 'm', hours: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, true, true, true, true, true, true]}, ...] */}
              <button onClick={() => serializeSchedule()}>Save Schedule</button>
            </div>

            {/* }<WeeksGlance />{ */}
            {/*
						<LabMember />
						*/}
            {/*
							<DiscordSection
								discordId={userData.discord.id}
								avatarKey={userData.discord.avatar}
								discordUsername={userData.discord.username}
								discordDiscriminator={userData.discord.discriminator}
							/> */}
          </Misc>
        </Wrapper>
      ) : (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '60vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: '2rem' }}>
            Please sign in to access this page!
          </p>
          <Button
            fontSize="2rem"
            href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}
          >
            Sign In
          </Button>
          <br />
        </div>
      )}
      <br />
    </PageBody>
  );
}

const SchedulerHourBlock = ({ day, hour }) => {
  const [hourBlockState, setHourBlockState] = useState(false);

  return (
    <div
      id={`scheduler-hour-block-${day}-${hour}`}
      style={{
        cursor: 'pointer',
        backgroundColor: hourBlockState ? 'grey' : 'lightgrey',
        width: '100%',
        height: '100%',
        margin: '0',
        flex: 1,
        textAlign: 'center',
        userSelect: 'none',
      }}
      onClick={() => {
        setHourBlockState(!hourBlockState);
      }}
      onMouseOver={(e) => {
        // When a mouse hovers over an hour block div, check if the mouse is down
        // If it is, toggle the hour block state
        if (e.buttons === 1) {
          setHourBlockState(!hourBlockState);
        }
      }}
    >
      {hour % 12 === 0 ? 12 : hour % 12}
      {hour < 12 ? 'AM' : 'PM'}
    </div>
  );
};
