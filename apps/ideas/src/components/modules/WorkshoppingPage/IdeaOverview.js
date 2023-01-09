import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import {
  Idea,
  IdeaName,
  IdeaProgress,
  WorkshopProgressBar,
  WorkshopCircule,
  WorkshopCompleted,
  Description,
  WorkshopSaveButton,
  WorkshopSavedButton,
} from './StyledComments.js';
import saveImage from '../../../images/Vector1.svg';
import savedImage from '../../../images/Vector39.svg';

function IdeaOverview(props) {
  const { selectedCard, ...other } = props;
  const [saved, setSaved] = useState(false);
  const save = () => {
    if(saved){
      setSaved(false);
    }else{
      setSaved(true);
    }
  };
  
  return (
    <Idea>
      <IdeaName>
        <h2>{props.selectedCard.ideaName}</h2>
        <p>{props.selectedCard.tagline}</p>
        
        <IdeaProgress>
          <WorkshopProgressBar>
            <WorkshopCircule>
              <WorkshopCompleted></WorkshopCompleted>
              <p>Idea&nbsp;Form</p>
            </WorkshopCircule>
            <WorkshopCircule>
              <WorkshopCompleted></WorkshopCompleted>
              <p>Review</p>
            </WorkshopCircule>
            <WorkshopCircule>
              <WorkshopCompleted></WorkshopCompleted>
              <p>Workshopping</p>
            </WorkshopCircule>
            <WorkshopCircule>
              <WorkshopCompleted></WorkshopCompleted>
              <p>Recruitment</p>
            </WorkshopCircule>
            <WorkshopCircule>
              <WorkshopCompleted></WorkshopCompleted>
              <p>Project</p>
            </WorkshopCircule>
          </WorkshopProgressBar>     
        </IdeaProgress>
      </IdeaName>
      <Description>
        <h4>Description</h4>
        {props.selectedCard.description ? (
          <p>
            <ReactMarkdown parserOptions={{ commonmark: true }}>
              {props.selectedCard?.description?.replaceAll('\n', '  \n')}
            </ReactMarkdown>
          </p>
        ) : (
          ''
        )}
        <br />
        {props.selectedCard.targetAudience ? (
          <div>
            <h4>Target Audience</h4>
            <p>
              <ReactMarkdown parserOptions={{ commonmark: true }}>
                {props.selectedCard?.targetAudience?.replaceAll('\n', '  \n')}
              </ReactMarkdown>
            </p>
          </div>
        ) : (
          ''
        )}
        <br />
        {props.selectedCard.features ? (
          <div>
            <h4>Features</h4>
            <p>
              <ReactMarkdown parserOptions={{ commonmark: true }}>
                {props.selectedCard?.features?.replaceAll('\n', '  \n')}
              </ReactMarkdown>
            </p>
          </div>
        ) : (
          ''
        )}
        <br />
        {props.selectedCard.experience ? (
          <div>
            <h4>Experience Requirements</h4>
            <p>
              <ReactMarkdown parserOptions={{ commonmark: true }}>
                {props.selectedCard?.experience?.replaceAll('\n', '  \n')}
              </ReactMarkdown>
            </p>
          </div>
        ) : (
          ''
        )}
      </Description>
    </Idea>
    
  );
  
}

export default IdeaOverview;
