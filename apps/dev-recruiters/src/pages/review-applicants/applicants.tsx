import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronLeft } from 'lucide-react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import PageHeader from '@devlaunchers/components/src/components/molecules/PageHeader';
import agent from '@devlaunchers/utility/agent';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import { NewApplicant, Opportunity } from '@devlaunchers/models';
import ShowApplicants from './show-applicants';

interface UserRoleType {
  title: string;
  projectId: string;
  projectTitle: string;
}

const ReviewApplicantsByRole: React.FC = () => {
  const router = useRouter();
  const {
    userData,
    isLoading: userDataLoading,
    isAuthenticated,
  } = useUserDataContext();
  const [loading, setLoading] = useState(false);
  const [applicants, setApplicants] = useState<NewApplicant[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { role, projectId, projectName } = router.query;

  useEffect(() => {
    if (userDataLoading) {
      return;
    }

    if (isAuthenticated && userData) {
      const isLeader = userData.projects?.some((project: any) =>
        project.team?.leaders?.some(
          (l: any) => l.leader?.email === userData.email
        )
      );
    } else {
      router.replace('/');
    }
  }, [isAuthenticated, userData, userDataLoading]);

  const userProjects = useMemo(
    () => userData?.projects || [],
    [userData?.projects]
  );

  const userRoles: UserRoleType[] = useMemo(() => {
    // Case 1: role passed in URL
    if (role) {
      return [
        {
          title: Array.isArray(role) ? role[0] : role,
          projectId: Array.isArray(projectId) ? projectId[0] : projectId || '',
          projectTitle: Array.isArray(projectName)
            ? projectName[0]
            : projectName || '',
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
  }, [userProjects, role, projectId, projectName]);

  const getApplicantsByRolesOrProjects = async (userRoles: UserRoleType[]) => {
    const params = new URLSearchParams();

    if (userRoles.length === 0) {
      return [];
    }

    // Create OR groups for each role+project combination
    userRoles.forEach((userRole, index) => {
      params.append(
        `filters[$or][${index}][$and][0][role][$eqi]`,
        userRole.title.trim().toLowerCase()
      );
      params.append(
        `filters[$or][${index}][$and][1][project][id][$eq]`,
        userRole.projectId
      );
    });

    params.append('populate', 'project');

    return await agent.Applicant.get(params.toString());
  };

  useEffect(() => {
    let mounted = true;

    (async () => {
      if (mounted) {
        setLoading(true);
        setError(null);
      }

      try {
        const res = await getApplicantsByRolesOrProjects(userRoles);

        if (!mounted) return;

        const list = res.map((a) => ({
          id: a.id,
          ...a.attributes,
        }));

        setApplicants(list || []);
      } catch (err) {
        console.error('Failed to load applicants', err);

        if (!mounted) return;

        setError('Failed to load applicants.');
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [userRoles]);

  // group applicants by role
  const groupedByRole = useMemo(() => {
    const map = new Map<string, NewApplicant[]>();
    applicants.forEach((app) => {
      const key = app.role || app.project?.slug || 'Unspecified';
      const arr = map.get(key) || [];
      arr.push(app);
      map.set(key, arr);
    });
    return map;
  }, [applicants]);

  // Combined loading state: wait for both applicants AND user data
  const isLoadingAll = (loading || userDataLoading) && groupedByRole.size === 0;

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

          <ShowApplicants groupedByRole={groupedByRole} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default ReviewApplicantsByRole;
