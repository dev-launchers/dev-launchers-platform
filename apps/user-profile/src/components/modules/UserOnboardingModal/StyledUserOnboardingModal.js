import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Abel", sans-serif;
`;

export const ModalHeader = styled.div`
  width: 100%;
  ${'' /* Enter styling */}
`;

export const ModalBody = styled.div`
  padding: 0 120px;
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
