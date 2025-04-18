import { Search, ChevronDown } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg space-y-4 bg-[#30184840] mt-6">
      <h2 className="text-lg font-semibold mb-4">Search Roles</h2>
      <div className="flex items-center gap-4">
        <div className="relative w-2/4">
          <input
            type="text"
            placeholder="Search by role"
            className="w-full py-2 px-4 pl-10 rounded-md"
          />
          <Search className="absolute left-3 top-2 w-4 h-4 text-black" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 text-black">
        <select className="w-[300px] rounded-md py-2 px-4 relative">
          <option value="" disabled selected>
            Role Department
          </option>
          <option value="development">Development</option>
          <option value="product">Product</option>
          <option value="design">Design</option>
          <option value="ux-research">UX Research</option>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
        </select>
        <select className="w-[300px] rounded-md py-2 px-4 relative">
          <option value="" disabled selected>
            Experience Level
          </option>
          <option value="entry">Entry Level</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior Level</option>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
