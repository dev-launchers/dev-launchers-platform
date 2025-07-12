import ReactMarkdown from 'react-markdown';
import { atoms } from '@devlaunchers/components/components';
import {
  FlexSection,
  ImageHolder,
  Conatiner,
  Strip,
} from './StyledDescriptionContent';

const DescriptionContent = ({ data }) => {
  const { description, images } = data;
  return (
    <>
      <atoms.Typography
        as="div"
        variant="secondary"
        size="body_lg"
        style={{ paddingBottom: '1.5625rem' }}
      >
        <ReactMarkdown>{description}</ReactMarkdown>
      </atoms.Typography>
      {!!images[0]?.image?.data?.length && (
        <Strip>
          <Conatiner>
            <FlexSection>
              {images[0].image.data.map(({ attributes, id }) => (
                <ImageHolder key={id} src={attributes.url} />
              ))}
            </FlexSection>
          </Conatiner>
        </Strip>
      )}
    </>
  );
};

export default DescriptionContent;
