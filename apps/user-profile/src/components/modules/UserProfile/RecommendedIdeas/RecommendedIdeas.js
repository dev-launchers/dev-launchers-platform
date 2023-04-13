import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../../../common/Button';
import Card from '../../../common/Card';

import { env } from '../../../../utils/EnvironmentVariables';

import { useUserDataContext } from '../../../../context/UserDataContext';

import {
  RecommendedIdeasContainer,
  RecommendedIdeaCardContainer,
} from './StyledRecommendedIdeas';

const RecommendedIdeas = ({ ideas }) => {
  return (
    <RecommendedIdeasContainer ideas={ideas}>
      {ideas?.length > 0 ? (
        <div>
          <h2>Recommended Ideas 💡</h2>
          <div
            style={{ color: 'white', fontSize: '1.3rem', marginBottom: '2rem' }}
          >
            Have any thoughts on these projects Dev Launchers members may be
            tackling in the near future? Help us make them the best they can be
            with your opinions and feedback!
          </div>

          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            
            {ideas.slice(0, 4).map((idea) => {
              const { level, description, title, skills, commitmentHoursPerWeek, project } = idea;

              return (
                <div
                  key={Math.random()}
                  style={{
                    width: "90%",
                    marginTop: ".5rem",
                    backgroundColor: "white",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <RecommendedIdeaCardContainer>
                    <Card
                    size="small"
                    style={{ width: '90%', height: '17rem' }}
                    noImage
                    cardData={{
                      id: idea.id,
                      title: idea.ideaName,
                      secondaryText: idea.tagline,
                      tags: idea.skills?.map(({ skill }) => skill),
                      description:
                        idea.description.substring(0, 200) +
                        (idea.description.length > 200 ? '...' : ''),
                      href: `/ideaspace/workshopping/${idea.id}`,
                    }}
                  />
                  </RecommendedIdeaCardContainer>
                </div>
              )
            })}

           
            
          
          </div>
        </div>
      ) : (
        ''
      )}
    </RecommendedIdeasContainer>
  );
};

export default RecommendedIdeas;
