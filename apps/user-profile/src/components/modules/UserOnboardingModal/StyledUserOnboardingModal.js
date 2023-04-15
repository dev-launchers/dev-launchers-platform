import styled from "styled-components";
import theme from "../../../styles/theme";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Abel", sans-serif;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.Black};
  color: #F0EDEE;
  font-weight: 400;

  img {
    margin-right: 1rem;
    margin-left: 1rem;
  }
  /* GREYSCALE_OFF_WHITE */
  ${'' /* Enter styling */}
`;

export const ModalBody = styled.div`
  padding: 0 115px;

h2 {
  font-family: ${theme.fonts.normal};
  font-weight: 700;
  color: #212429;

}

  p {
    font-family: ${theme.fonts.headline};
    color: #7B7B7B;
    font-size: ${theme.fontSizes.small};
  }
  ${'' /* Enter styling */}
`;

// Modal set up
export const userUnboardingModalStyle = {
  content: {
    position: "absolute",
    width: "50%",
    padding: "0px",
    height: "80%",
    top: "50%",
    left: "50%",
    overflow: "hidden",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001
  },
  overlay: { zIndex: 1000, backgroundColor: "rgba(0,0,0,.75)" }
};
