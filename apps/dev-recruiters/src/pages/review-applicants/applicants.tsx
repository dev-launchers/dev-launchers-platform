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
  const { userData } = useUserDataContext();
  const [loading, setLoading] = useState(false);
  const [applicants, setApplicants] = useState<NewApplicant[]>([]);
  const [error, setError] = useState<string | null>(null);

  // derive user's projects and roles
  const userProjects = userData?.projects || [];

  const userRoles = useMemo(() => {
    return userProjects.flatMap((project: any) => {
      const positions: Opportunity[] = project.opportunities?.data || [];
      return positions.map((pos: any) => ({
        title: pos.attributes?.title ?? '',
        projectId: String(project.id ?? ''),
        projectTitle: project?.title ?? '',
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

          {/* Convert Map entries to array for iteration */}
          <ShowApplicants groupedByRole={groupedByRole} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default ReviewApplicantsByRole;
