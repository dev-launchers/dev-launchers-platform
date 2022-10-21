
import {
  Leader,
  LeaderInfo,
  LeaderName,
  LeaderImage
} from './StyledComments.js';



function formatDate(string){
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([],options);
}


function LeaderInfoComponent(props) {

  const {selectedCard, ...other} = props;

  return (
    <Leader>
        <LeaderInfo>
          <LeaderName align="right">
            <LeaderImage alt="user_image" src={`https://picsum.photos/70?random=${props.id}`} />
            {props.selectedCard.discord}
          </LeaderName>
        <h6>
          <p>Submitted: {formatDate(props.selectedCard.created_at)}</p>
          <p>Contact</p>
          <p>email: {props.selectedCard.email}</p>
          <p>discord: {props.selectedCard.discord}</p>
        </h6>
      </LeaderInfo>
    </Leader>
  )
}

export default LeaderInfoComponent;