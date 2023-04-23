import styled from "styled-components";

export const UploadImg = styled.img`
    width: 210px;
    height: 162px;
    cursor: pointer;
    display: block;
    outline: #9cbed2 solid 3px;
`;

export const CropWrapper = styled.div`
  position: relative;
  background-color: #000000;
  cursor: pointer;
  outline: #9cbed2 solid 3px;

  &:hover .Cropped {
    opacity: 0.7;
  }

  &:hover .Camera {
    opacity: 1;
  }
`;

export const CropImg = styled.img`
  width: 210px;
  height: 162px;
  display: block;
`;

export const HoverImg = styled.img`
  width: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
`;