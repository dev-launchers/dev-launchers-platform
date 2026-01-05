import { NewApplicant } from '@devlaunchers/models';

interface ApplicantRowProps {
  applicant: NewApplicant;
  isSelected: boolean;
  onSelect: () => void;
  onViewDetails: () => void;
}

const ApplicantRow: React.FC<ApplicantRowProps> = ({
  applicant,
  isSelected,
  onSelect,
  onViewDetails,
}) => (
  <tr
    className={`hover:bg-gray-800/50 transition-colors ${
      isSelected ? 'bg-cyan-500/10' : ''
    }`}
    onClick={onViewDetails}
  >
    <td className="px-6 py-4 w-12" onClick={(e) => e.stopPropagation()}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
        className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-0 cursor-pointer"
      />
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">
      {applicant.name || 'N/A'}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
      {applicant.email || 'N/A'}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
      {applicant.publishedAt
        ? new Date(applicant.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : 'N/A'}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm">
      {applicant.accepted ? (
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
      {applicant.level || 'N/A'}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
      {applicant.commitment ? `${applicant.commitment} hrs/wk` : 'N/A'}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
      {applicant.yearsOfExperience
        ? `${applicant.yearsOfExperience} yrs`
        : 'N/A'}
    </td>
  </tr>
);

export default ApplicantRow;
