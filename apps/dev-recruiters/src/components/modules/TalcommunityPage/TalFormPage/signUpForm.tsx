import { atoms, organisms } from '@devlaunchers/components/src/components';
import FormErrorScroller from '@devlaunchers/components/src/utils/formErrorScroller';
import { agent } from '@devlaunchers/utility';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import ConfirmationModal from '../../DetailedPage/Confirmation/ConfirmationModal';
import { useRouter } from 'next/router';
import BoxContainer from '../../../common/BoxContainer';
import { Wrapper } from '../StyledTalcommunityPage';

interface Props {
  handleCloseModal: () => void;
}

interface TalCommFormValues {
  name: string;
  emailID: string;
  skills: string;
  roles: string;
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
    <Wrapper>
      <BoxContainer>
        <Formik
          initialValues={{
            name: '',
            emailID: '',
            roles: '',
            skills: '',
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
                console.error(
                  'Submission Error:',
                  error.response || error.message || error
                );
              });
          }}
          validationSchema={SignupSchema}
        >
          {({ errors, touched, isSubmitting }) => (
            <atoms.Box paddingInline="0.5rem" justifyContent="center">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />

              <Form>
                <atoms.Box flexDirection="column" margin="auto">
                  <atoms.Box
                    flexDirection="column"
                    gap="32px"
                    paddingBlock="2rem"
                    maxWidth="fit-content"
                  >
                    <Field
                      as={organisms.FormField}
                      label="Your Full Name"
                      placeholder="John Smith"
                      id="name"
                      name="name"
                      required
                      touched={touched['name']}
                      error={errors.name}
                    />
                    <Field
                      as={organisms.FormField}
                      label="Your Email"
                      placeholder="johnsmith@gmail.com"
                      id="emailID"
                      name="emailID"
                      required
                      touched={touched['emailID']}
                      error={errors.emailID}
                    />

                    <Field
                      as={organisms.FormField}
                      label="What skills/expertise do you have?"
                      placeholder="JavaScript, Python, React, etc.."
                      required
                      id="skills"
                      name="skills"
                      error={errors.skills}
                      touched={touched.skills}
                    />
                    <Field
                      as={organisms.FormField}
                      label="What roles are you interested in?"
                      placeholder="Frontend Developer, Product Manager, Marketing etc.."
                      required
                      id="roles"
                      name="roles"
                      error={errors.roles}
                      touched={touched.roles}
                    />

                    <atoms.Typography type="p">
                      We require users to be 18 years old or older. Please
                      confirm below.
                    </atoms.Typography>
                    <atoms.Checkbox
                      label="I am 18 years old or older."
                      disabled={false}
                      onChange={handleSetAgeCheckbox}
                      required
                    />
                    <atoms.Checkbox
                      label="I have read and agreed to the terms and conditions"
                      disabled={false}
                      onChange={handleSetTermsCheckbox}
                      required
                    />

                    <atoms.Box maxWidth="50%">
                      <atoms.Button
                        type="submit"
                        disabled={isSubmitting}
                        buttonSize="medium"
                        buttonType="primary"
                        className="w-full"
                      >
                        SUBMIT
                      </atoms.Button>
                    </atoms.Box>
                  </atoms.Box>
                </atoms.Box>
                <FormErrorScroller focusAfterScroll />
                <ConfirmationModal
                  showModal={showConfirmationModal}
                  handleOpenModal={handleOpenConfirmationModal}
                  handleCloseModal={handleCloseModal}
                />
              </Form>
            </atoms.Box>
          )}
        </Formik>
      </BoxContainer>
    </Wrapper>
  );
}
