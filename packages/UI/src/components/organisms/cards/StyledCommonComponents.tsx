import { motion, LazyMotion, domAnimation } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import Box from '../../atoms/Box';
import Tags from '../../atoms/Tags';
import Typography from '../../atoms/Typography';

interface TagsContainerProps {
  list: string[];
  title?: string;
}

export const TagsContainer = ({ list, title }: TagsContainerProps) => {
  return (
    <Box flexDirection="column" gap="16px" maxWidth="282px">
      <Typography type="subtitle">{title}</Typography>
      <Box flexWrap="wrap" gap="8px">
        {list.map((tag: string) => (
          <Tags key={tag} bgColor="GREYSCALE_BLACK" txtColor="GREYSCALE_WHITE">
            {tag}
          </Tags>
        ))}
      </Box>
    </Box>
  );
};

interface CardDescriptionProps {
  title?: string;
  subtitle?: string;
  body?: string;
}

export const CardDescription = ({
  title,
  subtitle,
  body,
}: CardDescriptionProps) => {
  return (
    <Box flexDirection="column" gap="16px" maxWidth="450px">
      {title && <Typography type="h3">{title}</Typography>}
      <Typography type="subtitle">{subtitle}</Typography>
      <Typography type="p">{body}</Typography>
    </Box>
  );
};

export const ExpandableBlurb = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [height, setHeight] = useState(0);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!content.current) return;
    const height = content.current.clientHeight;
    setHeight(height);
  });

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        animate={{ height }}
        transition={{ duration: 0.4 }}
        style={{ overflow: 'hidden' }}
      >
        <motion.div ref={content}>{children}</motion.div>
      </motion.div>
    </LazyMotion>
  );
};
