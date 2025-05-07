import { Search, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

//Departments

//development
//product
// design
// Research

interface SearchBarProps {
  onSearch: (query: string) => void; // Define the type for onSearch
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [department, setDepartment] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // sends data to the parent => dashboard.
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  // set state to initial values.. which it will change the search term, experience level and edpartment to "".
  // useEffect(() => {
  //   setDepartment('');
  //   setExperienceLevel('');
  //   setSearchTerm(''); // Reset searchTerm to empty string
  //   onSearch(JSON.stringify({ searchTerm, department, experienceLevel }));
  // }, []);

  // Call onSearch whenever searchTerm, department, or experienceLevel changes
  useEffect(() => {
    onSearch(JSON.stringify({ searchTerm, department, experienceLevel }));
  }, [searchTerm, department, experienceLevel]);

  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-lg space-y-4 bg-[#30184840] mt-6 overflow-hidden">
      <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
        Search Roles
      </h2>

      {/* Search Input */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="relative sm:w-[200px] md:w-1/2">
          <input
            type="text"
            placeholder="Search by role"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full py-2 px-4 pl-10 rounded-md text-black"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-black" />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 text-black w-full">
        <div className="relative w-full md:w-[300px]">
          <select
            className="w-full rounded-md py-2 px-4 appearance-none"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="" disabled>
              Role Department
            </option>
            <option value="development">Development</option>
            <option value="product">Product</option>
            <option value="design">Design</option>
            <option value="research">Research</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
        </div>

        <div className="relative w-full md:w-[300px]">
          <select
            className="w-full rounded-md py-2 px-4 appearance-none"
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
          >
            <option value="" disabled>
              Experience Level
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
