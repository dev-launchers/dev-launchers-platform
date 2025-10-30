interface TableHeaderProps {
  allSelected: boolean;
  onSelectAll: () => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  allSelected,
  onSelectAll,
}) => (
  <thead className="bg-gray-800 border-b border-gray-700">
    <tr>
      <th className="px-6 py-3 w-12">
        <input
          type="checkbox"
          checked={allSelected}
          onChange={onSelectAll}
          className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-0 cursor-pointer"
        />
      </th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
        Name
      </th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
        Email
      </th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
        Date Applied
      </th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
        Status
      </th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
        Level
      </th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
        Commitment
      </th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
        Experience
      </th>
    </tr>
  </thead>
);

export default TableHeader;
