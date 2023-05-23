import { AppRoundedButton, RoundedButtonProps } from "./StyledRoundedButton";



export default function RoundedButton({ children, ...props }) {
  return <AppRoundedButton {...props}>{children}</AppRoundedButton>;
}
