import ReactMarkdown from "react-markdown";
import {
  Paragrapgh,
  FlexSection,
  ImageHolder,
  Conatiner,
  Strip,
} from "./StyledDescriptionContent";

const DescriptionContent = ({ data }) => {
  const { description, images } = data;
  return (
    <>
      <Paragrapgh style={{ paddingBottom: "1.5625rem" }}>
        {" "}
        {/* eslint-disable-next-line react/no-children-prop */}
        <ReactMarkdown children={description} />
      </Paragrapgh>
      {!!images[0].image.data.length && (
        <Strip>
          <Conatiner>
            <FlexSection>
              {images[0].image.data.map(({attributes, id}) => (
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
