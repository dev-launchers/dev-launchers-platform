import styled from "styled-components";

export const QuickLinkLeft = styled.div`
  width: 30rem;
  text-align: left;
  font-size: 1.3rem;
  padding-left: 3rem;
  padding-top: 8rem;
  strong {
    padding-left: 1rem;
  }
  p {
    line-height: 1.5;
  }
  a {
    text-decoration: underline;
    font-size: 1.2rem;
  }

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 100%;
  padding-bottom: 5rem;
`;

export const QuickLinkTop = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #f0edee;
  text-align: left;
  font-size: 1.2rem;
  text-decoration: underline;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  strong {
    padding-left: 1rem;
  }
  a {
    text-decoration: underline;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const BackButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 2rem 0 3rem;

  @media (min-width: 1280px) {
    margin-left: -22rem;
  }
`;

export const Dropdown = styled.select`
  width: 18rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.25rem;
  background: black;
  color: white;
  border-radius: 8px;
  padding: 0.7rem 0.5rem;

  @media (min-width: 667px) {
    padding: 0.4rem 0.5rem;
  }

  @media (min-width: 810px) {
    display: none;
  }
`;

export const HeadWapper = styled.div`
  padding: 2rem 1rem 0 1rem;

  @media (min-width: 1280px) {
    padding: 0 1rem;
  }
`;

export const Headline = styled.div`
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 68px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1C1C1C;
`;

export const StyledRanbow = styled.div`
  margin: 1.3rem auto 0 auto;
  max-width: 30rem;
  height: 5px;
`;

export const QuickLinkMiddle = styled.div`
  display: flex;
  background-color: #f0edee;
  text-align: left;
  font-size: 1.3rem;
  margin: 4rem 0 0;
  padding: 2rem 2rem;
  strong {
    padding-left: 1rem;
  }
  p {
    line-height: 1.5;
    padding-left: 5rem;
    width: 49%;
  }
  a {
    text-decoration: underline;
    font-size: 1.2rem;
  }

  @media (min-width: 1280px) {
    display: none;
  }

  @media (max-width: 810px) {
    display: none;
  }
`;

export const MarkdownWrapper = styled.div`
  padding: 0 3rem;
  text-align: left;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 28px;

  h2 {
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    line-height: 68px;
    letter-spacing: -0.02em;
    color: #1C1C1C;
    margin: 4rem auto 0;
  }

  h3 {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 38px;
    color: #1C1C1C;
    margin: 2rem auto 0.5rem;
  }

  ul {
    margin-top: 0.5rem;
  }

  table {
    margin-top: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ol {
    margin-top: 0rem;
  }

  table {
    box-shadow: 0px 4px 6px 3px rgba(51, 51, 51, 0.1);
    border-radius: 1rem;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1rem;
    width: 80%;
    margin: 2rem;
  }
 
  td, th {
    border-left: 1px solid #cbcbcb;
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: .5em 1em;
  }
 
  thead {
    background-color: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
  }
 
 td {
    background-color: transparent;
  }

  td, th {
    border-width: 0 0 1px 0;
    border-bottom: 1px solid #cbcbcb;
  }
 
  tbody>tr:last-child>td {
    border-bottom-width: 0;
  }
`;