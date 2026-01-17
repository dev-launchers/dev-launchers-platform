import React from 'react';
import { NewApplicant } from '@devlaunchers/models';
import Modal from '../../components/modules/DetailedPage/PositionPopupModal';
import { Typography } from '@devlaunchers/components/src/components/atoms';

const customStyles = {
  content: {
    position: 'absolute',
    backgroundColor: 'transparent',
    border: 'none',
    width: '60%',
    maxHeight: '85vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1001,
    padding: 0,
  },
  overlay: { zIndex: 1000, backgroundColor: 'rgba(0, 0, 0, 0.8)' },
};

interface ApplicantDetailModalProps {
  isOpen: boolean;
  applicant: NewApplicant | null;
  onClose: () => void;
}

export default function ApplicantDetailModal({
  isOpen,
  applicant,
  onClose,
}: ApplicantDetailModalProps) {
  if (!applicant) return null;

  return (
    <Modal
      modalIsOpen={isOpen}
      closeModal={onClose}
      customModalStyles={customStyles}
      modalContent={
        <div className="relative bg-gray-900 text-white p-8 rounded-lg max-w-2xl">
          {/* Close Button */}
          <div className="flex flex-col-reverse justify-between items-start mb-6">
            <div>
              <Typography as="h2" size="xl2" textWeight="bold">
                {applicant.name}
              </Typography>
              <Typography as="p" size="body_lg">
                {applicant.email}
              </Typography>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <Typography as="p" className="text-gray-400 text-sm">
                Role
              </Typography>
              <Typography as="p" className="text-lg font-semibold">
                {applicant.role}
              </Typography>
            </div>
            <div>
              <Typography as="p" className="text-gray-400 text-sm">
                Level
              </Typography>
              <Typography as="p" className="text-lg font-semibold">
                {applicant.level}
              </Typography>
            </div>
            <div>
              <Typography as="p" className="text-gray-400 text-sm">
                Years of Experience
              </Typography>
              <Typography as="p" className="text-lg font-semibold">
                {applicant.yearsOfExperience ?? 'N/A'}
              </Typography>
            </div>
            <div>
              <Typography as="p" className="text-gray-400 text-sm">
                Commitment (hrs/week)
              </Typography>
              <Typography as="p" className="text-lg font-semibold">
                {applicant.commitment}
              </Typography>
            </div>
            <div>
              <Typography as="p" className="text-gray-400 text-sm">
                Age
              </Typography>
              <Typography as="p" className="text-lg font-semibold">
                {applicant.age}
              </Typography>
            </div>
            <div>
              <Typography as="p" className="text-gray-400 text-sm">
                18+
              </Typography>
              <Typography as="p" className="text-lg font-semibold">
                {applicant.isAgeOver18 ? 'Yes' : 'No'}
              </Typography>
            </div>
          </div>

          {/* Skills */}
          {applicant.skills && (
            <div className="mb-6">
              <Typography as="p" className="text-gray-400 text-sm mb-2">
                Skills
              </Typography>
              <div className="flex flex-wrap gap-2">
                {applicant.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded text-sm"
                  >
                    {s.skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          <div className="mb-6">
            <Typography as="p" className="text-gray-400 text-sm mb-2">
              Experience
            </Typography>
            <Typography as="p" className="text-gray-200">
              {applicant.experience}
            </Typography>
          </div>

          {/* Reason */}
          <div className="mb-6">
            <Typography as="p" className="text-gray-400 text-sm mb-2">
              Why Join
            </Typography>
            <Typography as="p" className="text-gray-200">
              {applicant.reason}
            </Typography>
          </div>

          {/* Extra Info */}
          {applicant.extraInfo && (
            <div className="mb-6">
              <Typography as="p" className="text-gray-400 text-sm mb-2">
                Additional Info
              </Typography>
              <Typography as="p" className="text-gray-200">
                {applicant.extraInfo}
              </Typography>
            </div>
          )}

          {/* Portfolio Link */}
          {applicant.portfolioLink && (
            <div className="mb-6">
              <Typography as="p" className="text-gray-400 text-sm mb-2">
                Portfolio
              </Typography>
              <a
                href={applicant.portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                {applicant.portfolioLink}
              </a>
            </div>
          )}

          {/* Discord */}
          {applicant.discordUsername && (
            <div>
              <Typography as="p" className="text-gray-400 text-sm mb-2">
                Discord
              </Typography>
              <Typography as="p" className="text-gray-200">
                {applicant.discordUsername}
              </Typography>
            </div>
          )}
        </div>
      }
    />
  );
}
