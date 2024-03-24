import styled from "styled-components";

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
    borderRadius: "10px",
    border: "0"
  },
  overlay: { zIndex: 1000, backgroundColor: "rgba(0,0,0,.75)" }
};

export const ModalHeader = styled.div`
  display: flex;
  background-color: black;
  color: white;
  padding: 0px 10px;

  .navbar-title {
    margin-right: 250px;
  }

  .rocket-img {
    height: 34px;
    width: 40px;
    margin: auto 10px auto auto;
  }

  .close-button {
    margin: auto;
  }
`

export const ModalBody = styled.div`
  height: 400px;
`