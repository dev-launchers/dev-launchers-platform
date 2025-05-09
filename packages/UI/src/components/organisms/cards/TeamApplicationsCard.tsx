import type Candidate from '@devlaunchers/dev-recruiters/src/types/Candidate';
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@devlaunchers/components/src/utils/classesMerger';

interface Props {
  applicants: Candidate[];
  role: string;
  team: string;
}

export default function TeamApplicationsCard(props: Props) {
  const [candidates, setCandidates] = useState<Candidate[]>(props.applicants);
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'dateApplied') {
      return (
        new Date(a.dateApplied).getTime() - new Date(b.dateApplied).getTime()
      );
    }
    return 0;
  });

  const handleCheckboxChange = (name: string) => {
    setSelectedCandidates((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((n) => n !== name)
        : [...prevSelected, name]
    );
  };

  const handleSelectAllChange = (checked: boolean) => {
    setSelectedCandidates(checked ? candidates.map((c) => c.name) : []);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'applied':
        return 'text-blue-500';
      case 'in review':
        return 'text-purple-500';
      case 'interviewing':
        return 'text-yellow-500';
      case 'onboarding':
        return 'text-green-500';
      case 'waitlist rejected':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="gap-6 rounded-2xl bg-[#30184840] p-6 md:p-8">
      <h1 className="3xl mb-2 font-bold text-white">{props.role}</h1>
      <div className="mb-6 text-gray-400">{props.team}</div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative w-full sm:w-auto">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search by role or applicant name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 pl-9 text-white placeholder:text-gray-400"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white sm:w-[180px]"
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="dateApplied">Date Applied</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-md border border-gray-800">
        <table className="min-w-full">
          <thead className="bg-gray-900/50">
            <tr>
              <th className="w-[40px] px-4 py-3 text-left text-white">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      selectedCandidates.length === candidates.length &&
                      selectedCandidates.length > 0
                    }
                    onChange={(e) => handleSelectAllChange(e.target.checked)}
                    className="mr-2 h-4 w-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500"
                    aria-label="Select all candidates"
                  />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-white">Name</th>
              <th className="px-4 py-3 text-left text-white">Date Applied</th>
              <th className="px-4 py-3 text-left text-white">Status</th>
              <th className="px-4 py-3 text-left text-white">Product Team</th>
              <th className="px-4 py-3 text-left text-white">Department</th>
              <th className="px-4 py-3 text-left text-white">Role</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {sortedCandidates.map((candidate) => (
              <tr key={candidate.name}>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCandidates.includes(candidate.name)}
                      onChange={() => handleCheckboxChange(candidate.name)}
                      className="mr-2 h-4 w-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500"
                      aria-label={`Select ${candidate.name}`}
                    />
                  </div>
                </td>
                <td className="px-4 py-2 font-medium text-white">
                  {candidate.name}
                </td>
                <td className="px-4 py-2 text-gray-400">
                  {candidate.dateApplied}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={cn(
                      'px-2 py-1 rounded',
                      getStatusColor(candidate.status),
                      {
                        'bg-blue-500/20':
                          candidate.status.toLowerCase() === 'applied',
                        'bg-purple-500/20':
                          candidate.status.toLowerCase() === 'in review',
                        'bg-yellow-500/20':
                          candidate.status.toLowerCase() === 'interviewing',
                        'bg-green-500/20':
                          candidate.status.toLowerCase() === 'onboarding',
                        'bg-red-500/20':
                          candidate.status.toLowerCase() ===
                          'waitlist rejected',
                      }
                    )}
                  >
                    {candidate.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-400">
                  {candidate.productTeam}
                </td>
                <td className="px-4 py-2 text-gray-400">
                  {candidate.department}
                </td>
                <td className="px-4 py-2 text-purple-400">{candidate.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
