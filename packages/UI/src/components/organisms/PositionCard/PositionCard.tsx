import { useState, useRef, useLayoutEffect } from 'react';
import Share from '../../../assets/icons/Link';
import bookmark from '../../../assets/icons/rawSvg/bookmark.svg';
import heart from '../../../assets/icons/rawSvg/heart.svg';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Tags from '../../atoms/Tags';
import Typography from '../../atoms/Typography';
import { Container, Actions, Details } from './Styled.PositionCard';
import type { PositionCardProps } from '.';

const content = {
  title: 'Web Developer',
  level: 'junior',
  timeCommittment: '5 hrs per week',
  role: ' We are looking for a junior web developer who is willing and eagerto learn various web technologies mainly in the field of React while working within a team of ambitious developers! Our goal is to designa platform that brings people of from a diverse range of specialties together to collaboratively design the best possible software solutions. This project provides a space for people to establish and develop their ideas into working projects with input from others.',
  tags: ['unity', 'react', 'social', 'agile', 'digital media'],
  benefits:
    " Be proficient in React.js and/or Next.js (strongly prefer both or atleast Next) Experience with GitHub and version control using Git Backend experience preferred, especially using a CMS Be able tocommit at least 5 hours a week Self-sufficient learner Communicate with us on a weekly basis to see the progress you've been making",
  expecations:
    "  Be proficient in React.js and/or Next.js (strongly prefer both or at least Next) Experience with GitHub and version control using Git Backend experience preferred, especially using a CMS Be able to commit at least 5 hours a week Self-sufficient learner Communicate with us on a weekly basis to see the progress you've been making",
};

const TagsContainer = ({ list }: string[]) => {
  return (
    <Box flexDirection="column" gap="16px" padding="32px 32px 16px 8px">
      <Typography type="h5">Position tags</Typography>
      <Box flexWrap="wrap" gap="8px">
        {list.map((tag, i) => (
          <Tags
            key={`tag-${i}`}
            bgColor="GREYSCALE_BLACK"
            onClose={() => {}}
            txtColor="GREYSCALE_WHITE"
          >
            {tag}
          </Tags>
        ))}
      </Box>
    </Box>
  );
};

const CardDescription = ({ title, subtitle, body }) => {
  return (
    <Box
      padding="32px 8px 16px"
      flexDirection="column"
      gap="16px"
      maxWidth="450px"
    >
      <Typography type="h3">{title}</Typography>
      <Typography type="h5">{subtitle}</Typography>
      <Typography type="p">{body}</Typography>
    </Box>
  );
};

const PositionCard = ({
  interaction,
  status,
  buttonStyle,
  style,
}: PositionCardProps) => {
  const [open, setOpen] = useState(status);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const height = ref?.current?.clientHeight;
    if (!ref) return;
    ref.current.style.height = height + 'px';
    setHeight((prev) => height || 0);
    console.log(height);
  }, [height]);

  return (
    <Container>
      <Box gap="1rem">
        <Box
          style={{
            background: 'black',
            color: 'white',
            borderRadius: '8px',
            position: 'relative',
            flexShrink: 0,
          }}
          padding="32px 64px 32px 32px"
          flexDirection="column"
          justifyContent="center"
          gap="16px"
          width="360px"
        >
          <Box flexDirection="column" padding="8px 16px" gap="8px">
            <Typography type="h3">{content.title}</Typography>
            <Typography type="h5">{content.level}</Typography>
          </Box>
          <hr />
          <Box flexDirection="column" padding="8px 16px" gap="8px">
            <Typography type="h5">time committment</Typography>
            <Typography type="pSmall">{content.timeCommittment}</Typography>
          </Box>
          {interaction !== 'none' && (
            <Box
              width={interaction === 'all-h' ? '100%' : 'auto'}
              gap={interaction === 'all-h' ? 'unset' : '16px'}
              justifyContent="space-between"
              flexDirection={interaction === 'all-v' ? 'column' : 'row'}
              style={{
                height: interaction === 'all-v' ? '100%' : 'auto',
                position: 'absolute',
                [interaction === 'all-h' ? 'left' : 'right']: 0,
                [interaction !== 'all-h' ? 'top' : 'bottom']: 0,
              }}
            >
              <Button buttonSize="standard" buttonType="alternative">
                <img src={bookmark} /> save
              </Button>
              {interaction !== 'save-only' && (
                <>
                  <Button buttonSize="standard" buttonType="alternative">
                    <img src={heart} /> like
                  </Button>
                  <Button buttonSize="standard" buttonType="alternative">
                    <Share /> share
                  </Button>
                </>
              )}
            </Box>
          )}
        </Box>
        <CardDescription />
        <Box>
          <TagsContainer list={content.tags} />
        </Box>
      </Box>
      <Details
        ref={ref}
        open={open}
        // css={{ height }}
        padding="0 48px"
        gap="24px"
      >
        <Box flexDirection="column" gap="16px">
          <Typography type="h5">why should you join?</Typography>
          <Typography type="p">{content.benefits}</Typography>
        </Box>
        <Box flexDirection="column" gap="16px">
          <Typography type="h5">expectations</Typography>
          <Typography type="p">{content.expecations}</Typography>
        </Box>
      </Details>
      <Actions>
        <Box width="100%" padding="0px 24px" justifyContent="flex-end">
          <Box gap="16px">
            <Button
              onClick={() =>
                setOpen((open) => (open === 'open' ? 'closed' : 'open'))
              }
              buttonSize="standard"
              buttonType={buttonStyle === 'b' ? 'secondary' : 'alternative'}
            >
              {open === 'open' ? 'collapse details' : 'more details'}
            </Button>
            <Button
              buttonSize="standard"
              buttonType={buttonStyle === 'b' ? 'primary' : 'alternative'}
            >
              apply
            </Button>
          </Box>
        </Box>
      </Actions>
    </Container>
  );
};

export default PositionCard;
