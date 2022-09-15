import Link from "next/link";
import { useState } from "react";
import { Opportunity } from "@devlaunchers/models";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import {
  ApplyButton,
  Button,
  ButtonsSection,
  CommitmentSection,
  Container,
  DescriptionSection,
  ExpectationsList,
  ExpectationsListItem,
  ExpectationsSection,
  Icon,
  LikeButton,
  OpportunityDetailsContainer,
  OpportunityInfoContainer,
  PositionDetailsMobile,
  Section,
  TagsList,
  TagsListItem,
  TagsSection,
  TitleSection,
  CommitmentContainer,
} from "./StyledPositionCard";

interface Props {
  projectSlug: string;
  position: Opportunity;
}

export default function PositionCard({ position, projectSlug }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <Container>
      <Section Mobile={false} color={"Dark"}>
        <LikeButton onClick={() => setLiked((prev) => !prev)}>
          <Icon
            Active={liked}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </Icon>
        </LikeButton>
        <OpportunityInfoContainer>
          <TitleSection>
            <h2>{position.title}</h2>
          </TitleSection>
          <PositionDetailsMobile>
            <p>{position.level}</p>
            <p>{position.commitmentHoursPerWeek}</p>
          </PositionDetailsMobile>
          <ButtonsSection Mobile={true}>
            <Button
              color="SonicSilver"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {`${isExpanded ? "Collapse Details" : "Position details"}`}
            </Button>
            <Link
              href={`/${projectSlug}/apply?position=${position.title}`}
              passHref
            >
              <Button as="a" color="DarkElectricBlue">
                Apply
              </Button>
            </Link>
          </ButtonsSection>
        </OpportunityInfoContainer>
      </Section>

      <Section Mobile={true} color={"Light"}>
        <DescriptionSection Mobile={false} Expanded={isExpanded}>
          <h3>Position Description</h3>
          {isExpanded ? (
            <ReactMarkdown
              components={{
                // Map `h1` (`# heading`) to use `h2`s.
                h1: "h4",
                // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
              }}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            >
              {position.description}
            </ReactMarkdown>
          ) : (
            <ReactMarkdown
              components={{
                // Map `h1` (`# heading`) to use `h2`s.
                h1: "h4",
                // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
              }}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {position.description.slice(0, position.description.length / 2)}
            </ReactMarkdown>
          )}
          {/* <p>
            {isExpanded
              ? position.description
              : `${position.description.substring(0, 320)}...`}
          </p> */}
        </DescriptionSection>
      </Section>

      <Section Mobile={true} color={"Light"}>
        <OpportunityDetailsContainer>
          <TagsSection>
            <h4>Position Tags</h4>
            <TagsList>
              <TagsListItem color="Dark">{position.level}</TagsListItem>
              {position?.skills?.map((skill, index) => (
                <TagsListItem color="Light" key={index}>
                  {skill?.interest}
                </TagsListItem>
              ))}
            </TagsList>
          </TagsSection>
        </OpportunityDetailsContainer>
      </Section>

      <Section Mobile={true} color={"Light"} Expanded={isExpanded}>
        <CommitmentContainer>
          <OpportunityDetailsContainer>
            <div>
              <CommitmentSection>
                <h4>Time Commitment</h4>
                <div>
                  <p>Min/Max</p>
                  <p>{position.commitmentHoursPerWeek}</p>
                </div>
              </CommitmentSection>
              <ExpectationsSection Expanded={isExpanded}>
                <h4>Expectations</h4>
                <ExpectationsList>
                  {position.expectations.map((item, index) => (
                    <ExpectationsListItem key={index}>
                      {item.expectation}
                    </ExpectationsListItem>
                  ))}
                </ExpectationsList>
              </ExpectationsSection>
            </div>
          </OpportunityDetailsContainer>
          <DescriptionSection Mobile={true} Expanded={isExpanded}>
            <h3>Position Description</h3>
            <p>
              {isExpanded
                ? position.description
                : `${position.description.substring(0, 320)}...`}
            </p>
          </DescriptionSection>
          <ButtonsSection expanded={isExpanded} Mobile={false}>
            <Button
              color="SonicSilver"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {`${isExpanded ? "Collapse Description" : "Expand Description"}`}
            </Button>
            <Link
              href={`/${projectSlug}/apply?position=${position.title}`}
              passHref
            >
              <ApplyButton color="DarkElectricBlue">Apply</ApplyButton>
            </Link>
          </ButtonsSection>
        </CommitmentContainer>
      </Section>
    </Container>
  );
}
