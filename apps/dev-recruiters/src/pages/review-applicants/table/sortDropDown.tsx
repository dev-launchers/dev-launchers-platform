import { SortField } from '../show-applicants';
import { ChevronDown } from 'lucide-react';

interface SortDropdownProps {
  value?: SortField;
  onChange: (field: SortField) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => (
  <div className="relative">
    <select
      onChange={(e) => onChange(e.target.value as SortField)}
      value={value || ''}
      className="appearance-none bg-gray-800 border border-gray-700 rounded px-4 py-2 pr-10 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 cursor-pointer"
    >
      <option value="" disabled>
        Sort By
      </option>
      <option value="name">Name</option>
      <option value="email">Email</option>
      <option value="level">Level</option>
      <option value="commitment">Commitment</option>
      <option value="experience">Experience</option>
      <option value="date">Date</option>
    </select>
    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
  </div>
);

export default SortDropdown;
