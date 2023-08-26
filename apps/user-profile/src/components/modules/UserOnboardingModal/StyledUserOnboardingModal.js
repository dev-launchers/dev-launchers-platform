import styled from "styled-components";
import CloseIcon from "../../../images/Onboarding/Modal/close-icon.svg";

export const CloseModalIcon = () => {
	return <img src={CloseIcon} />;
};
export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;

	.modal-close-button{
		float: right;
		margin: 15px 10px;
		background-color: black;
		border: none;
	}
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
  margin: 15px;
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
    width: "auto",
    padding: "0px",
    height: "auto",
    top: "50%",
    left: "50%",
    overflow: "hidden",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
		borderRadius: "32px",
    transform: "translate(-50%, -50%)",
    zIndex: 1001
  },
  overlay: { zIndex: 1000, backgroundColor: "rgba(0,0,0,.75)" }
};
