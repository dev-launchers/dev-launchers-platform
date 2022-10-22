import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import {
  Container,
  FooterCard,
  HeaderCard,
  TextBold,
  Button,
  ButtonSection,
} from '../LongCard/StyledLongCard';

export interface Props {
  description: string;
  details: string;
}

export default function LongCard({ description, details }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Container>
        <HeaderCard>
          <h2 style={{padding: "1rem", margin: "0"}}>Description</h2>
        </HeaderCard>
        <FooterCard>
          {isExpanded ? (
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            >
              {details}
            </ReactMarkdown>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {details.slice(0, details.length / 2)}
            </ReactMarkdown>
          )}
        </FooterCard>
        <ButtonSection>
          <Button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Collapse Description' : 'Expand Description'}
          </Button>
        </ButtonSection>
      </Container>
    </>
  );
}
