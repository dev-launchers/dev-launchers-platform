import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronLeft } from 'lucide-react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import PageHeader from '@devlaunchers/components/src/components/molecules/PageHeader';
import agent from '@devlaunchers/utility/agent';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import { NewApplicant, Opportunity } from '@devlaunchers/models';
import ShowApplicants from './show-applicants';

const ReviewApplicantsByRole: React.FC = () => {
  const router = useRouter();
  const { userData, isLoading: userDataLoading } = useUserDataContext();
  const [loading, setLoading] = useState(false);
  const [applicants, setApplicants] = useState<NewApplicant[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { role, projectId, projectName } = router.query;

  // derive user's projects and roles
  const userProjects = userData?.projects || [];

  const userRoles = useMemo(() => {
    // Case 1: role passed in URL
    if (role) {
      return [
        {
          title: role,
          projectId: projectId || '',
          projectTitle: projectName || '',
        },
      ];
    }

    // Case 2: derive roles from user projects
    return userProjects.flatMap((project: any) => {
      const positions: Opportunity[] = project.opportunities ?? [];
      return positions.map((pos: any) => ({
        title: pos.title ?? '',
        projectId: String(project.id ?? ''),
        projectTitle: project.title ?? '',
      }));
    });
  }, [userProjects, role]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        console.log('Fetching applicants');
        const res = await agent.Applicant.get();
        const list = res.map((a) => ({
          id: a.id,
          ...a.attributes,
        }));
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

    console.log('roleTitles', roleTitles);

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

  // Combined loading state: wait for both applicants AND user data
  const isLoadingAll = loading || userDataLoading;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <PageHeader
          title="Find your team"
          subtitle="Easily View, Manage and Organise incoming applicants. Track applicant progress. Revisit past submissions
          and find the right fit for your team, all in one place."
          element={null}
        />

        {/* Return to Dashboard */}
        <div className="flex pt-5 items-center space-x-2 text-sm text-gray-400 mb-6">
          <Button
            type="primary"
            onClick={() => router.push('/dev-recruiters/dashboard')}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return To Dashboard</span>
          </Button>
        </div>

        <div className="bg-[#111] rounded-lg p-6">
          {isLoadingAll && <p className="text-gray-400">Loading applicants…</p>}
          {error && <p className="text-red-400">{error}</p>}

          {!isLoadingAll && !error && groupedByRole.size === 0 && (
            <p className="text-gray-400">No applicants found for your roles.</p>
          )}

          {/* Convert Map entries to array for iteration */}
          <ShowApplicants groupedByRole={groupedByRole} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default ReviewApplicantsByRole;
