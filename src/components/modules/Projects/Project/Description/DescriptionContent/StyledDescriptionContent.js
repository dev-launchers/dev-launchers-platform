import styled from "styled-components";

export const Paragrapgh = styled.p`
  font-size: 1.125rem;
  line-height: 1.664375rem;
  margin-bottom: 1.5625rem;
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  grid-auto-flow: row;
  column-gap: 2.25rem;
  row-gap: 2.25rem;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const ImageHolder = styled.image`
  max-width: 100%;
  height: auto;
  width: 14rem;
  height: 11.25rem;
  border-radius: 10px;
  background-image: url("https://devlaunchersproduction.blob.core.windows.net/strapi/assets/photo_1487014679447_9f8336841d58_c912a4c559.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Conatiner = styled.div`
  width: 100%;
  max-width: 746px;
  padding: 1rem;
`;

export const Strip = styled.div`
  background-color: #494949;
  min-height: 15.3125rem;
  margin: 0 -1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
