import React, { useState } from 'react';
import { NewApplicant } from '@devlaunchers/models';
import { Search } from 'lucide-react';
import TableHeader from './table/tableHeader';
import ApplicantRow from './table/applicantRow';
import SortDropdown from './table/sortDropDown';
import ApplicantDetailModal from './applicationDetailModal';

interface ShowApplicantsProps {
  groupedByRole: Map<string, NewApplicant[]>;
  loading: boolean;
}

export type SortField =
  | 'name'
  | 'email'
  | 'level'
  | 'commitment'
  | 'experience'
  | 'date';
export type SortDirection = 'asc' | 'desc';

interface ShowApplicantsProps {
  groupedByRole: Map<string, NewApplicant[]>;
  loading: boolean;
}

const ShowApplicants: React.FC<ShowApplicantsProps> = ({
  groupedByRole,
  loading,
}) => {
  const [searchTerms, setSearchTerms] = useState<Map<string, string>>(
    new Map()
  );
  const [selectedApplicants, setSelectedApplicants] = useState<
    Map<string, Set<string>>
  >(new Map());
  const [sortConfig, setSortConfig] = useState<
    Map<string, { field: SortField; direction: SortDirection }>
  >(new Map());
  const [selectedApplicant, setSelectedApplicant] =
    useState<NewApplicant | null>(null);

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
      setSelectedApplicants(new Map(selectedApplicants.set(role, new Set())));
    } else {
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
      <ApplicantDetailModal
        isOpen={!!selectedApplicant}
        applicant={selectedApplicant}
        onClose={() => setSelectedApplicant(null)}
      />
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
              {/* Header Section */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-cyan-500 px-6 py-4">
                <h3 className="text-xl font-bold text-white mb-3">{role}</h3>
                <div className="flex items-center gap-3">
                  {/* Search Bar */}
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

                  {/* Sort Dropdown */}
                  <SortDropdown
                    value={currentSort?.field}
                    onChange={(field) => handleSort(role, field)}
                  />

                  {/* Selected Count */}
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
                  <TableHeader
                    allSelected={
                      roleSelections.size === sortedApps.length &&
                      sortedApps.length > 0
                    }
                    onSelectAll={() => handleSelectAll(role, sortedApps)}
                  />
                  <tbody className="divide-y divide-gray-800">
                    {sortedApps.length > 0 ? (
                      sortedApps.map((app) => {
                        const appId = app.id ?? `${app.email}-${app.name}`;
                        return (
                          <ApplicantRow
                            key={appId}
                            applicant={app}
                            isSelected={roleSelections.has(appId)}
                            onSelect={() => handleSelectApplicant(role, appId)}
                            onViewDetails={() => setSelectedApplicant(app)}
                          />
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={8}
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

              {/* Footer */}
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
