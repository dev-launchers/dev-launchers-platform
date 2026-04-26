import { atoms, organisms } from '@devlaunchers/components/src/components';
import FormErrorScroller from '@devlaunchers/components/src/utils/formErrorScroller';
import { agent } from '@devlaunchers/utility';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import ConfirmationModal from '../../DetailedPage/Confirmation/ConfirmationModal';
import { useRouter } from 'next/router';
import BoxContainer from '../../../common/BoxContainer';
import { Button } from '@devlaunchers/components/src/components/atoms';

interface Props {
  handleCloseModal: () => void;
}

interface TalCommFormValues {
  name: string;
  emailID: string;
  skills: string;
  roles: string;
  otherInfo: string;
}

export default function TalCommForm({ handleCloseModal }: Props) {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name Field Entry is Required'),
    emailID: Yup.string()
      .email('Invalid email')
      .required('Email Field Entry is Required'),
    roles: Yup.string().required('Roles Field Entry is Required'),
    skills: Yup.string().required('Skills Field Entry is Required'),
  });

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [ageCheckbox, setAgeCheckbox] = useState<boolean | undefined>();
  const [termsCheckbox, setTermsCheckbox] = useState<boolean | undefined>();
  const router = useRouter();

  const handleSetAgeCheckbox = () => {
    setAgeCheckbox(!ageCheckbox);
  };

  const handleSetTermsCheckbox = () => {
    setTermsCheckbox(!termsCheckbox);
  };

  const handleOpenConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  return (
    <BoxContainer>
      <Formik
        initialValues={{
          name: '',
          emailID: '',
          roles: '',
          skills: '',
          otherInfo: '',
        }}
        onSubmit={(
          values: TalCommFormValues,
          { setSubmitting }: FormikHelpers<TalCommFormValues>
        ) => {
          setSubmitting(true);
          console.log('Formik Values at Submit:', values);

          console.log('Data being sent to backend:', {
            data: {
              name: values.name,
              emailID: values.emailID,
              skills: values.skills,
              roles: values.roles,
            },
          });

          agent.DlTalcommuser.post({
            data: {
              name: values.name,
              emailID: values.emailID,
              skills: values.skills,
              roles: values.roles,
            },
          })
            .then((res) => {
              console.log(res);
              handleOpenConfirmationModal();
              router.push('/join/oldjoin');
              setSubmitting(false);
            })
            .catch((error) => {
              setSubmitting(false);
              console.error('Submission Error:', error);
            });
        }}
        validationSchema={SignupSchema}
      >
        {({ errors, touched, isSubmitting }) => (
          <atoms.Box justifyContent="center" width="100%">
            <Form>
              {/* ISSUE #2819: Enhanced form styling for Figma design alignment */}
              <style>{`
                .tal-form input { 
                  color: #1a1a1a !important; 
                  background: ${({ theme }) => theme?.colors?.Cultured || '#f8f8f8'} !important;
                  border: 1px solid ${({ theme }) => theme?.colors?.OuterSpace || '#454d58'} !important;
                  border-radius: 8px !important;
                  padding: 12px 16px !important;
                  font-family: ${({ theme }) => theme?.fonts?.normal || 'Nunito Sans'} !important;
                } 
                .tal-form label { 
                  margin-left: 0 !important; 
                  color: ${({ theme }) => theme?.colors?.White || '#ffffff'} !important;
                  font-family: ${({ theme }) => theme?.fonts?.normal || 'Nunito Sans'} !important;
                  font-weight: 600 !important;
                  margin-bottom: 8px !important;
                } 
                .tal-form .form-field-container {
                  margin-bottom: 24px !important;
                }
                @media (max-width: 640px) { 
                  .tal-form-inner { 
                    padding-left: 1rem; 
                    padding-right: 1rem; 
                  } 
                }
              `}</style>
              <div className="tal-form text-white">
                <div className="tal-form-inner">
                  <atoms.Box flexDirection="column">
                    <atoms.Box
                      flexDirection="column"
                      gap="32px"
                      paddingBlock="3rem"
                    >
                      <Field
                        as={organisms.FormField}
                        label="Full Name"
                        placeholder="Jane Smith"
                        id="name"
                        name="name"
                        required
                        touched={touched['name']}
                        error={errors.name}
                      />
                      <Field
                        as={organisms.FormField}
                        label="Your Email"
                        placeholder="jane_smith@gmail.com"
                        id="emailID"
                        name="emailID"
                        required
                        touched={touched['emailID']}
                        error={errors.emailID}
                      />

                      <Field
                        as={organisms.FormField}
                        label="What roles are you curious about or excited to explore?"
                        placeholder="e.g., Developer, Product Designer, UX Researcher"
                        required
                        id="roles"
                        name="roles"
                        error={errors.roles}
                        touched={touched.roles}
                      />

                      <Field
                        as={organisms.FormField}
                        label={
                          <span>
                            What skills do you have?
                            <span className="block text-sm font-normal mt-1 opacity-70">
                              List your current skills, separated by commas
                              (e.g., Figma, HTML/CSS, Accessibility Testing)
                            </span>
                          </span>
                        }
                        placeholder="e.g., Figma, HTML/CSS, User Interviews, GitHub, C"
                        required
                        id="skills"
                        name="skills"
                        error={errors.skills}
                        touched={touched.skills}
                      />

                      <Field
                        as={organisms.FormField}
                        label={
                          <span>
                            Anything else you would like to share with us?
                            <span className="block text-sm font-normal mt-1 opacity-70">
                              Tell us what you're passionate about, what you're
                              learning, or a fun fact about you.
                            </span>
                          </span>
                        }
                        placeholder="I would like to be a Dev Launcher because..."
                        id="otherInfo"
                        name="otherInfo"
                      />

                      <div>
                        <atoms.Typography as="p">
                          To join the Dev Launchers community, you must be at
                          least 18 years old. *
                        </atoms.Typography>
                        <atoms.Typography
                          as="span"
                          size="body_sm"
                          className="block mt-1 opacity-70"
                        >
                          Please confirm your eligibility and accept our terms.
                        </atoms.Typography>
                      </div>
                      <atoms.Checkbox
                        label="I confirm I'm 18 years or older."
                        disabled={false}
                        checked={ageCheckbox}
                        onChange={handleSetAgeCheckbox}
                        theme="brand"
                        required
                      />
                      <atoms.Checkbox
                        label="I've read and agree to the terms and conditions."
                        disabled={false}
                        checked={termsCheckbox}
                        onChange={handleSetTermsCheckbox}
                        theme="brand"
                        required
                      />

                      <div className="w-fit">
                        <Button
                          color="nebula"
                          size="medium"
                          disabled={isSubmitting}
                        >
                          Join The Community
                        </Button>
                      </div>
                    </atoms.Box>
                  </atoms.Box>
                  <FormErrorScroller focusAfterScroll />
                  <ConfirmationModal
                    showModal={showConfirmationModal}
                    handleOpenModal={handleOpenConfirmationModal}
                    handleCloseModal={handleCloseModal}
                  />
                </div>
              </div>
            </Form>
          </atoms.Box>
        )}
      </Formik>
    </BoxContainer>
  );
}
