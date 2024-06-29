
import { ProfilePictureContainer } from './StyledUploadProfilePicture';
import profilePictureImage from './../../../images/profile-picture-upload.png';

function UploadProfilePicture({ width, height }) {
    return (<ProfilePictureContainer><img src={profilePictureImage} style={{ width, height }}></img></ProfilePictureContainer>)
}

export default UploadProfilePicture