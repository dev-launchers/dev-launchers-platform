import { useState } from 'react';
import Box from '../../../atoms/Box';
import Button from '../../../atoms/Button';
import Typography from '../../../atoms/Typography';
import LikeButton from '../../../molecules/InteractionButtons/LikeButton';
import SaveButton from '../../../molecules/InteractionButtons/SaveButton';
import ShareButton from '../../../molecules/InteractionButtons/ShareButton';
import {
  TagsContainer,
  CardDescription,
  ExpandableBlurb,
} from '../StyledCommonComponents';

import {
  Container,
  Header,
  Thumbnail,
  Actions,
  Details,
} from './Styled.PositionCard';
import type { PositionCardProps } from '.';

const MinimalPositionCard = ({
  content,
  handleMoreDetails,
  handleApply,
  buttonStyle,
}: Pick<
  PositionCardProps,
  'content' | 'handleApply' | 'buttonStyle' | 'handleMoreDetails'
>) => {
  return (
    <Container minimal>
      <Thumbnail minimal>
        <Box flexDirection="column" gap="8px" width="max-content">
          <Typography type="h3">{content.title}</Typography>
          <Typography type="h5">{content.level}</Typography>
          <hr />
        </Box>
        <Box flexDirection="column" gap="8px" width="fit-content">
          <Typography type="h5">time committment</Typography>
          <Typography type="pSmall">{content.timeCommittment}</Typography>
        </Box>
      </Thumbnail>
      <Actions>
        <Box width="100%" padding="0px 24px" justifyContent="flex-end">
          <Box gap="16px">
            <Button
              onClick={handleMoreDetails}
              buttonSize="standard"
              buttonType={buttonStyle === 'b' ? 'secondary' : 'alternative'}
            >
              more details
            </Button>
            <Button
              onClick={handleApply}
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

const PositionCard = ({
  interaction,
  status,
  buttonStyle,
  minimal,
  content,
  handleMoreDetails,
  handleApply,
}: PositionCardProps) => {
  const [expanded, setExpanded] = useState(status);

  const isMobile = window.innerWidth < 640;

  return minimal ? (
    <MinimalPositionCard
      content={content}
      handleMoreDetails={handleMoreDetails}
      handleApply={handleApply}
      buttonStyle={buttonStyle}
    />
  ) : (
    <Container>
      <Header>
        <Thumbnail imgUrl={content.imgUrl}>
          <Box flexDirection="column" gap="8px" width="max-content">
            <Typography type="h3">{content.title}</Typography>
            <Typography type="h5">{content.level}</Typography>
            <hr />
          </Box>
          <Box flexDirection="column" gap="8px" width="fit-content">
            <Typography type="h5">time committment</Typography>
            <Typography type="pSmall">{content.timeCommittment}</Typography>
          </Box>
          {interaction && (
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
              <SaveButton text="save" />
              {interaction !== 'save-only' && (
                <>
                  <LikeButton text="like" />
                  <ShareButton text="share" />
                </>
              )}
            </Box>
          )}
        </Thumbnail>
        <div>
          <CardDescription
            title=""
            subtitle="about the role"
            body={
              isMobile && !expanded ? content.role.slice(0, 250) : content.role
            }
          />
        </div>
        <div>
          <TagsContainer title="Position Tags" list={content.tags} />
        </div>
      </Header>
      <ExpandableBlurb>
        {expanded ? (
          <Details>
            <Box flexDirection="column" gap="16px">
              <Typography type="h5">why should you join?</Typography>
              <ul css={{ listStylePosition: 'inside' }}>
                {content.expectations.map((el1, i1) => (
                  <Typography type="p" key={i1}>
                    <li>{el1}</li>
                  </Typography>
                ))}
              </ul>
            </Box>
            <Box flexDirection="column" gap="16px">
              <Typography type="h5">expectations</Typography>
              <ul css={{ listStylePosition: 'inside' }}>
                {content.expectations.map((el2, i2) => (
                  <Typography type="p" key={i2}>
                    <li>{el2}</li>
                  </Typography>
                ))}
              </ul>
            </Box>
          </Details>
        ) : null}
      </ExpandableBlurb>
      <Actions>
        <Box width="100%" padding="0px 24px" justifyContent="flex-end">
          <Box gap="16px">
            <Button
              onClick={() =>
                minimal ? handleMoreDetails() : setExpanded((open) => !open)
              }
              buttonSize="standard"
              buttonType={buttonStyle === 'b' ? 'secondary' : 'alternative'}
            >
              {expanded ? 'collapse details' : 'more details'}
            </Button>
            <Button
              onClick={handleApply}
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
