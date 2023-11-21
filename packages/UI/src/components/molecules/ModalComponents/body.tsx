type BodyProps = {
  bodyContent?: object;
  bodyString?: JSX.Element;
};

const body: React.FC<BodyProps> = ({bodyContent, bodyString}) => {
  return (
    <div className="h-36 flex-col justify-start items-center gap-4 flex">
      {bodyString}
      {bodyContent}
    </div>
  );
};

export default body;
