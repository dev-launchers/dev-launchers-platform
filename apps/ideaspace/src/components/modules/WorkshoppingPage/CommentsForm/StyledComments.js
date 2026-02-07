import styled from 'styled-components';

// export const Comments = styled.div`
//   overflow: auto;
//   width: 100%;
//   max-width: 690px;
//   min-width: 300px;
//   padding: 32px 20px;
//   background-color: white;
//   border-radius: 30px;

//   h2 {
//     font-weight: 300;
//   }
//   border-radius: 16px;
//   border: 2px solid var(--static-surface-grey-brand, #f0edee);
//   background: #fff;
// `;

export const Comments = styled.div`
  // overflow: auto;
  width: 100%;
  max-width: 680px;
  min-width: 300px;
`;

export const SingleComment = styled.div`
  //  padding: 0px 0px 12px;
  display: flex;
`;

export const SingleCommentContent = styled.div`
  width: 100%;
  min-width: 430px;
  background: var(--surface-00, #000);
  color: black;
  border-radius: 25px;
  // padding: 1px;
  display: flex;
  margin: 0;
  @media (orientation: portrait) {
    min-width: auto;
  }

  h3 {
    margin-right: 6px;

    // color: var(--grey-scale-off-black, #1c1c1c);
    // font-feature-settings: 'clig' off, 'liga' off;

    // color: var(--Grey-Scale-off-black, #1c1c1c);
    color: white;
    /* body/sm */
    font-family: var(--font-family-secondary, 'Nunito Sans');
    font-size: var(--font-size-body-sm, 14px);
    font-style: normal;
    font-weight: 700;
    line-height: var(--font-line-height-body-sm, 20px); /* 142.857% */
    letter-spacing: var(--font-letter-spacing-body-body, 0px);
    // text-transform: uppercase;
  }

  h5 {
    margin-top: 1px;
    padding-right: 5px;

    color: var(--grayscale-500, #676767);

    /* body/xs */
    font-family: var(--font-family-secondary, 'Nunito Sans');
    font-size: var(--font-size-body-xs, 12px);
    font-style: normal;
    font-weight: 300;
    line-height: var(--font-line-height-body-xs, 18px); /* 150% */
    letter-spacing: var(--font-letter-spacing-body-body, 0px);
  }

  p {
    margin-left: 52px;
    // color: var(--Grey-Scale-off-black, #1c1c1c);
    color: var(--content-04, #dad8d9);
    font-family: 'Nunito Sans';
    font-size: 14px;
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
  margin-right: 12px;

  width: 40px;
  height: 40px;
  flex-shrink: 0;

  border-radius: 48px;
  background: url(<path-to-image>),
    lightgray 0px -1.948px / 100% 153.333% no-repeat;
`;

export const SingleCommentButtons = styled.div`
  a {
    margin: 0px 3px;
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
  // overflow: auto;
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  border-radius: 30px;
  margin: 0 auto;

  form {
    display: flex;
    padding: 0;
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
    display: flex;
    height: 36px;
    width: 36px;
    justify-content: center;
    align-items: center;
    gap: var(--button-default-space-g-x, 4px);

    border-radius: 30px;
    border: var(--btn-border-width, 2px) solid
      var(--btn-border-brand-primary, #3f1f5f);
    background: var(--btn-surface-brand-primary, #52287a);
  }

  button:hover {
    cursor: pointer;
    border-color: #52287a;
  }
  button:focus {
    border: var(--btn-border-width, 4px) solid
      var(--btn-border-brand-primary, #3f1f5f);
  }
`;

export const UserComment = styled.div`
  width: 100%;
  background-color: var(--surface-00, #000);
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

export const UserImageOne = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 7.5px;
  align-self: flex-start;
  background-color: grey;
`;

export const CommentBox = styled.textarea`
  width: 100%;
  border-radius: 30px;
  background-color: #f0eded;
  border: solid 2px #f0eded;
  color: #7f7e7f;
  // padding: 5px;
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

  h2 {
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
  border: 0.2rem solid ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
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
  border: 0.2rem solid ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  width: 100%;
  // height: 50%;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-left: 20px;
  padding-bottom: 2rem;
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
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;

  p {
    color: white;
    font-size: 9px;
  }
`;

export const WorkshopCompleted = styled.div`
  background-color: #322e2e;
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
  display: flex;
  padding: 0px 4px;
  justify-content: center;
  align-items: center;
  gap: var(--25, 10px);
  border-radius: 6px;
  background: var(--static-surface-brand-uranus, #d8ecf3);

  color: var(--static-content-text-grey-muted, #494949);

  /* laptop-desktop/p-d-d */
  font-family: 'Nunito Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
`;
