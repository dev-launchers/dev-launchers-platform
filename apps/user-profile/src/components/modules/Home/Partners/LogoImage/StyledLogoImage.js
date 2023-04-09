import styled from "styled-components";

export const PartnerEntryImage = styled.img`
  margin: 5%;
  display: inline;
`;

export const PartnerEntry = styled.div`
  margin: 5%;
  width: 40%;
  display: inline;
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`;
