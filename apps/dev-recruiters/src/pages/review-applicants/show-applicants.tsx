import React, { useState } from 'react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import { NewApplicant } from '@devlaunchers/models';
import { Search, ChevronDown } from 'lucide-react';

interface ShowApplicantsProps {
  groupedByRole: Map<string, NewApplicant[]>;
  loading: boolean;
}

type SortField =
  | 'name'
  | 'email'
  | 'level'
  | 'commitment'
  | 'experience'
  | 'date';
type SortDirection = 'asc' | 'desc';

const ShowApplicants = ({ groupedByRole, loading }: ShowApplicantsProps) => {
  const [searchTerms, setSearchTerms] = useState<Map<string, string>>(
    new Map()
  );
  const [selectedApplicants, setSelectedApplicants] = useState<
    Map<string, Set<string>>
  >(new Map());
  const [sortConfig, setSortConfig] = useState<
    Map<string, { field: SortField; direction: SortDirection }>
  >(new Map());

  const handleSearch = (role: string, term: string) => {
    setSearchTerms(new Map(searchTerms.set(role, term)));
  };

  const handleSelectApplicant = (role: string, appId: string) => {
    const roleSelections = new Set(selectedApplicants.get(role) || []);
    if (roleSelections.has(appId)) {
      roleSelections.delete(appId);
    } else {
      roleSelections.add(appId);
    }
    setSelectedApplicants(
      new Map(selectedApplicants.set(role, roleSelections))
    );
  };

  const handleSelectAll = (role: string, applicants: NewApplicant[]) => {
    const roleSelections = selectedApplicants.get(role) || new Set();
    if (roleSelections.size === applicants.length) {
      // Deselect all
      setSelectedApplicants(new Map(selectedApplicants.set(role, new Set())));
    } else {
      // Select all
      const allIds = new Set(
        applicants.map((app) => app.id ?? `${app.email}-${app.name}`)
      );
      setSelectedApplicants(new Map(selectedApplicants.set(role, allIds)));
    }
  };

  const handleSort = (role: string, field: SortField) => {
    const currentSort = sortConfig.get(role);
    const newDirection: SortDirection =
      currentSort?.field === field && currentSort?.direction === 'asc'
        ? 'desc'
        : 'asc';
    setSortConfig(
      new Map(sortConfig.set(role, { field, direction: newDirection }))
    );
  };

  const filterApplicants = (applicants: NewApplicant[], searchTerm: string) => {
    if (!searchTerm) return applicants;

    const term = searchTerm.toLowerCase();
    return applicants.filter(
      (app) =>
        app.name?.toLowerCase().includes(term) ||
        app.email?.toLowerCase().includes(term) ||
        app.skills?.some((s) => s.skill?.toLowerCase().includes(term))
    );
  };

  const sortApplicants = (applicants: NewApplicant[], role: string) => {
    const config = sortConfig.get(role);
    if (!config) return applicants;

    return [...applicants].sort((a, b) => {
      let aVal: any;
      let bVal: any;

      switch (config.field) {
        case 'name':
          aVal = a.name?.toLowerCase() || '';
          bVal = b.name?.toLowerCase() || '';
          break;
        case 'email':
          aVal = a.email?.toLowerCase() || '';
          bVal = b.email?.toLowerCase() || '';
          break;
        case 'date':
          aVal = new Date(a.publishedAt).getTime();
          bVal = new Date(b.publishedAt).getTime();
          break;
        case 'level':
          aVal = a.level?.toLowerCase() || '';
          bVal = b.level?.toLowerCase() || '';
          break;
        case 'commitment':
          aVal = a.commitment || 0;
          bVal = b.commitment || 0;
          break;
        case 'experience':
          aVal = a.yearsOfExperience || 0;
          bVal = b.yearsOfExperience || 0;
          break;
        default:
          return 0;
      }

      if (aVal < bVal) return config.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return config.direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  return (
    <div className="space-y-6">
      {!loading &&
        Array.from(groupedByRole.entries()).map(([role, apps]) => {
          const searchTerm = searchTerms.get(role) || '';
          const filteredApps = filterApplicants(apps, searchTerm);
          const sortedApps = sortApplicants(filteredApps, role);
          const roleSelections = selectedApplicants.get(role) || new Set();
          const currentSort = sortConfig.get(role);

          return (
            <section
              key={role}
              className="bg-gray-900 border border-cyan-500 rounded-lg overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-cyan-500 px-6 py-4">
                <h3 className="text-xl font-bold text-white mb-3">{role}</h3>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search by name or skill or email..."
                      value={searchTerm}
                      onChange={(e) => handleSearch(role, e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-10 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="relative">
                    <select
                      onChange={(e) =>
                        handleSort(role, e.target.value as SortField)
                      }
                      value={currentSort?.field || ''}
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

                  {roleSelections.size > 0 && (
                    <div className="text-sm text-cyan-400 font-medium">
                      {roleSelections.size} selected
                    </div>
                  )}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800 border-b border-gray-700">
                    <tr>
                      <th className="px-6 py-3 w-12">
                        <input
                          type="checkbox"
                          checked={
                            roleSelections.size === sortedApps.length &&
                            sortedApps.length > 0
                          }
                          onChange={() => handleSelectAll(role, sortedApps)}
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
                  <tbody className="divide-y divide-gray-800">
                    {sortedApps.length > 0 ? (
                      sortedApps.map((app) => {
                        const appId = app.id ?? `${app.email}-${app.name}`;
                        const isSelected = roleSelections.has(appId);

                        return (
                          <tr
                            key={appId}
                            className={`hover:bg-gray-800/50 transition-colors ${
                              isSelected ? 'bg-cyan-500/10' : ''
                            }`}
                          >
                            <td className="px-6 py-4 w-12">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() =>
                                  handleSelectApplicant(role, appId)
                                }
                                className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-0 cursor-pointer"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">
                              {app.name || 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                              {app.email || 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                              {app.publishedAt
                                ? new Date(app.publishedAt).toLocaleDateString(
                                    'en-US',
                                    {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric',
                                    }
                                  )
                                : 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {app.accepted ? (
                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded bg-green-500/20 text-green-400 border border-green-500/30">
                                  Accepted
                                </span>
                              ) : (
                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                                  Pending
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                              {app.level || 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                              {app.commitment
                                ? `${app.commitment} hrs/wk`
                                : 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                              {app.yearsOfExperience
                                ? `${app.yearsOfExperience} yrs`
                                : 'N/A'}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={9}
                          className="px-6 py-8 text-center text-sm text-gray-500"
                        >
                          {searchTerm
                            ? 'No applicants found matching your search.'
                            : 'No applicants for this role yet.'}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Footer with count */}
              <div className="bg-gray-800/50 border-t border-gray-700 px-6 py-3">
                <p className="text-xs text-gray-500">
                  Showing {sortedApps.length} of {apps.length} applicants
                  {currentSort && (
                    <span className="ml-2">
                      • Sorted by {currentSort.field} (
                      {currentSort.direction === 'asc'
                        ? 'ascending'
                        : 'descending'}
                      )
                    </span>
                  )}
                </p>
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default ShowApplicants;
