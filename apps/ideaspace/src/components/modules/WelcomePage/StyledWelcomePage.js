import styled from 'styled-components';

export const NavButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2rem;
`;

export const ButtonArea = styled.aside`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  margin-bottom: 10vh;
  @media (orientation: portrait) {
    min-height: 60vh;
  }

  @media (max-width: 1000px) {
    row-gap: 2rem;
    flex-direction: column;
  }
`;

export const Subheader = styled.div`
  font-family: 'Nunito Sans';
  color: #474747;
  margin: 0.5rem auto;
`;

export const RocketImage = styled.img`
  width: 25px;
  height: 25px;
  padding-left: 5px;
  display: inline-block;
`;

export const HeadWapper = styled.div`
  padding: 4.5rem 1rem 4rem 1rem;

  @media (max-width: 1712px) {
    padding: 3rem 1rem 2rem 1rem;
  }

  @media (max-width: 529px) {
    padding: 5rem 1rem 1rem 1rem;
  }
`;

export const Headline = styled.div`
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 68px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1c1c1c;
`;

export const StyledRanbow = styled.div`
  margin: 1.3rem auto 1rem auto;
  max-width: 28rem;
  height: 5px;
`;

export const LightbulbIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover:text-white"
  >
    <g id="lightbulb">
      <path
        id="Vector"
        d="M25 23.333C25.3333 21.6663 26.1667 20.4997 27.5 19.1663C29.1667 17.6663 30 15.4997 30 13.333C30 10.6808 28.9464 8.1373 27.0711 6.26194C25.1957 4.38658 22.6522 3.33301 20 3.33301C17.3478 3.33301 14.8043 4.38658 12.9289 6.26194C11.0536 8.1373 10 10.6808 10 13.333C10 14.9997 10.3333 16.9997 12.5 19.1663C13.6667 20.333 14.6667 21.6663 15 23.333M15 29.9997H25M16.6667 36.6663H23.3333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const HeartHandshakeIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover:text-white"
  >
    <g id="heart-handshake">
      <path
        id="Vector"
        d="M19.9987 8.33333C22.4987 5.83333 24.5654 5 27.4987 5C29.9299 5 32.2614 5.96577 33.9805 7.68485C35.6996 9.40394 36.6654 11.7355 36.6654 14.1667C36.6654 17.9833 34.1487 20.9 31.6654 23.3333L19.9987 35L8.33203 23.3333C5.83203 20.9167 3.33203 18 3.33203 14.1667C3.33203 11.7355 4.2978 9.40394 6.01689 7.68485C7.73597 5.96577 10.0675 5 12.4987 5C15.432 5 17.4987 5.83333 19.9987 8.33333ZM19.9987 8.33333L15.0655 13.2667C14.7269 13.6028 14.4581 14.0027 14.2747 14.4432C14.0913 14.8837 13.9969 15.3562 13.9969 15.8333C13.9969 16.3105 14.0913 16.7829 14.2747 17.2235C14.4581 17.664 14.7269 18.0638 15.0655 18.4C16.4322 19.7667 18.6155 19.8167 20.0655 18.5167L23.5155 15.35C24.3803 14.5653 25.5062 14.1307 26.6739 14.1307C27.8416 14.1307 28.9674 14.5653 29.8322 15.35L34.7655 19.7833M29.9987 25L26.6654 21.6667M24.9987 30L21.6654 26.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
