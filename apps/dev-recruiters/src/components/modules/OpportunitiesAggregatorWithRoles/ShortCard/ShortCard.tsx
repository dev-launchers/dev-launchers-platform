import { Project } from '@devlaunchers/models/project';
import { Theme } from '../../../../styles/theme';
import Link from 'next/link';
import { Id } from 'react-toastify';
import { useTheme } from 'styled-components';

import {
  Container,
  CardHeader,
  CardBottom,
  Title,
  Description,
  Content,
  PositionContent,
  Input,
  Category,
  CategoryContainer,
  ButtonsContainer,
  CategoriesContainer,
} from "./StyledShortCard";

const ShortCard = ({
  id,
  title,
  isPlatform,
  commitmentLevel,
  opportunities,
  catchPhrase,
  slug,
}: Pick<
  Project,
  | "id"
  | "title"
  | "isPlatform"
  | "commitmentLevel"
  | "opportunities"
  | "catchPhrase"
  | "slug"
>) => {
  const theme = useTheme();
  const opp =
    opportunities.length > 3 ? opportunities.slice(-3) : opportunities;
  return (
    <>
      <Container key={id}>
        <CardHeader>
          <Title>{title}</Title>
          <Content style={{ color: theme.colors.Black, fontSize: "1rem" }}>
            {isPlatform ? "Platform" : "Independent"} Product
          </Content>
          <Description>{catchPhrase}</Description>
        </CardHeader>
        <CardBottom>
          <CategoriesContainer>
            <CategoryContainer>
              <Category>Position Available</Category>
              <ul>
                {opp.map((position) => (
                  <Content as={PositionContent} key={position.id}>
                    <span>{position.title}</span>
                  </Content>
                ))}
              </ul>
            </CategoryContainer>
            <CategoryContainer>
              <Category>Time Commitment</Category>
              <Content>{commitmentLevel} hrs</Content>
            </CategoryContainer>
          </CategoriesContainer>
          <ButtonsContainer>
            <Link href={`join/${slug}`} passHref>
              <Input>Project Details</Input>
            </Link>
          </ButtonsContainer>
        </CardBottom>
      </Container>
    </>
  );
};
export default ShortCard;
