import { CardTagContainer } from "./StyledCardTag";


export default function CardTag({ children, ...props }) {
  return <CardTagContainer {...props}>{children}</CardTagContainer>;
}
