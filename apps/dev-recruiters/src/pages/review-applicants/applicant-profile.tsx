import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  ChevronLeft,
  Target,
  Clock,
  Mail,
  ExternalLink,
  FileText,
  Pencil,
} from 'lucide-react';
import agent from '@devlaunchers/utility/agent';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import { NewApplicant } from '@devlaunchers/models';
import { Typography } from '@devlaunchers/components/src/components/atoms';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import ApplicantDetailModal from './applicationDetailModal';

export default function ApplicantProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    userData,
    isLoading: userDataLoading,
    isAuthenticated,
  } = useUserDataContext();

  const [profile, setProfile] = useState<any>(null);
  const [applicants, setApplicants] = useState<NewApplicant[]>([]);
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState('');
  const [editingNotes, setEditingNotes] = useState(false);
  const [selectedApplicant, setSelectedApplicant] =
    useState<NewApplicant | null>(null);

  // Auth guard — only project leaders can view this page
  useEffect(() => {
    if (userDataLoading) return;
    if (isAuthenticated && userData) {
      const isLeader = userData.projects?.some((project: any) =>
        project.team?.leaders?.some(
          (l: any) => l.leader?.email === userData.email
        )
      );
      if (!isLeader) router.replace('/');
    }
  }, [isAuthenticated, userData, userDataLoading]);

  // Fetch profile and applicant records
  useEffect(() => {
    if (!id) return;
    let mounted = true;
    setLoading(true);

    (async () => {
      try {
        // Primary: fetch user profile by Strapi ID
        const profileRes = await agent.Profiles.get(id as string);
        if (!mounted) return;

        // Flatten Strapi response if wrapped in attributes
        const profileData = profileRes?.attributes
          ? { id: profileRes.id, ...profileRes.attributes }
          : profileRes;
        setProfile(profileData);

        // Secondary: fetch all applicant records for this user
        const applicantRes = await agent.Applicant.get(
          `filters[user][id][$eq]=${id}&populate=project&populate=opportunity`
        );
        if (!mounted) return;

        if (applicantRes && Array.isArray(applicantRes)) {
          const list = applicantRes.map((a: any) => ({
            id: a.id,
            ...(a.attributes ?? a),
          }));
          setApplicants(list);
        }
      } catch (err) {
        console.error('Failed to load applicant profile', err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [id]);

  const primaryApplicant = applicants[0] ?? null;

  const getInitials = (name: string) =>
    name
      ?.split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || '??';

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  };

  const getStatus = (applicant: NewApplicant) => {
    if (applicant.accepted)
      return { label: 'Accepted', classes: 'bg-purple-500/20 text-purple-300' };
    if (applicant.publishedAt)
      return { label: 'Applied', classes: 'bg-green-500/20 text-green-400' };
    return { label: 'Archived', classes: 'bg-gray-500/20 text-gray-400' };
  };

  const displayName =
    profile?.name || profile?.username || primaryApplicant?.name || 'Unknown';
  const displayEmail = profile?.email || primaryApplicant?.email || '';
  const displayPicture = profile?.profilePictureUrl;
  const discordUsername =
    profile?.discord?.username || primaryApplicant?.discordUsername;

  if (loading) {
    return (
      <div
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center"
        style={{ fontFamily: 'Nunito Sans, sans-serif' }}
      >
        <p className="text-gray-400">Loading profile…</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gray-950 text-white p-6"
      style={{ fontFamily: 'Nunito Sans, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Button type="secondary" onClick={() => router.back()}>
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Applicants</span>
          </Button>
        </div>

        <div className="flex gap-6 items-start">
          {/* ── LEFT SIDEBAR ── */}
          <div className="w-64 flex-shrink-0">
            {/* Avatar + name */}
            <div className="flex flex-col items-center text-center mb-6">
              {displayPicture ? (
                <img
                  src={displayPicture}
                  alt={displayName}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-purple-500/30 flex items-center justify-center mb-4">
                  <span
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: 'Abel, sans-serif' }}
                  >
                    {getInitials(displayName)}
                  </span>
                </div>
              )}
              <div style={{ fontFamily: 'Abel, sans-serif' }}>
                <Typography as="h1" size="xl2" textWeight="bold">
                  {displayName}
                </Typography>
              </div>
              {primaryApplicant?.role && (
                <Typography
                  as="p"
                  size="body_sm"
                  className="text-gray-400 mt-1"
                >
                  {primaryApplicant.role}
                </Typography>
              )}
            </div>

            {/* Info rows */}
            <div className="space-y-3 mb-6">
              {primaryApplicant?.level && (
                <div className="flex items-center gap-3 text-sm">
                  <Target className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Experience: {primaryApplicant.level}
                  </span>
                </div>
              )}
              {primaryApplicant?.commitment && (
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Available: {primaryApplicant.commitment} hr per week
                  </span>
                </div>
              )}
            </div>

            {/* Relevant Links */}
            <div className="border-t border-gray-800 pt-4">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                Relevant Links
              </p>
              <div className="space-y-2">
                {displayEmail && (
                  <a
                    href={`mailto:${displayEmail}`}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{displayEmail}</span>
                  </a>
                )}
                {primaryApplicant?.portfolioLink && (
                  <a
                    href={primaryApplicant.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    <span>Portfolio / Website</span>
                  </a>
                )}
                {primaryApplicant?.portfolioFileId && (
                  <a
                    href={`/api/resume/${primaryApplicant.portfolioFileId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <FileText className="w-4 h-4 flex-shrink-0" />
                    <span>View Resume/CV</span>
                  </a>
                )}
                {discordUsername && (
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-4 h-4 flex-shrink-0 text-center font-bold text-xs leading-4">
                      D
                    </span>
                    <span>{discordUsername}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── RIGHT CONTENT ── */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Applicant Overview Card */}
            {primaryApplicant && (
              <div className="bg-gray-900 rounded-xl p-6">
                <div style={{ fontFamily: 'Abel, sans-serif' }}>
                  <Typography
                    as="h2"
                    size="xl2"
                    textWeight="bold"
                    className="mb-5"
                  >
                    Applicant Overview
                  </Typography>
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <Typography as="p" size="body_lg" textWeight="bold">
                      Applicant Notes
                    </Typography>
                    <button
                      onClick={() => setEditingNotes(!editingNotes)}
                      className="text-gray-400 hover:text-white transition-colors p-1"
                      aria-label="Edit notes"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 italic mb-2">
                    Only visible to product leads
                  </p>
                  {editingNotes ? (
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-gray-800 text-white rounded-lg p-3 text-sm resize-none border border-gray-700 focus:outline-none focus:border-gray-500"
                      rows={3}
                      placeholder="Add notes about this applicant…"
                    />
                  ) : (
                    <p className="text-sm text-gray-400">
                      {notes || 'Placeholder'}
                    </p>
                  )}
                </div>

                {/* Skills */}
                {primaryApplicant.skills?.length > 0 && (
                  <div className="mb-6">
                    <Typography
                      as="p"
                      size="body_lg"
                      textWeight="bold"
                      className="mb-2"
                    >
                      Skills
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {primaryApplicant.skills.map((s, idx) => (
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

                {/* Experience Overview */}
                {primaryApplicant.experience && (
                  <div className="mb-6">
                    <Typography
                      as="p"
                      size="body_lg"
                      textWeight="bold"
                      className="mb-2"
                    >
                      Experience Overview
                    </Typography>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {primaryApplicant.experience}
                    </p>
                  </div>
                )}

                {/* Applicant Comments */}
                {primaryApplicant.reason && (
                  <div>
                    <Typography
                      as="p"
                      size="body_lg"
                      textWeight="bold"
                      className="mb-2"
                    >
                      Applicant Comments
                    </Typography>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {primaryApplicant.reason}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Applications */}
            {applicants.length > 0 && (
              <div>
                <div style={{ fontFamily: 'Abel, sans-serif' }}>
                  <Typography
                    as="h2"
                    size="xl2"
                    textWeight="bold"
                    className="mb-4"
                  >
                    Applications
                  </Typography>
                </div>
                <div className="space-y-3">
                  {applicants.map((applicant) => {
                    const status = getStatus(applicant);
                    return (
                      <div
                        key={applicant.id}
                        className="bg-gray-900 rounded-xl p-4 flex items-center justify-between gap-4"
                      >
                        <div className="min-w-0">
                          <div className="mb-2">
                            <span
                              className={`text-xs px-2.5 py-1 rounded-full font-medium ${status.classes}`}
                            >
                              {status.label}
                            </span>
                          </div>
                          <Typography as="p" size="body_lg" textWeight="bold">
                            {applicant.role}
                          </Typography>
                          {applicant.project?.slug && (
                            <p className="text-sm text-gray-400">
                              {applicant.project.slug}
                            </p>
                          )}
                          <p className="text-xs text-gray-500 mt-1">
                            Applied: {formatDate(applicant.publishedAt)}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <Button
                            type="secondary"
                            size="small"
                            onClick={() => setSelectedApplicant(applicant)}
                          >
                            View Application
                          </Button>
                          {status.label === 'Applied' && (
                            <Button
                              type="primary"
                              size="small"
                              onClick={() => {}}
                            >
                              Update Status
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Empty state */}
            {!loading && !primaryApplicant && (
              <div className="bg-gray-900 rounded-xl p-10 text-center">
                <p className="text-gray-400">
                  No application data found for this profile.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* View Application modal */}
      <ApplicantDetailModal
        isOpen={!!selectedApplicant}
        applicant={selectedApplicant}
        onClose={() => setSelectedApplicant(null)}
      />
    </div>
  );
}
