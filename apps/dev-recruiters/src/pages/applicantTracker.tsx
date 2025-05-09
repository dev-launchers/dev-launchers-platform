import PageHeader from '@devlaunchers/components/src/components/molecules/PageHeader';
import TeamApplicationsCard from '@devlaunchers/components/src/components/organisms/cards/TeamApplicationsCard';
import Candidate from 'types/Candidate';

/*  Sample Data for demonstration.
    Needs to be replaced with actual data from backend.
*/
const initialCandidates: Candidate[] = [
  {
    name: 'Sofia Davis',
    dateApplied: '12/15/2023',
    status: 'Applied',
    productTeam: 'Platform',
    department: 'Development',
    role: 'React Developer',
  },
  {
    name: 'Rufus Hensley',
    dateApplied: '07/22/2024',
    status: 'In Review',
    productTeam: 'Platform',
    department: 'Development',
    role: 'React Developer',
  },
  {
    name: 'Julian Hawthorne',
    dateApplied: '03/09/2026',
    status: 'Interviewing',
    productTeam: 'Platform',
    department: 'Development',
    role: 'React Developer',
  },
  {
    name: 'Lydia Fairchild',
    dateApplied: '11/30/2025',
    status: 'Applied',
    productTeam: 'Platform',
    department: 'Development',
    role: 'React Developer',
  },
  {
    name: 'Maximilian Thorne',
    dateApplied: '01/05/2027',
    status: 'Waitlist Rejected',
    productTeam: 'Platform',
    department: 'Development',
    role: 'React Developer',
  },
  {
    name: 'Isabella Carrington',
    dateApplied: '08/14/2023',
    status: 'Onboarding',
    productTeam: 'Platform',
    department: 'Development',
    role: 'React Developer',
  },
  {
    name: 'Clara Whitmore',
    dateApplied: '05/19/2024',
    status: 'Applied',
    productTeam: 'Platform',
    department: 'Development',
    role: 'React Developer',
  },
];

export default function ApplicantTrakcer() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={'Find your team'}
        subtitle={
          'Easily view, manage, and organize incoming applications. Track applicant progress, revisit past submissions, and find the right fit for your team - all in one place.'
        }
      />

      <div className="bg-black text-white w-full flex flex-col gap-4 sm:gap-6 sm:p-8 md:gap-6 lg:gap-8">
        <div className="p-8 bg-gray-950 min-h-screen">
          <TeamApplicationsCard
            applicants={initialCandidates}
            role="React Developer"
            team="Platform Team"
          />
        </div>
      </div>
    </>
  );
}
