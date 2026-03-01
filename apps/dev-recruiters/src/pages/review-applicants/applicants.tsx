import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronLeft } from 'lucide-react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import PageHeader from '@devlaunchers/components/src/components/molecules/PageHeader';
import agent from '@devlaunchers/utility/agent';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import { NewApplicant, Opportunity } from '@devlaunchers/models';
import ShowApplicants from './show-applicants';

/**
 * Represents a role/opportunity that the current user manages.
 * Used to filter which applicants to fetch from the API.
 */
interface UserRoleType {
  title: string; // Role name (e.g., "Frontend Developer")
  projectId: string; // ID of the project this role belongs to
  opportunityId: string; // ID of the opportunity/position
}

/**
 * ReviewApplicantsByRole Component
 *
 * This page displays applicants for roles/opportunities that the current user manages.
 *
 * Flow:
 * 1. Check if user is authenticated and is a project leader
 * 2. Determine which roles to fetch applicants for (from URL or user's projects)
 * 3. Fetch applicants from API using Strapi filters
 * 4. Group applicants by role and display them
 */
const ReviewApplicantsByRole: React.FC = () => {
  const router = useRouter();

  // Get current user data and auth state from context
  const {
    userData,
    isLoading: userDataLoading,
    isAuthenticated,
  } = useUserDataContext();

  // Component state
  const [loading, setLoading] = useState(false); // API loading state
  const [applicants, setApplicants] = useState<NewApplicant[]>([]); // List of applicants
  const [error, setError] = useState<string | null>(null); // Error message if any

  // URL query params - allows viewing applicants for a specific role
  // Example: /review-applicants?role=Developer&projectId=123&opportunityId=456
  const { role, projectId, opportunityId } = router.query;

  // ============================================
  // STEP 1: Authorization Check
  // ============================================
  // Redirect non-leaders to home page
  // Only project leaders can view applicants
  useEffect(() => {
    // Wait for user data to finish loading before checking
    if (userDataLoading) {
      return;
    }

    if (isAuthenticated && userData) {
      // Check if user is a leader of any project
      // Loops through all projects and checks if user's email matches any leader
      const isLeader = userData.projects?.some((project: any) =>
        project.team?.leaders?.some(
          (l: any) => l.leader?.email === userData.email
        )
      );

      // Redirect to home if not a leader
      if (!isLeader) {
        router.replace('/');
      }
    }
  }, [isAuthenticated, userData, userDataLoading]);

  // ============================================
  // STEP 2: Determine User's Roles/Opportunities
  // ============================================

  // Memoize user projects to prevent unnecessary re-renders
  const userProjects = useMemo(
    () => userData?.projects || [],
    [userData?.projects]
  );

  /**
   * Build list of roles the user can view applicants for.
   *
   * Two scenarios:
   * 1. URL has role params → View applicants for that specific role
   * 2. No URL params → View applicants for ALL roles in user's projects
   */
  const userRoles: UserRoleType[] = useMemo(() => {
    // Case 1: Specific role passed in URL query params
    // This happens when clicking "View Applicants" for a specific role
    if (role) {
      return [
        {
          // Handle array case (Next.js query can be string | string[])
          title: Array.isArray(role) ? role[0] : role,
          projectId: Array.isArray(projectId) ? projectId[0] : projectId || '',
          opportunityId: Array.isArray(opportunityId)
            ? opportunityId[0]
            : opportunityId || '',
        },
      ];
    }

    // Case 2: No URL params - derive roles from ALL user's projects
    // Flatten all opportunities from all projects into a single array
    return userProjects.flatMap((project: any) => {
      const positions: Opportunity[] = project.opportunities ?? [];
      return positions.map((pos: any) => ({
        title: pos.title ?? '',
        projectId: String(project.id ?? ''),
        opportunityId: String(pos.id ?? ''),
      }));
    });
  }, [userProjects, role, projectId, opportunityId]);

  // ============================================
  // STEP 3: Fetch Applicants from API
  // ============================================

  /**
   * Fetches applicants from Strapi API based on user's roles.
   *
   * Strategy:
   * 1. First, try to filter by opportunity ID (new, more accurate method)
   * 2. If no results, fallback to filtering by role title + project ID (legacy method)
   *
   * The $or filter allows matching ANY of the user's roles:
   * filters[$or][0][opportunity][id][$eq]=123  → Match opportunity ID 123
   * filters[$or][1][opportunity][id][$eq]=456  → OR match opportunity ID 456
   *
   * @param userRoles - Array of roles the user manages
   * @returns Array of applicants matching any of the roles
   */
  const getApplicantsByRolesOrProjects = async (userRoles: UserRoleType[]) => {
    // Early return if user has no roles
    if (userRoles.length === 0) {
      return [];
    }

    // Build query params for Strapi API
    const params = new URLSearchParams();

    // Populate related data (project and opportunity details)
    params.append('populate', 'project');
    params.append('populate', 'opportunity');

    // Primary filter: Match by opportunity ID
    // Creates: filters[$or][0][opportunity][id][$eq]=123&filters[$or][1][opportunity][id][$eq]=456...
    userRoles.forEach((userRole, index) => {
      params.append(
        `filters[$or][${index}][opportunity][id][$eq]`,
        userRole.opportunityId
      );
    });

    // Make API call with opportunity ID filter
    const result = await agent.Applicant.get(params.toString());

    // If we got results, return them
    if (result && result.length > 0) {
      return result;
    }

    // ============================================
    // FALLBACK: Legacy filter (role title + project ID)
    // ============================================
    // Used for older applicants that might not have opportunity relation set
    const fallbackParams = new URLSearchParams();
    fallbackParams.append('populate', 'project');
    fallbackParams.append('populate', 'opportunity');

    // Creates complex filter: Match (role title AND project ID) OR (role title AND project ID)...
    // $eqi = case-insensitive equals
    userRoles.forEach((userRole, index) => {
      fallbackParams.append(
        `filters[$or][${index}][$and][0][role][$eqi]`,
        userRole.title.trim().toLowerCase()
      );
      fallbackParams.append(
        `filters[$or][${index}][$and][1][project][id][$eq]`,
        userRole.projectId
      );
    });

    return await agent.Applicant.get(fallbackParams.toString());
  };

  // ============================================
  // STEP 4: Execute API Call on Role Changes
  // ============================================
  // This effect runs whenever userRoles changes
  // Uses mounted flag to prevent state updates after unmount (memory leak prevention)
  useEffect(() => {
    let mounted = true; // Track if component is still mounted

    (async () => {
      // Only update state if component is still mounted
      if (mounted) {
        setLoading(true);
        setError(null);
      }

      try {
        // Fetch applicants based on user's roles
        const res = await getApplicantsByRolesOrProjects(userRoles);

        // Don't update state if component unmounted during fetch
        if (!mounted) return;

        // Transform API response: flatten attributes into top level
        // API returns: { id: 1, attributes: { name: "John", ... } }
        // We want: { id: 1, name: "John", ... }
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

    // Cleanup function: runs when component unmounts or before next effect
    return () => {
      mounted = false;
    };
  }, [userRoles]);

  // ============================================
  // STEP 5: Group Applicants by Role
  // ============================================
  // Creates a Map where:
  // - Key: role name (e.g., "Frontend Developer")
  // - Value: array of applicants for that role
  // This makes it easy to display applicants in sections
  const groupedByRole = useMemo(() => {
    const map = new Map<string, NewApplicant[]>();

    applicants.forEach((app) => {
      // Use role name, or project slug, or "Unspecified" as fallback
      const key = app.role || app.project?.slug || 'Unspecified';

      // Get existing array or create new one
      const arr = map.get(key) || [];
      arr.push(app);
      map.set(key, arr);
    });

    return map;
  }, [applicants]);

  // Combined loading state: show loading if either user data or applicants are loading
  // AND we don't have any data to show yet
  const isLoadingAll = (loading || userDataLoading) && groupedByRole.size === 0;

  // ============================================
  // STEP 6: Render UI
  // ============================================
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
