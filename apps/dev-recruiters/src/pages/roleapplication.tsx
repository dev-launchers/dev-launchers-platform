import { useState } from 'react';
import { Bookmark } from 'lucide-react';
import { atoms } from '@devlaunchers/components/src/components';
import Tag from '../components/common/Tag/tag';
import PageHeader from '@devlaunchers/components/src/components/molecules/PageHeader';
import ApplicationForm from '../components/modules/RoleApplicationPage/applicationForm';

const RoleApplication: React.FC = () => {
  const [isSaved, setIsSaved] = useState(false); // State to track if the button is clicked

  const handleSaveClick = () => {
    setIsSaved(!isSaved); // Toggle the state
  };

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
          {/* Save for Later Button */}
          <button
            onClick={handleSaveClick} // Handle click event
            className="flex items-center gap-2 text-gray-500 px-4 py-2 border-none"
            style={{
              background: isSaved
                ? '#6B46C1' // Purple background when clicked
                : 'linear-gradient(92.24deg, rgba(129, 195, 215, 0.2) 7%, rgba(143, 97, 189, 0.2) 51.5%, rgba(58, 124, 165, 0.2) 75.77%, rgba(57, 76, 172, 0.2) 96.6%), #000000', // Page header background
              borderRadius: '0px', // No border rounding
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#6B46C1'; // Purple on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isSaved
                ? '#6B46C1'
                : 'linear-gradient(92.24deg, rgba(129, 195, 215, 0.2) 7%, rgba(143, 97, 189, 0.2) 51.5%, rgba(58, 124, 165, 0.2) 75.77%, rgba(57, 76, 172, 0.2) 96.6%), #000000'; // Reset to original background
            }}
          >
            <Bookmark className="w-4 h-4 text-gray-700" />
            Save for Later
          </button>
          <atoms.Button size="medium" as="button">
            Apply
          </atoms.Button>
        </div>
      </div>
      {/* Remaining content with solid black background */}
      <div className="flex-grow bg-black px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-6 text-white">
        {/* Application Form */}
        <ApplicationForm />
      </div>
    </div>
  );
};

export default RoleApplication;
