import { Theme } from "../../../styles/theme";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Button, Container, Content } from "./StyledCollapsible";

interface Props {
  title: string;
  children: React.ReactElement | React.ReactElement[];
  transparent?: boolean;
  bgButton?: keyof Theme["colors"];
  bgContent?: keyof Theme["colors"];
}

export default function Collapsible({
  title,
  children,
  transparent = false,
  bgButton,
  bgContent,
}: Props) {
  const [collapsed, setCollapsed] = useState(true);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [elemHeight, setElemHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setElemHeight(ref.current.scrollHeight);
    }
  }, []);

  return (
    <Container>
      <Button
        background={bgButton}
        transparent={transparent}
        collapsed={collapsed}
        onClick={() => setCollapsed((prev) => !prev)}
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>
      <Content
        background={bgContent}
        transparent={transparent}
        ref={ref}
        collapsed={collapsed}
        elemHeight={elemHeight}
      >
        {children}
      </Content>
    </Container>
  );
}
