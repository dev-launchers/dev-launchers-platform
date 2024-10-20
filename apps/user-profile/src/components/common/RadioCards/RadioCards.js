import { Typography } from '@devlaunchers/components/components/atoms';

export default function RadioCards({ cards = config, className }) {
  return (
    <div className={`flex gap-6 ${className}`}>
      {cards.cards.map((card) => {
        return (
          <label className="flex flex-col gap-6 justify-center w-56 max-h-52 pb-9 pt-10 px-4 bg-white rounded-lg border-2   border-grayscale-100 shadow-lg relative">
            <input
              type="radio"
              checked={card.checked}
              name={cards.name}
              value={card.value}
              onChange={card.onChange}
              className="absolute right-4 top-4 w-6 h-6 rounded-full border-4 checked:bg-blue-500 border-grayscale-100 appearance-none "
            />
            <div className="flex justify-center">
              <img className="h-8" src={card?.img ?? 'test'} />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <Typography type="p">
                <strong>{card.title}</strong>
              </Typography>
              <Typography type="pSmall" className="text-grayscale-500">
                {card.subtitle}
              </Typography>
            </div>
          </label>
        );
      })}
    </div>
  );
}

const config = {
  name: 'role',
  cards: [
    {
      img: null,
      title: 'DEVELOPER',
      subtitle: `Develop and maintain databases`,
      value: 'developer',
      checked: true,
      onChange: () => {
        console.log("I've been checked");
      },
    },
    {
      img: null,
      title: 'UX/UI',
      subtitle: `Research and design interfaces`,
      value: 'designer',
      checked: true,
      onChange: () => {
        console.log("I've been checked");
      },
    },
    {
      img: null,
      title: 'OTHER',
      subtitle: `Manage product teams and cross communication`,
      value: 'other',
      checked: true,
      onChange: () => {
        console.log("I've been checked");
      },
    },
  ],
};
