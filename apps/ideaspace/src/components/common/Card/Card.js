import { StyledCard } from "./StyledCard";

export const Card = ({ children, className }) => {
  return (
    <StyledCard className={className} type="light">
      {children}
    </StyledCard>
  )
}