import { CardTagContainer, CardTagProps } from "./StyledCardTag";

interface Props extends CardTagProps {
  children: any;
}

export default function CardTag({ children, ...props }: Props) {
  return <CardTagContainer {...props}>{children}</CardTagContainer>;
}
