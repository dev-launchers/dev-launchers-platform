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

  // call onSearch on initial render.
  // useEffect(() => {
  //   onSearch(JSON.stringify({ searchTerm, department, experienceLevel }));
  // }, []);

  // Call onSearch whenever searchTerm, department, or experienceLevel changes
  useEffect(() => {
    onSearch(JSON.stringify({ searchTerm, department, experienceLevel }));
  }, [searchTerm, department, experienceLevel]);

  return (
    <div className="p-6 rounded-lg shadow-lg space-y-4 bg-[#30184840] mt-6">
      <h2 className="text-lg font-semibold mb-4">Search Roles</h2>
      <div className="flex items-center gap-4">
        <div className="relative w-2/4">
          <input
            type="text"
            placeholder="Search by role"
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full py-2 px-4 pl-10 rounded-md text-black"
          />
          <Search className="absolute left-3 top-2 w-4 h-4 text-black" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 text-black">
        <select
          className="w-[300px] rounded-md py-2 px-4 relative"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="" disabled selected>
            Role Department
          </option>
          <option value="development">Development</option>
          <option value="product">Product</option>
          <option value="design">Design</option>
          <option value="research">Research</option>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
        </select>
        <select
          className="w-[300px] rounded-md py-2 px-4 relative"
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
        >
          <option value="" disabled selected>
            Experience Level
          </option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
