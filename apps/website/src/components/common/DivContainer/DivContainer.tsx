type Direction = 'vertical' | 'horizontal' | 'wrap';

interface DivContainerProps {
  direction: Direction;
  reverse: boolean;
  children: React.ReactNode;
}

const DivContainer: React.FC<DivContainerProps> = ({
  direction,
  reverse,
  children,
}) => {
  const flexClassName = {
    vertical: reverse ? 'flex-col-reverse' : 'flex-col',
    horizontal: reverse ? 'flex-row-reverse' : 'flex-row',
    wrap: reverse ? 'flex-wrap-reverse' : 'flex-wrap',
  }[direction];
  return <div className={`flex ${flexClassName}`}>{children}</div>;
};

export default DivContainer;
