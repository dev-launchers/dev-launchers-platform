import { AppRoundedButton, RoundedButtonProps } from "./StyledRoundedButton";

interface Props extends RoundedButtonProps {
  children: any;
}

export default function RoundedButton({ children, ...props }: Props) {
  return <AppRoundedButton {...props}>{children}</AppRoundedButton>;
}
