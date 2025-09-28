import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronLeft } from 'lucide-react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import PageHeader from '@devlaunchers/components/src/components/molecules/PageHeader';
import agent from '@devlaunchers/utility/agent';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import { NewApplicant } from '@devlaunchers/models';

const ReviewApplicantsByRole: React.FC = () => {
  const router = useRouter();
  const { userData } = useUserDataContext();
  const [loading, setLoading] = useState(false);
  const [applicants, setApplicants] = useState<NewApplicant[]>([]);
  const [error, setError] = useState<string | null>(null);

  // derive user's projects and roles
  const userProjects = userData?.projects || [];

  const userRoles = useMemo(() => {
    return userProjects.flatMap((project: any) => {
      const positions = project.openPositions || [];
      return positions.map((pos: any) => ({
        title: pos?.attributes?.title ?? pos?.title ?? '',
        projectId: String(project.id ?? project?.id ?? ''),
        projectTitle: project.title ?? '',
      }));
    });
  }, [userProjects]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const res = await agent.Applicant.get();
        const list = (
          Array.isArray(res) ? res : res?.data ?? res
        ) as NewApplicant[];
        if (!mounted) return;
        setApplicants(list || []);
      } catch (err) {
        console.error('Failed to load applicants', err);
        if (!mounted) return;
        setError('Failed to load applicants.');
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // filter applicants to those matching the user's roles/projects
  const applicantsForMyRoles = useMemo(() => {
    if (!userRoles.length) return [];

    const roleTitles = new Set(userRoles.map((r) => r.title));
    const projectIds = new Set(userRoles.map((r) => String(r.projectId)));

    return applicants.filter((a) => {
      const applicantRole = (a.role || '').trim();
      const applicantProjectId = String(a.project?.id ?? '');
      // match either by role title or by project id (covers different shapes)
      return (
        roleTitles.has(applicantRole) || projectIds.has(applicantProjectId)
      );
    });
  }, [applicants, userRoles]);

  // group applicants by role
  const groupedByRole = useMemo(() => {
    const map = new Map<string, NewApplicant[]>();
    applicantsForMyRoles.forEach((app) => {
      const key = app.role || app.project?.slug || 'Unspecified';
      const arr = map.get(key) || [];
      arr.push(app);
      map.set(key, arr);
    });
    return map;
  }, [applicantsForMyRoles]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
          <Button
            type="primary"
            onClick={() => router.push('/dev-recruiters/dashboard')}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return To Dashboard</span>
          </Button>
        </div>

        {/* Form Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Review Applicants</h1>
          </div>
        </div>

        <div className="bg-[#111] rounded-lg p-6">
          {loading && <p className="text-gray-400">Loading applicants…</p>}
          {error && <p className="text-red-400">{error}</p>}

          {!loading && !error && groupedByRole.size === 0 && (
            <p className="text-gray-400">No applicants found for your roles.</p>
          )}

          {!loading &&
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
                              `/dev-recruiters/review-applicants/${
                                app.id ?? ''
                              }`
                            )
                          }
                        >
                          View
                        </Button>
                        <Button
                          onClick={() =>
                            console.log(
                              'Accept toggle for',
                              app.id ?? app.email
                            )
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
      </div>
    </div>
  );
};

export default ReviewApplicantsByRole;
