//need to figure out how im supposed to convert this

import styled from "styled-components";

export const Slideshow = styled.section`
  width: 80%;
  margin: auto;
  padding: 8px;
  background: #3a7ca5;
`;

export const SlideHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 8px;
`;

export const LeftSlide = styled.section`
  width: 300px;
  height: 300px;
  margin: auto 10px;
`;

export const RightSlide = styled.section`
  width: 300px;
  height: 300px;
`;

export const SlideThumbnail = styled.div`
  width: 100%;
  height: 100%;
  //background: #ff7f0e;
  background-size: cover;
  background-position: center;
  //border-radius: 6px;
  //box-shadow: 5px 5px 6px #ff7f0e;
`;

//time to replay flexbox zombies
export const SlideshowController = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    padding: 10px;
    border-radius: 6%;
    width: 50px;
    border: none;
    color: #f5f5f5;
    cursor: pointer;
    text-align: center;
    box-shadow: 3px 3px 5px #551d8283;
    user-select: none;
  }
  & span:hover {
    color: #81c3d7;
    background: #ff7f0e;
    text-shadow: 3px 3px 5px #ffab00;
  }
  & span:active {
    color: #ff7f0e;
    text-shadow: 3px 3px 5px #ffab00;
    background: #81c3d7;
  }
`;

{
  /*
div.slideshow-controller = styled.span {
  padding: 10px;
  width: 100px;
  border: none;
  background: #541d82;
  color: #f5f5f5;
  cursor: pointer;
  text-align: center;
  box-shadow: 3px 3px 5px #551d8283;
  user-select: none;
}
}
*/
}
