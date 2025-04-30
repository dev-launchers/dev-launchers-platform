import Header from './Header';

/**
 * Card Component
 *
 * A reusable container component that displays a header and content.
 * The card includes a title, an optional edit button, and space for child components.
 *
 * Props:
 * - `title` (String): The title displayed in the card header.
 * - `children` (ReactNode): The content rendered inside the card body.
 * - `onEdit` (Function): Optional callback triggered when the edit button in the header is clicked.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element} The rendered Card component.
 */
function Card({ title, children, onEdit }) {
  return (
    <div className="flex flex-col shadow-lg w-full h-full bg-white">
      {/* Header Section */}
      <Header title={title} onEdit={onEdit} />{' '}
      {/* Displays title and optional edit functionality */}
      {/* Content Section */}
      <div className="px-8 pb-10 pt-6">{children}</div>{' '}
      {/* Render card content */}
    </div>
  );
}

export default Card;
