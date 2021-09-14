import Section from "../Section";
import DescriptionContent from "./DescriptionContent/DescriptionContent";

const Description = () => (
  <Section
    bgColor="#3C3B3C"
    Title="Description"
    Content={<DescriptionContent />}
    contentStyle={{ paddingBottom: 0 }}
  />
);

export default Description;
