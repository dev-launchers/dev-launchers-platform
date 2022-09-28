
import ReactMarkdown from "react-markdown";
import {
  Idea,
  IdeaName,
  IdeaProgress,
  WorkshopProgressBar,
  WorkshopCircule,
  WorkshopCompleted,
  Description
} from './StyledComments.js';


function IdeaOverview(props) {

  const {selectedCard, ...other} = props;


  return (
    <Idea>
      <IdeaName>
        <h2>{props.selectedCard.ideaName}</h2>
        <p>{props.selectedCard.tagline}</p>
        <IdeaProgress>
          <WorkshopProgressBar>
            <WorkshopCircule><WorkshopCompleted></WorkshopCompleted><p>Idea Form</p></WorkshopCircule>
            <WorkshopCircule><WorkshopCompleted></WorkshopCompleted><p>Review</p></WorkshopCircule>
            <WorkshopCircule><WorkshopCompleted></WorkshopCompleted><p>Workshopping</p></WorkshopCircule>
            <WorkshopCircule><WorkshopCompleted></WorkshopCompleted><p>Recruitment</p></WorkshopCircule>
            <WorkshopCircule><WorkshopCompleted></WorkshopCompleted><p>Project</p></WorkshopCircule>
          </WorkshopProgressBar>
        </IdeaProgress>
      </IdeaName>
      <Description>
        <h4>Description</h4>
        {props.selectedCard.description ? 
          <p><ReactMarkdown parserOptions={{commonmark:true}}>{props.selectedCard?.description?.replaceAll('\n', '  \n')}</ReactMarkdown></p>
          : ""
        }
      </Description>
    </Idea>
  )
}

export default IdeaOverview;