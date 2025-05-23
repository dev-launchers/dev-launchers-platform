import { Typography } from '@devlaunchers/components/components/atoms';

function BubbleList({ list, bubbleColorClass = 'bg-white' }) {
  return (
    <div className="flex gap-4 flex-wrap">
      {list.map((item) => {
        return item ? (
          <div
            className={`flex justify-center items-center h-10 px-4 rounded-3xl shadow-lg ${bubbleColorClass}`}
          >
            <Typography variant="secondary">{item}</Typography>
          </div>
        ) : null;
      })}
    </div>
  );
}

export default BubbleList;
