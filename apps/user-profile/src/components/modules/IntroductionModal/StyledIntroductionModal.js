import { bubble } from "react-burger-menu";
import styled from "styled-components";

export const ModalContainer = styled.div`
 
  height: 100%;
  padding: 0 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ModalHeader = styled.div`
  width: 100%;
  

  


  ${'' /* Enter styling */}
`;

export const ModalBody = styled.div`



   

  ${'' /* Enter styling */}
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

// Modal set up
export const introductionModalStyle = {
  content: {
    position: "absolute",
    width: "480px",
    padding: "0px",
    height: "490px",
    top: "50%",
    left: "50%",
    overflow: "hidden",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001,
    borderRadius: "32px"
  },
  overlay: { zIndex: 1000, backgroundColor: "rgba(0,0,0,.75)" }
  
};

export const button = {
    content: {
    width: "100px",
    height:  "50px",
    backgroundColor: "blue"
    } 
};

export const Button = styled.div`
width: "100px";
height:  "50px";
backgroundColor: "blue";
color: "black";


${'' /* Enter styling */}
`;

/*export const Typography = styled.div`
  font-style: Nunito Sans;
  `*/

  
export const h3 = styled.div`
width: "65px";
height:  "50px";
backgroundColor: #0000FF;
color: "black";
`

export const div = styled.div`
width: "20px";
`