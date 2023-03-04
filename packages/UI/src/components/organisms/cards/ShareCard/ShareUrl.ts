import { useNavigate, useLocation } from 'react-router-dom';

const navigate = useNavigate();
const currentLocation = useLocation();

const createShareUrl = (platformUrl: string, ideaUrl: string) => {
  return `${platformUrl}${ideaUrl}`;
}

const openInNewWindow = () => {

}

const shareIdea = () => {
  createShareUrl;
  navigate(createShareUrl);
};
