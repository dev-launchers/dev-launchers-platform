import styled from 'styled-components';

export const Comments = styled.div`
  overflow: auto;
  width: 100%;
  max-width: 700px;
  background-color: white;
  border-radius: 30px;


  h2 {
    font-weight: 300;
  }
`;

export const SingleComment = styled.div`
  padding: 10px 20px;
  margin-bottom: 10px;
  display: flex;

`;

export const SingleCommentContent = styled.div`
  width: 100%;
  min-width: 430px;
  background-color: white;
  color: black;
  border-radius: 25px;
  padding: 1px;
  display: inline-flex;


  @media (orientation: portrait) {
    min-width: auto;
  }

  h3 {
    margin: 0;
    padding-right: 5px;
    
    color: var(--grey-scale-off-black, #1C1C1C);
    font-feature-settings: 'clig' off, 'liga' off;
    
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.28px;
    text-transform: uppercase;
  }

  h5 {
    margin: 0;
    padding-right: 5px;

    color: var(--grey-scale-grey, #7F7E7F);
    
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  p {
    margin: 0;

    color: var(--grey-scale-off-black, #1C1C1C);
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const UserNameCommentBox = styled.div`
  margin-right: 62%;
`;

export const UserNameComment = styled.input`
  /* width: 100%; */
  min-width: 200px;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  border-radius: 25px;
  padding: 20px;
`;


export const UserImage = styled.img`
  margin-right: 10px;

  width: 48px;
  height: 48px;
  flex-shrink: 0;

  border-radius: 48px;
  background: url(<path-to-image>), lightgray 0px -1.948px / 100% 153.333% no-repeat;
`;


export const SingleCommentButtons = styled.div`
  padding-top: 5px;

  a {
    margin: 0px 3px;;
    padding-top: 10px;
    cursor: pointer;
    font-size: 10px;
    color: #385997;
    letter-spacing: 0.05em;
  }
`;

export const Time = styled.div`
  font-size: 10px;
  padding-left: 5px;
  padding-right: 5px;
  color: #999;
`;

export const Form = styled.div`
  overflow: auto;
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  border-radius: 30px;
  margin: 0 300 px 0 300px;

  form {
    display: flex;
    padding: 15px 0;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  input {
    padding-left: 10px;
    border: 1px solid #c1c1c1;
    background-color: white;
    margin-right: 10px;
    border-radius: 25px;
  }

  button {
    margin-top: 10px;
    padding: 8px 30px;
    color: black;
    font-weight: bold;
    border-radius: 25px;
    border: 1px solid #999;
    background-color: #C3C0C0;
    margin-right: 0;
    margin-left: auto;
  }

  button:hover {
    cursor: pointer;
    color: #385997;
    border-color: #385997;
  }
`;




export const UserComment = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 3rem;
  }
`;


export const UserImageOne = styled.img`
  margin: .2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;


export const CommentBox = styled.textarea`
  border-radius: 10px;
  background-color: #F0EDED;
  border: solid 1px #F0EDED;
  color: #7F7E7F;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;


export const Idea = styled.div`
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  // height: 280px;
  border-radius: 30px;
  text-align: left;

  @media (orientation: portrait) {
    width: 90vw;
  }

  h2{
    padding-top: 10px;
    margin-bottom: 5px;
  }

  h4 {
    padding-top: 10px;
    margin-bottom: 5px;
  }
`;

export const IdeaName = styled.div`
  background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  border: .2rem solid ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  width: 100%;
  height: 50%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  padding-left: 20px;
  padding-bottom: 0.1rem;
  color: white;
`;


export const IdeaProgress = styled.div`
  background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  width: 100%;
  height: 50%;
  padding-top: 30px;
  color: white;
`;


export const Description = styled.div`
  background-color: white;
  border: .2rem solid ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  width: 100%;
  // height: 50%;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-left: 20px;
  padding-bottom:2rem;
  overflow-wrap: break-word;
`;


export const Leader = styled.div`
  padding-top: 10px;
  margin-bottom: 5px;
`;


export const LeaderName = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;


export const LeaderImage = styled.img`
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const LeaderInfo = styled.div`
  margin-left: 30px;
  background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  width: 100%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  color: white;
`;

export const WorkshopTest = styled.div`
  position: relative;
  margin-left: 80px;
  bottom: 60px;
`;

export const WorkshopProgressBar = styled.div`
  background-color: white;
  height: 7.35px;
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
`;

export const WorkshopCircule = styled.div`
  height: 20px ;
  width: 20px;
  background-color: white;
  border-radius: 50%;

  p {
    color: white;
    font-size: 9px;
  }
`;

export const WorkshopCompleted = styled.div`
  background-color: #322E2E;
  height: 16px;
  width: 16px;
  border-radius: 50px;
  position: relative;
  left: 2px;
  top: 2px;
  margin-bottom: -40px;
`;

export const WorkshopIncomplete = styled.div`
  background-color: white;
  height: 16px;
  width: 16px;
  border-radius: 50px;
  position: relative;
  left: 2px;
  top: 2px;
  margin-bottom: -40px;
`;

export const IdeaOwnerTag = styled.div`
  display: inline-flex;
  padding: 2px 8px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: var(--Orange-orange-200, #FFBF86);

  color: var(--Orange-orange-600, #B3590A);

  /* laptop-desktop/p-d-d */
  font-family: "Nunito Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;