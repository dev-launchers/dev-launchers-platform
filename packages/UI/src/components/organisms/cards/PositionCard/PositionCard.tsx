import { useState, useRef, useLayoutEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Box from '../../../atoms/Box';
import Button from '../../../atoms/Button';
import Typography from '../../../atoms/Typography';
import { TagsContainer, CardDescription } from '../StyledCommonComponents';
import { Container, Header, Actions, Details } from './Styled.PositionCard';
import type { PositionCardProps } from '.';

const PositionCard = ({
  interaction,
  status,
  buttonStyle,
  minimal,
  content,
}: PositionCardProps) => {
  const [open, setOpen] = useState(status);
  const [initialHeight, setInitialHeight] = useState(0);

  const thumbnail = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const tags = useRef<HTMLDivElement>(null);
  const description = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const containerHeight = container?.current?.clientHeight as number;
    const thumbnailHeight = thumbnail?.current?.clientHeight as number;
    const descriptionHeight = description?.current?.clientHeight as number;
    const tagsHeight = tags?.current?.clientHeight as number;
    if (!container.current) return;
    if (!initialHeight) {
      container.current.style.height = containerHeight + 'px';
      setInitialHeight(containerHeight);
    }
    container.current.style.height = open
      ? initialHeight + 'px'
      : thumbnailHeight +
        (minimal ? 0 : tagsHeight + descriptionHeight / 2) +
        'px';
  }, [open, initialHeight]);

  return (
    <Container>
      <Container ref={container}>
        <Header>
          <Box
            ref={thumbnail}
            style={{
              background: 'black',
              color: 'white',
              borderRadius: '8px',
              position: 'relative',
              height: 'fit-content',
              flexShrink: 0,
            }}
            padding="32px 64px 64px 32px"
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
                  save
                </Button>
                {interaction !== 'save-only' && (
                  <>
                    <Button buttonSize="standard" buttonType="alternative">
                      like
                    </Button>
                    <Button buttonSize="standard" buttonType="alternative">
                      share
                    </Button>
                  </>
                )}
              </Box>
            )}
          </Box>
          <div ref={description}>
            <CardDescription
              title=""
              subtitle="about the role"
              body={content.role}
            />
          </div>
          <div ref={tags}>
            <TagsContainer list={content.tags} />
          </div>
        </Header>
        <Details>
          <Box gap="32px">
            <Box flexDirection="column" gap="16px">
              <Typography type="h5">why should you join?</Typography>
              <ul style={{ listStylePosition: 'outside' }}>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                >
                  {content.benefits}
                </ReactMarkdown>
              </ul>
            </Box>
            <Box flexDirection="column" gap="16px">
              <Typography type="h5">expectations</Typography>
              <ul style={{ listStylePosition: 'outside' }}>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                >
                  {content.expectations}
                </ReactMarkdown>
              </ul>
            </Box>
          </Box>
        </Details>
      </Container>
      <Actions>
        <Box width="100%" padding="0px 24px" justifyContent="flex-end">
          <Box gap="16px">
            <Button
              onClick={() => setOpen((open) => !open)}
              buttonSize="standard"
              buttonType={buttonStyle === 'b' ? 'secondary' : 'alternative'}
            >
              {open ? 'collapse details' : 'more details'}
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
