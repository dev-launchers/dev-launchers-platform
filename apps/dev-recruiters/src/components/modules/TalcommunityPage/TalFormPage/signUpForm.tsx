import { atoms, organisms } from '@devlaunchers/components/src/components';
import theme from '@devlaunchers/components/src/styles/theme';
import FormErrorScroller from '@devlaunchers/components/src/utils/formErrorScroller';
import { Opportunity } from '@devlaunchers/models';
import { Checkbox } from '@devlaunchers/components/src/components/Checkbox';

import { agent } from '@devlaunchers/utility';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as Yup from 'yup';
import ConfirmationModal from '../../DetailedPage/Confirmation/ConfirmationModal';
import { useRouter } from 'next/router';
import BoxContainer from '../../../common/BoxContainer';
import { Wrapper } from '../StyledTalcommunityPage';

// interface FormFields extends Omit<NewApplicant, 'level'> {
//   level: NewApplicant['level'] | '';
// }
interface Props {
  handleCloseModal: () => void;
  position: Opportunity;
}

export default function TalCommForm({ handleCloseModal, position }: Props) {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name Field Entry is Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email Field Entry is Required'),
    roles: Yup.string().required('Roles Field Entry is Required'),
    skills: Yup.string().required('Skills Field Entry is Required'),
  });
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [checkCheckbox, setCheckCheckbox] = useState();

  const handleSetCheckCheckbox = () => {
    setCheckCheckbox(checkCheckbox!);
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
            values: Talcommuser,
            { setSubmitting }: FormikHelpers<Talcommuser>
          ) => {
            setSubmitting(true);
            agent.Talcommuser.post({
              ...values,
              //@ts-ignore
              // level: values.level.toLowerCase(),
              skills: values.skills
                .toString()
                .split(',')
                .map((skill) => ({ skill: skill })),
              roles: 'title' as string, // role: position.title as string,
              // project:  router.query.project as string,
              // id: '5' as string, // id: position.id as string,
            })
              .then((res) => {
                handleOpenConfirmationModal();
                setSubmitting(false);
              })
              .catch((error) => {
                setSubmitting(false);
                console.log(error);
                console.log(error.response);
                console.log(error.response.data);
                console.log(error.response.status);
              });
          }}
          validationSchema={SignupSchema}
        >
          {({ errors, setFieldValue, touched, values }) => (
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
                      id="email"
                      name="email"
                      required
                      touched={touched['email']}
                      error={errors.email}
                    />

                    <Field
                      as={organisms.FormField}
                      label="What skills/expertise do you have?"
                      placeholder="JavaScript, Python, React, etc.."
                      required
                      id="skills"
                      name="skills"
                      error={errors.skills}
                      // onChange={handleChange}
                    />
                    <Field
                      as={organisms.FormField}
                      label="What roles are you interested in?"
                      placeholder="Frontend Developer, Product Manager, Marketing etc.."
                      required
                      id="roles"
                      name="roles"
                      error={errors.roles}
                      // onChange={handleChange}
                    />

                    <atoms.Typography type="p">
                      We require users to be 18 years old or older. Please
                      confirm below.
                    </atoms.Typography>
                    <atoms.Checkbox
                      label="I am 18 years old or older."
                      disabled={false}
                      onChange={handleSetCheckCheckbox}
                      required
                    />
                    <Checkbox
                      label="I have read and agreed to the terms and conditions"
                      disabled={false}
                      onChange={handleSetCheckCheckbox}
                      required
                      // className="bg-transparent"
                    />
                    <atoms.Box maxWidth="50%">
                      <atoms.Button
                        buttonSize="standard"
                        buttonType="primary"
                        as="a"
                        onClick={routeChange} //add submit here to button property once backend is complete
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
