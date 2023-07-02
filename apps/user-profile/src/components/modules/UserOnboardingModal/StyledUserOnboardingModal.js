import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #000000;
  color: #F0EDEE;
  font-weight: 400;

  img {
    margin-right: 1rem;
    margin-left: 1rem;
  }
  ${'' /* Enter styling */}
`;

export const ModalBody = styled.div`
  padding: 0 115px;
  display: flex;
  flex-direction: column;
  align-items: center;

h2 {
  color: #212429;

}

  p {
    color: #7B7B7B;
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

export const StepBody = styled.div`
  text-align:center;
`

export const Button = styled.button`
  margin:0 20px;
  cursor:pointer;
  outline:none;
  background:#fff;
  border:1px solid #000;
  padding:6px 12px;
`