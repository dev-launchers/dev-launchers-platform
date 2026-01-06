import { useState } from 'react';
import { Opportunity } from '@devlaunchers/models';
import { agent } from '@devlaunchers/utility';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import FormErrorScroller from '@devlaunchers/components/src/utils/formErrorScroller';
import UploadModal from '../../FormPage/uploadModal';
import { atoms } from '@devlaunchers/components/src/components';
import { ModalUploadSection } from '../../FormPage/styledSignupForm';
import DragAndDrop from '../Drag and Drop/draganddrop';

interface Props {
  position: Opportunity;
  projectId: string;
  projectSlug: string;
  onCancel: () => void;
  onSuccess: () => void;
}

interface UploadProps {
  handleUploadCloseModal?: () => void;
  handleOkCloseModal?: () => void;
  handleCancelCloseModal?: () => void;
}

const ApplyRoleComponent = ({
  position,
  projectId,
  projectSlug,
  onCancel,
  onSuccess,
}: Props) => {
  const [filesUploaded, setFilesUploaded] = useState<any>({});
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [, setDeleteError] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [timeCommitment, setTimeCommitment] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Intermediate');
  const [availableDays, setAvailableDays] = useState<string[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    discordUsername: Yup.string().required('Discord Username is required'),
    githubUsername: Yup.string().nullable(),
    skills: Yup.string().required('Skills are required'),
    portfolioLink: Yup.string().nullable(true).default(undefined),
    commitment: Yup.string().required('Time commitment is required'),
    yearsOfExperience: Yup.number()
      .default(0)
      .typeError('Years of Experience is Required')
      .min(0, 'Must be 0 or greater')
      .max(100, 'Must be less than 100'),
    experience: Yup.string().required('Experience description is required'),
    reason: Yup.string().required('Please tell us your goals'),
    role: Yup.string().required('Role is required'),
    isAgeOver18: Yup.boolean()
      .required('Age confirmation is required')
      .oneOf([true], 'You must be 18 or older'),
    isTermsAgreed: Yup.boolean()
      .required('Terms agreement is required')
      .oneOf([true], 'You must agree to terms'),
  });

  function UploadDetailsModal() {
    const handleFiles = (uploadedFiles) => {
      console.log('Uploaded files:', uploadedFiles);
      setFilesUploaded(uploadedFiles);
    };

    return (
      <>
        <ModalUploadSection>
          <DragAndDrop
            filesUploaded={filesUploaded}
            onFilesUploaded={handleFiles}
          />
        </ModalUploadSection>
        <atoms.Box gap="30px">
          <atoms.Typography
            variant="secondary"
            size="body_sm"
            css={{ color: 'red' }}
          >
            {uploadError}
          </atoms.Typography>
        </atoms.Box>
      </>
    );
  }

  const handleUploadOpenModal = () => {
    setSelectedFiles([]);
    setFilesUploaded({});
    setUploadError('');
  };

  const handleRemoveFile = () => {
    setIsDeleting(true);
    const newArr = [...selectedFiles];
    try {
      agent.GoogledriveFile.delete(`${filesUploaded['id']}`)
        .then((responseBody) => {
          if (responseBody.status === 200) {
            newArr.splice(filesUploaded[0], 1);
            setSelectedFiles([]);
            setSelectedFiles(newArr);
            setFilesUploaded({});
            setIsDeleting(false);
            setDeleteError('');
          }
        })
        .catch((error) => {
          setDeleteError('Error deleting file');
          setIsDeleting(false);
          window.alert('Error deleting file. Please try again.');
        });
    } catch (error) {
      setDeleteError('Error deleting file');
      setIsDeleting(false);
      window.alert('Error deleting file. Please try again.');
    }
  };

  const handleDayToggle = (day: string) => {
    setAvailableDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Error Alert */}
        {submitError && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
            <p className="text-red-400 text-sm">{submitError}</p>
            <button
              onClick={() => setSubmitError(null)}
              className="text-red-400 text-xs mt-2 hover:text-red-300"
            >
              Dismiss
            </button>
          </div>
        )}

        <Formik
          initialValues={{
            discordUsername: '',
            name: '',
            email: '',
            age: 0,
            level: 'Intermediate',
            accepted: false,
            commitment: '',
            extraInfo: '',
            portfolioLink: null,
            portfolioFileId: null,
            yearsOfExperience: 0,
            experience: '',
            reason: '',
            zip: 0,
            role: '',
            project: { id: projectId, slug: projectSlug },
            skills: '',
            githubUsername: '',
            linkedinUrl: '',
            portfolioWebsite: '',
            availability: [],
            isAgeOver18: false,
            isTermsAgreed: false,
          }}
          onSubmit={(values: any, { setSubmitting }: FormikHelpers<any>) => {
            setSubmitting(true);
            setSubmitError(null);
            agent.Applicant.post({
              ...values,
              level: experienceLevel.toLowerCase(),
              portfolioLink: filesUploaded['webViewLink'],
              portfolioFileId: filesUploaded['id'],
              skills: values.skills
                .toString()
                .split(',')
                .map((skill: string) => ({ skill: skill.trim() })),
              role: position.attributes.title as string,
              project: { id: projectId, slug: projectSlug },
              availability: availableDays,
              opportunity: position.id,
            })
              .then((res) => {
                setSubmitting(false);
                onSuccess();
              })
              .catch((error) => {
                setSubmitting(false);
                setSubmitError(
                  'Failed to submit application. Please try again.'
                );
              });
          }}
          validationSchema={SignupSchema}
        >
          {(formik) => (
            <div className="space-y-8">
              {/* Back Button */}
              <button
                type="button"
                onClick={onCancel}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M19 12H5M12 19l-7-7 7-7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to Role Details
              </button>

              {/* About You Section */}
              <section>
                <h2 className="text-2xl font-bold mb-2">About You</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Let's get to know — We can't wait to collaborate!
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="johnsmith@gmail.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="discordUsername"
                      className="block text-sm mb-2"
                    >
                      Discord Username <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      We use discord to communicate and socialize around Dev
                      Launchers.
                    </p>
                    <input
                      type="text"
                      id="discordUsername"
                      name="discordUsername"
                      placeholder="john_smith"
                      value={formik.values.discordUsername}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                    {formik.touched.discordUsername &&
                      formik.errors.discordUsername && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.discordUsername}
                        </p>
                      )}
                  </div>

                  <div>
                    <label
                      htmlFor="githubUsername"
                      className="block text-sm mb-2"
                    >
                      GitHub Username
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      Where we do the real work! Building out code, web apps and
                      more.
                    </p>
                    <input
                      type="text"
                      id="githubUsername"
                      name="githubUsername"
                      placeholder="john_smith"
                      value={formik.values.githubUsername}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </section>

              {/* Your Role & Goals Section */}
              <section>
                <h2 className="text-2xl font-bold mb-2">Your Role & Goals</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Help us match you with the right workloads or team.
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="reason" className="block text-sm mb-2">
                      What are your goals for joining Dev Launchers?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      What are you looking to achieve from this collaboration?
                      Your goals could be to support our existing goals or your
                      own learning journey
                    </p>
                    <textarea
                      id="reason"
                      name="reason"
                      placeholder="I would like to be a Dev Launcher because..."
                      value={formik.values.reason}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      rows={4}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-none"
                    />
                    {formik.touched.reason && formik.errors.reason && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.reason}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm mb-2">
                      What role are you interested in?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      This is important to us so we can match you to the most
                      relevant work. You may be aligned with multiple roles!
                    </p>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      placeholder="e.g., Developer, Product Designer, UX Researcher"
                      value={formik.values.role}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                    {formik.touched.role && formik.errors.role && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.role}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="skills" className="block text-sm mb-2">
                      What skills do you have?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      Separate skills by commas (e.g., javascript, react,
                      backend). These can be soft skills or specific technical
                      skills.
                    </p>
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      placeholder="e.g., Figma, HTML/CSS, User Research, Github"
                      value={formik.values.skills}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                    {formik.touched.skills && formik.errors.skills && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.skills}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Availability & Commitment Section */}
              <section>
                <h2 className="text-2xl font-bold mb-2">
                  Availability & Commitment
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  Let's talk time. When and how often are you available to
                  collaborate?
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="commitment" className="block text-sm mb-2">
                      How many hours per week?{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      {position.attributes.commitmentHoursPerWeek != null
                        ? `This role requires a commitment of at least ${position.attributes.commitmentHoursPerWeek} hours per week.`
                        : 'We are not super strict about hours, but please be realistic.'}
                    </p>
                    <input
                      type="text"
                      id="commitment"
                      name="commitment"
                      placeholder="e.g., 10, 40, 2:30"
                      value={formik.values.commitment}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                    {formik.touched.commitment && formik.errors.commitment && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.commitment}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      Time Commitment <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-400 text-xs mb-3">
                      What's your ideal time commitment across the week per
                      quarter (example: 3 months)?
                    </p>
                    <div className="space-y-2">
                      {[
                        '0-5 Hrs Per Week',
                        '5-10 Hrs Per Week',
                        '10-20 Hrs Per Week',
                        '15-20 Hrs Per Week',
                        'Other',
                      ].map((option) => (
                        <label
                          key={option}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="timeCommitmentRadio"
                            value={option}
                            checked={timeCommitment === option}
                            onChange={(e) => setTimeCommitment(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      What days are you generally available to collaborate or
                      attend meetings? <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-400 text-xs mb-3">
                      This will determine which cross functional teams you'll
                      have the best experience with
                    </p>
                    <div className="space-y-2">
                      {[
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                      ].map((day) => (
                        <label
                          key={day}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="mr-2"
                            value={day}
                            checked={availableDays.includes(day)}
                            onChange={() => handleDayToggle(day)}
                          />
                          <span className="text-sm">{day}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section>
                <h2 className="text-2xl font-bold mb-2">Experience</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Tell us a bit about your background, so we can match you to
                  the role.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">
                      Experience Level
                    </label>
                    <p className="text-gray-400 text-xs mb-3">
                      Please select one option
                    </p>
                    <div className="space-y-2">
                      {[
                        {
                          value: 'Beginner',
                          desc: "I've just started or exploring a new field",
                        },
                        {
                          value: 'Intermediate',
                          desc: 'I have a few years of experience',
                        },
                        {
                          value: 'Mid-Level',
                          desc: "I'm fairly comfortable with projects or executing others",
                        },
                        {
                          value: 'Expert',
                          desc: "I've been doing this professionally for many years",
                        },
                      ].map((level) => (
                        <label
                          key={level.value}
                          className="flex items-start cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="experienceLevel"
                            value={level.value}
                            checked={experienceLevel === level.value}
                            onChange={(e) => {
                              setExperienceLevel(e.target.value);
                              formik.setFieldValue('level', e.target.value);
                            }}
                            className="mr-2 mt-1"
                          />
                          <div>
                            <div className="text-sm font-medium">
                              {level.value}
                            </div>
                            <div className="text-xs text-gray-400">
                              {level.desc}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      Upload your resume
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      Max file size 25MB, Only .doc, .pdf, .png and .jpg allowed
                    </p>
                    <atoms.Button
                      onClick={() => handleUploadOpenModal()}
                      className="text-sm text-blue-500 hover:text-blue-400"
                    >
                      Upload File
                    </atoms.Button>
                    <UploadModal
                      handleOpenModal={handleUploadOpenModal}
                      modalContent={<UploadDetailsModal />}
                    />
                    {filesUploaded['id'] && (
                      <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-green-400 font-medium">
                            ✓ {filesUploaded['name']}
                          </span>
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            disabled={isDeleting}
                            className="text-xs text-red-500 hover:text-red-400 disabled:opacity-50 font-medium"
                          >
                            {isDeleting ? 'Removing...' : 'Remove'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="linkedinUrl" className="block text-sm mb-2">
                      LinkedIn Profile
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      Link to your LinkedIn or Bento profile (where we can
                      review your career)
                    </p>
                    <input
                      type="text"
                      id="linkedinUrl"
                      name="linkedinUrl"
                      placeholder="john_smith"
                      value={formik.values.linkedinUrl}
                      onChange={formik.handleChange}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="portfolioWebsite"
                      className="block text-sm mb-2"
                    >
                      Portfolio Website
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      Link to your portfolio, website or online presence
                      (professional site preferred)
                    </p>
                    <input
                      type="text"
                      id="portfolioWebsite"
                      name="portfolioWebsite"
                      placeholder="john_smith"
                      value={formik.values.portfolioWebsite}
                      onChange={formik.handleChange}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm mb-2">
                      Please briefly describe your relevant experience{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      Write a few sentences about your background and relevant
                      experience
                    </p>
                    <textarea
                      id="experience"
                      name="experience"
                      placeholder="My experience with development / design is..."
                      value={formik.values.experience}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      rows={4}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-none"
                    />
                    {formik.touched.experience && formik.errors.experience && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.experience}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="extraInfo" className="block text-sm mb-2">
                      Anything else you would like to share with us?
                    </label>
                    <p className="text-gray-400 text-xs mb-2">
                      We'd like to know more about you or reason you joined
                      which we don't cover
                    </p>
                    <textarea
                      id="extraInfo"
                      name="extraInfo"
                      placeholder="I just want the Team Lead to know..."
                      value={formik.values.extraInfo}
                      onChange={formik.handleChange}
                      rows={4}
                      className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>
                </div>
              </section>

              {/* Legal Confirmation */}
              <section>
                <div className="space-y-3">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="isAgeOver18"
                      checked={formik.values.isAgeOver18}
                      onChange={(e) =>
                        formik.setFieldValue('isAgeOver18', e.target.checked)
                      }
                      className="mr-2 mt-1"
                    />
                    <span className="text-sm">
                      I'm 18 years of age or older{' '}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {formik.touched.isAgeOver18 && formik.errors.isAgeOver18 && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.isAgeOver18}
                    </p>
                  )}

                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="isTermsAgreed"
                      checked={formik.values.isTermsAgreed}
                      onChange={(e) =>
                        formik.setFieldValue('isTermsAgreed', e.target.checked)
                      }
                      className="mr-2 mt-1"
                    />
                    <span className="text-sm">
                      I've read and agree to the terms and conditions{' '}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {formik.touched.isTermsAgreed &&
                    formik.errors.isTermsAgreed && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.isTermsAgreed}
                      </p>
                    )}
                </div>
              </section>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onCancel}
                  className="flex-1 bg-transparent border border-gray-700 hover:border-gray-600 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    formik.handleSubmit();
                  }}
                  disabled={formik.isSubmitting}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formik.isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>

              <FormErrorScroller focusAfterScroll />
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ApplyRoleComponent;
