import React, { useEffect, useState } from 'react';
import { SectionHeading } from './styles';
import Commitment from './Commitment';

interface CollapsibleContainerProps {
  openPositions: {
    [key: string]: any;
  };
  onRoleSelection: (
    searchQuery: string,
    roleCategory: string,
    activeFilters: string[]
  ) => void;
  selectRoleLabel: string;
}

const CollapsibleContainerFilter: React.FC<CollapsibleContainerProps> = ({
  openPositions,
  onRoleSelection,
}) => {
  const [roleActive, setRoleActive] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    const roleCategory = sessionStorage.getItem('roleCategory');
    setRoleActive(roleCategory);
    setRoleTitle(roleCategory);
  }, []);

  const handleSearch = () => {
    localStorage.setItem('searchQuery', searchQuery);

    onRoleSelection(searchQuery, roleTitle, activeFilters);
  };

  useEffect(() => {
    const filters: string[] = [];
    if (roleTitle) filters.push(`roleTitle=${roleTitle}`);
    if (experienceLevel) filters.push(`experienceLevel=${experienceLevel}`);
    setActiveFilters(filters);
    onRoleSelection(searchQuery, roleTitle, filters);
  }, [roleTitle, experienceLevel]);

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));

    console.log(activeFilters);
    console.log(filter);

    // Parse the filter to get the key and value
    const [key, _] = filter.split('=');

    if (key === 'roleTitle') {
      setRoleTitle('');
    }
    if (key === 'experienceLevel') {
      setExperienceLevel('');
    }
  };

  const cleanFilter = (filter: string) => {
    // Remove string before '='
    const value = filter.split('=')[1];
    return value;
  };

  return (
    <div className="w-full bg-black py-8 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <SectionHeading>Find your perfect role</SectionHeading>

        {/* Search and Filters Row */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Search Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by role or keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:border-purple-600"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Role Title Dropdown */}
          <select
            value={roleTitle}
            onChange={(e) => {
              setRoleTitle(e.target.value);
            }}
            className="bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600 cursor-pointer"
          >
            <option value="">Role Title</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Product">Product</option>
            <option value="Research">Research</option>
            <option value="Marketing">Marketing</option>
            <option value="QA">QA</option>
          </select>

          {/* Experience Level Dropdown */}
          <select
            value={experienceLevel}
            onChange={(e) => {
              setExperienceLevel(e.target.value);
            }}
            className="bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600 cursor-pointer"
          >
            <option value="">Experience Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Commitment Level Dropdown */}
        <div className="mb-6">
          <Commitment />
        </div>

        {/* Active Filters Tags */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter, index) => (
              <div
                key={index}
                className="bg-purple-900 text-purple-200 px-4 py-2 rounded-full text-sm flex items-center gap-2"
              >
                {cleanFilter(filter)}
                <button
                  onClick={() => removeFilter(filter)}
                  className="hover:text-white"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollapsibleContainerFilter;
