import {
  Paragrapgh,
  GridSection,
  ImageHolder,
  Conatiner,
  Strip,
} from "./StyledDescriptionContent";

const DescriptionContent = () => (
  <>
    <Paragrapgh style={{ marginBottom: "1.5625rem" }}>
      Play a role in building the site you are currently on!
    </Paragrapgh>
    <Paragrapgh style={{ marginBottom: "3.125rem" }}>
      By joining this project you will become part of a large, technically
      advanced team working toward huge impact. Our team works with modern web
      technologies and uses widely accepted standard practices in agile software
      development.
    </Paragrapgh>

    <Paragrapgh style={{ margin: " 3.375rem 0 3.125rem 0" }}>
      This project is currently split into two sub-teams: the front end and the
      back end. We do weekly sync-ups where the entire group gets together to be
      briefed on the overall status of the project and give input on product
      direction, then sub-team focus sessions are held to give hands on support
      to individual team members and small groups. The leaders of this project,
      along with all of our members ...
    </Paragrapgh>
    <Paragrapgh style={{ marginBottom: "3.125rem" }}>
      This project is currently split into two sub-teams: the front end and the
      back end. We do weekly sync-ups where the entire group gets together to be
      briefed on the overall status of the project ...
    </Paragrapgh>

    <Strip>
      <Conatiner>
        <GridSection>
          <ImageHolder />
          <ImageHolder />
          <ImageHolder />
        </GridSection>
      </Conatiner>
    </Strip>
  </>
);

export default DescriptionContent;
