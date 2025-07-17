import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  width: 74rem;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1440px) {
    width: 100%;
    padding: 0 6rem 8rem 6rem;
  }
  @media (max-width: 744px) {
    width: 100%;
    padding: 0 8rem 9.125rem 8rem;
  }
  @media (max-width: 430px) {
    width: 100%;
    padding: 0 1.25rem 8.25rem 1.25rem;
  }

  .main-title {
    color: var(--content-grey-pure, #fff) !important;
    font-family: var(--text-family-primary, Oswald) !important;
    font-weight: 400 !important;
    line-height: 125% !important;
    align-items: center;
    max-width: 100%;
    line-height: 125% !important;
    letter-spacing: 0.135rem !important;
    font-size: 3.375rem;

    @media (max-width: 1440px) {
      font-size: ar(--text-size-7xl, 3.375px);
    }

    @media (max-width: 830px) {
      font-size: var(--text-size-5xl, 2.5rem);
    }

    @media (max-width: 430px) {
      font-size: var(--text-size-5xl, 2.5rem);
    }
  }

  .main-subtitle {
    color: var(--content-grey-brand, #f0edee) !important;
    font-family: var(--text-family-secondary, 'Nunito Sans') !important;
    font-size: var(--text-size-xl, 1.25rem) !important;
    font-weight: 400 !important;
    line-height: 1.75rem !important;
    align-items: center;
    max-width: 80%;

    @media (max-width: 1192px) {
      font-size: 1.1rem !important;
      max-width: 90%;
    }

    @media (max-width: 810px) {
      font-size: 1rem !important;
      line-height: 1.5rem !important;
      max-width: 95%;
    }

    @media (max-width: 529px) {
      font-size: 0.9rem !important;
      max-width: 100%;
    }
  }
`;

export const NavButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  width: 100%;
  background-color: black;

  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonArea = styled.aside`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  width: 100%;
  background-color: black;

  @media (orientation: portrait) {
    min-height: 60vh;
  }

  @media (max-width: 1192px) {
    gap: 1.5rem;
  }

  @media (max-width: 810px) {
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 529px) {
    gap: 1rem;
  }
`;

export const RocketImage = styled.img`
  width: 25px;
  height: 25px;
  padding-left: 5px;
  display: inline-block;
`;

export const HeadWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 1.25rem;

  @media (max-width: 1440px) {
    width: 100%;
    margin-bottom: 5rem;
  }
  @media (max-width: 744px) {
    width: 100%;
    margin-bottom: 5rem;
  }

  @media (max-width: 430px) {
    width: 100%;
    margin-bottom: 4.5rem;
  }
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
        strokeWidth="3"
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
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover:text-white"
  >
    <g id="arrow-right">
      <path
        id="Vector"
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const BetaButton = styled.div`
  margin-top: 4rem;
  margin-bottom: 1.25rem;
  display: flex;
  padding: var(--padding-sm, 4px) var(--btn-space-p-x, 18px);
  justify-content: center;
  align-items: center;
  gap: var(--button-default-space-gap, 4px);
  border-radius: var(--rounded-lg, 24px);
  border: var(--border-width-none, 0px) solid
    var(--border-brand-neptune, #6196b7);
  background: linear-gradient(
      0deg,
      var(--effect-overlay-neptune-muted, rgba(24, 52, 69, 0.25)) 0%,
      var(--effect-overlay-neptune-muted, rgba(24, 52, 69, 0.25)) 100%
    ),
    var(--surface-grey-brand, #1c1c1c);
  color: #6196b7;
`;
