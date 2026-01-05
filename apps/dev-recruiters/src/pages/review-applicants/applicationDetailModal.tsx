import React from 'react';
import { X } from 'lucide-react';
import { NewApplicant } from '@devlaunchers/models';
import Modal from '../../components/modules/DetailedPage/PositionPopupModal';

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
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-gray-800 rounded"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-1">{applicant.name}</h2>
            <p className="text-gray-400">{applicant.email}</p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-400 text-sm">Role</p>
              <p className="text-lg font-semibold">{applicant.role}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Level</p>
              <p className="text-lg font-semibold">{applicant.level}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Years of Experience</p>
              <p className="text-lg font-semibold">
                {applicant.yearsOfExperience ?? 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Commitment (hrs/week)</p>
              <p className="text-lg font-semibold">{applicant.commitment}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Age</p>
              <p className="text-lg font-semibold">{applicant.age}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">18+</p>
              <p className="text-lg font-semibold">
                {applicant.isAgeOver18 ? 'Yes' : 'No'}
              </p>
            </div>
          </div>

          {/* Skills */}
          {applicant.skills && (
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">Skills</p>
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
            <p className="text-gray-400 text-sm mb-2">Experience</p>
            <p className="text-gray-200">{applicant.experience}</p>
          </div>

          {/* Reason */}
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-2">Why Join</p>
            <p className="text-gray-200">{applicant.reason}</p>
          </div>

          {/* Extra Info */}
          {applicant.extraInfo && (
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">Additional Info</p>
              <p className="text-gray-200">{applicant.extraInfo}</p>
            </div>
          )}

          {/* Portfolio Link */}
          {applicant.portfolioLink && (
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">Portfolio</p>
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
              <p className="text-gray-400 text-sm mb-2">Discord</p>
              <p className="text-gray-200">{applicant.discordUsername}</p>
            </div>
          )}
        </div>
      }
    />
  );
}
