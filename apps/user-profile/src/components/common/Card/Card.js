import Header from './Header';
function Card({ title, children }) {
  return (
    <div className="flex flex-col shadow-lg w-full h-full bg-white">
      <Header title={title} /> <div className="px-8 pb-10 pt-6">{children}</div>
    </div>
  );
}

export default Card;
