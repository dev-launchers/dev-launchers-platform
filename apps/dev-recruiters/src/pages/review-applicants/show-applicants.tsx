import React from 'react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import { NewApplicant } from '@devlaunchers/models';
import router from 'next/router';

interface ShowApplicantsProps {
  groupedByRole: Map<string, NewApplicant[]>;
  loading: boolean;
}

const ShowApplicants = ({ groupedByRole, loading }: ShowApplicantsProps) => {
  return (
    <div>
      {/* Convert Map entries to array for iteration */}
      {!loading &&
        // Converts the groupedByRole Map into an array of [role, apps (applicants)] tuples
        Array.from(groupedByRole.entries()).map(([role, apps]) => (
          <section key={role} className="mb-6">
            <h3 className="text-lg font-semibold mb-3">{role}</h3>
            <div className="space-y-3">
              {apps.map((app) => (
                <div
                  key={app.id ?? `${app.email}-${app.name}`}
                  className="bg-gray-900 border border-gray-700 rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                >
                  <div>
                    <div className="text-sm text-gray-300">
                      <strong className="text-white">{app.name}</strong> —{' '}
                      <span className="italic">{app.email}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Skills:{' '}
                      {app.skills && app.skills.length > 0
                        ? app.skills.map((s) => s.skill).join(', ')
                        : 'N/A'}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Commitment: {app.commitment ?? 'N/A'} hrs/wk · Level:{' '}
                      {app.level ?? 'N/A'} · Experience:{' '}
                      {app.yearsOfExperience ?? 'N/A'} yrs
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() =>
                        router.push(
                          `/dev-recruiters/review-applicants/${app.id ?? ''}`
                        )
                      }
                    >
                      View
                    </Button>
                    <Button
                      onClick={() =>
                        console.log('Accept toggle for', app.id ?? app.email)
                      }
                    >
                      {app.accepted ? 'Accepted' : 'Accept'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
    </div>
  );
};

export default ShowApplicants;
