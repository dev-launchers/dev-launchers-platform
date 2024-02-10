import Section from "../Section";
import DescriptionContent from "./DescriptionContent/DescriptionContent";

const Description = ({description, images}) => (
  <Section
    bgColor="#3C3B3C"
    Title="Description"
    Content={<DescriptionContent data={{ description, images }}/>}
    contentStyle={{ paddingBottom: 0 }}
  />
);

export default Description;
