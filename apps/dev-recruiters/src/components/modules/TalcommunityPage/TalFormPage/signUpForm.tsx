import { atoms, organisms } from '@devlaunchers/components/src/components';
import FormErrorScroller from '@devlaunchers/components/src/utils/formErrorScroller';
import { agent } from '@devlaunchers/utility';
import { Field, Form, Formik, FormikHelpers, useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import ConfirmationModal from '../../DetailedPage/Confirmation/ConfirmationModal';
import { useRouter } from 'next/router';
import BoxContainer from '../../../common/BoxContainer';
import { Wrapper } from '../StyledTalcommunityPage';
import { DlTalCommUser } from '@devlaunchers/models/dltalcommuser';

// interface FormFields extends Omit<NewApplicant, 'level'> {
//   level: NewApplicant['level'] | '';
// }
interface Props {
  handleCloseModal: () => void;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name Field Entry is Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email Field Entry is Required'),
  roles: Yup.string().required('Roles Field Entry is Required'),
  skills: Yup.string().required('Skills Field Entry is Required'),
});

export default function TalCommForm({ handleCloseModal }: Props) {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [ageCheckbox, setAgeCheckbox] = useState<boolean | undefined>();
  const [termsCheckbox, setTermsCheckbox] = useState<boolean | undefined>();

  const handleSetAgeCheckbox = () => {
    setAgeCheckbox(!ageCheckbox);
  };

  const handleSetTermsCheckbox = () => {
    setTermsCheckbox(!termsCheckbox);
  };

  const handleOpenConfirmationModal = () => {
    setShowConfirmationModal(true);
  };
  const router = useRouter();
  const routeChange = (e) => {
    e.preventDefault();
    router.push('/join/oldjoin');
  };

  return (
    <Wrapper>
      <BoxContainer>
        <Formik
          initialValues={{
            name: '',
            email: '',
            roles: '',
            skills: '',
          }}
          onSubmit={(
            values: DlTalCommUser,
            { setSubmitting }: FormikHelpers<DlTalCommUser>
          ) => {
            setSubmitting(true);

            // Log the data being sent to the backend
            console.log('Data being sent to backend:', {
              data: {
                name: values.name,
                emailID: values.email,
                skills: values.skills,
                roles: values.roles,
              },
            });

            agent.Talcommuser.post({
              data: {
                name: values.name,
                emailID: values.email,
                skills: values.skills,
                roles: values.roles,
              },
            })
              .then((res) => {
                handleOpenConfirmationModal();
                setSubmitting(false);
              })
              .catch((error) => {
                setSubmitting(false);
                console.log(error.response);
                console.log(error.response?.data);
                console.log(error.response?.status);
              });
          }}
          validationSchema={SignupSchema}
        >
          {({
            errors,
            setFieldValue,
            touched,
            values,
            validateOnChange,
            handleChange,
            handleSubmit,
          }) => (
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
                      value={values.name}
                      required
                      touched={touched['name']}
                      error={errors.name}
                      onChange={handleChange}
                    />
                    <Field
                      as={organisms.FormField}
                      label="Your Email"
                      placeholder="johnsmith@gmail.com"
                      id="email"
                      name="email"
                      value={values.email}
                      required
                      touched={touched['email']}
                      error={errors.email}
                      onChange={handleChange}
                    />

                    <Field
                      as={organisms.FormField}
                      label="What skills/expertise do you have?"
                      placeholder="JavaScript, Python, React, etc.."
                      required
                      id="skills"
                      name="skills"
                      value={values.skills}
                      error={errors.skills}
                      touched={touched.skills}
                      onChange={handleChange}
                    />
                    <Field
                      as={organisms.FormField}
                      label="What roles are you interested in?"
                      placeholder="Frontend Developer, Product Manager, Marketing etc.."
                      required
                      id="roles"
                      name="roles"
                      value={values.roles}
                      error={errors.roles}
                      touched={touched.roles}
                      onChange={handleChange}
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
                        buttonSize="standard"
                        buttonType="primary"
                        as="a"
                        type="submit"
                        // onClick={routeChange} //add submit here to button property once backend is complete
                        onClick={handleSubmit}
                      >
                        SUBMIT
                      </atoms.Button>
                    </atoms.Box>
                  </atoms.Box>
                </atoms.Box>
                <ConfirmationModal
                  showModal={showConfirmationModal}
                  handleOpenModal={handleOpenConfirmationModal}
                  handleCloseModal={handleCloseModal}
                />
              </Form>
              {/* Move FormErrorScroller inside Formik's rendering context */}
              {/* <FormErrorScroller focusAfterScroll /> */}
            </atoms.Box>
          )}
        </Formik>
      </BoxContainer>
    </Wrapper>
  );
}
