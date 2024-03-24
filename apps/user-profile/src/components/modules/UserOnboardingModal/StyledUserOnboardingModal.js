import styled from "styled-components";

export const ModalContainer = styled.div`
  
`;

// Modal set up
export const userUnboardingModalStyle = {
  content: {
    position: "absolute",
    width: "auto",
    padding: "0px",
    height: "auto",
    top: "50%",
    left: "50%",
    overflow: "hidden",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001,
    borderRadius: "32px",
    border: "0"
  },
  overlay: { zIndex: 1000, backgroundColor: "rgba(0,0,0,.75)" }
};