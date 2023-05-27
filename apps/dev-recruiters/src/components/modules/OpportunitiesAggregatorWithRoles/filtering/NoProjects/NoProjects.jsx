import { NoResult, NoResultContent, NoResultTextBig, NoResultTextSmall } from "./StyledNoProjects";

export default function NoProjects() {
  return (
    <NoResult>
      <NoResultContent>
        <NoResultTextBig>No Results Found</NoResultTextBig>
        <NoResultTextSmall>Try removing search filters</NoResultTextSmall>
      </NoResultContent>
    </NoResult>
  );
}
