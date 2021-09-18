import Section from "../Section";
import DescriptionContent from "./DescriptionContent/DescriptionContent";

const Description = ({ descriptionData, images }) => (
  <Section
    bgColor="#3C3B3C"
    Title="Description"
    Content={
      <DescriptionContent descriptionData={descriptionData} images={images} />
    }
    contentStyle={{ paddingBottom: 0 }}
  />
);

export default Description;
