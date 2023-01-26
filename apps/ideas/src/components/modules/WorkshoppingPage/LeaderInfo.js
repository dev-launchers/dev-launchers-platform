import {
  Leader,
  LeaderInfo,
  LeaderName,
  LeaderImage,
} from './StyledComments.js';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

function formatDate(string) {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([], options);
}

function LeaderInfoComponent(props) {
  const { selectedCard, ...other } = props;
  const { userData } = useUserDataContext();
  return (
    <Leader>
      <LeaderInfo>
        <LeaderName align="right">
        <div>
        <h2 align="left" style={{fontSize: 40, paddingRight:25}}> {props.selectedCard.discord}</h2>
        <p align="left" style={{fontSize: 20, paddingRight:25}}>IDEA OWNER</p> 
        </div>
          <LeaderImage
            alt="user_image"
            src={`https://picsum.photos/70?random=${props.id}`}
            style={{ width: "34%", height: "34%"}}
          />
        </LeaderName>
      </LeaderInfo>
    </Leader>
  );
}

export default LeaderInfoComponent;
