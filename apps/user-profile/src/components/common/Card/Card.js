import Header from './Header';
function Card({ title, children, onEdit }) {
  return (
    <div className="flex flex-col shadow-lg w-full h-full bg-white">
      <Header title={title} onEdit={onEdit} /> <div className="px-8 pb-10 pt-6">{children}</div>
    </div>
  );
}

export default Card;
