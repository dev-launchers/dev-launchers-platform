import {
  PlusCircle,
  Edit,
  Archive,
  Tag as LucideTag,
  Book,
  Bookmark,
} from 'lucide-react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import Tag from '../components/common/Tag/tag.tsx';
import PageHeader from '@devlaunchers/components/src/components/molecules/PageHeader';

const RoleApplication: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top section with gradient background */}
      <div
        className="w-full"
        style={{
          background:
            'linear-gradient(92.24deg, rgba(129, 195, 215, 0.2) 7%, rgba(143, 97, 189, 0.2) 51.5%, rgba(58, 124, 165, 0.2) 75.77%, rgba(57, 76, 172, 0.2) 96.6%), #000000',
        }}
      >
        <div className="h-1/4 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-6">
          <PageHeader
            title="Role Name here"
            subtitle="Project Name | Department"
          />
        </div>
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-2 mt-1 flex flex-wrap gap-2">
          <Tag label="Frontend" />
          <Tag label="React" />
          <Tag label="UI/UX" />
        </div>
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-2 mt-1 flex flex-wrap gap-2">
          <Button buttonType="primary" buttonSize="standard" as="button">
            {' '}
            Apply{' '}
          </Button>
        </div>
      </div>

      {/* Remaining content with solid black background */}
      <div className="flex-grow bg-black px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-6 text-white">
        {/* Add the rest of your content here */}
        <p>Additional content goes here...</p>
      </div>
    </div>
  );
};

export default RoleApplication;
