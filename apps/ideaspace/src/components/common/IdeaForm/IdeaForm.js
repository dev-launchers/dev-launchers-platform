import React, { useState } from 'react';

import { Field, Form, Formik, FormikHelpers, useFormikContext } from 'formik';
import { atoms, organisms } from '@devlaunchers/components/src/components';
import popoverSvg from '../../../images/popover.svg';
import SubmissionButton from './SubmissionButton';
import EditionButton from './EditionButton';
import Dropdown from '@devlaunchers/components/components/organisms/Dropdown';
import useResponsive from '@devlaunchers/components/src/hooks/useResponsive';
import Checkbox from '@devlaunchers/components/src/components/Checkbox/Checkbox';

const IdeaForm = (
  {
    initialValues,
    SignupSchema,
    submitHandler,
    unsavedHandler,
    formButton,
    sending,
    clickHandler,
  },
  props
) => {
  const { errors } = props;
  const [disabling, setDisabling] = React.useState(true);
  const { isMobile } = useResponsive();

  const compareValuesToInitial = (values) => {
    const name = Object.keys(values);
    for (let i = 0; i < name.length; i++) {
      if (values[name[i]] !== initialValues[name[i]]) {
        return true;
      }
    }
    return false;
  };

  const AutoSubmitToken = () => {
    const { values, submitForm } = useFormikContext();
    React.useEffect(() => {
      if (compareValuesToInitial(values)) {
        unsavedHandler(true);
        setDisabling(false);
      } else {
        unsavedHandler(false);
        setDisabling(true);
      }
    }, [values]);
    return null;
  };

  return (
    <atoms.Box margin="1rem 1.5rem 3rem 1.5rem">
      <atoms.Box maxWidth="36rem" margin="auto" style={{ textAlign: 'left' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={submitHandler}
          enableReinitialize
        >
          {({ errors, setFieldValue, touched }) => (
            <Form>
              <AutoSubmitToken />
              <atoms.Typography type="h4">
                Idea Info
                <hr noshade="false" style={{ margin: '1rem auto 2rem' }} />
              </atoms.Typography>

              <atoms.Box flexDirection="column" gap="2rem">
                <atoms.Box maxWidth="20rem" flexDirection="column">
                  <Field
                    required
                    as={organisms.FormField}
                    label="Idea Name:&nbsp;"
                    placeholder="Title of your idea"
                    id="ideaName"
                    name="ideaName"
                    touched={touched['ideaName']}
                    error={errors.ideaName}
                  />
                </atoms.Box>
                <atoms.Box flexDirection="column">
                  <Field
                    required
                    as={organisms.OpenResponse}
                    label="Describe your idea:&nbsp;"
                    placeholder="What is your product idea? What are the primary features? Who would use it and why?"
                    id="description"
                    name="description"
                    touched={touched['description']}
                    error={errors.description}
                    cols={50}
                    rows={5}
                  />
                </atoms.Box>
                <atoms.Box flexDirection="column">
                  <Field
                    required
                    as={organisms.OpenResponse}
                    label="Do you have any relevant experience in software development or design that you'd like to utilize?&nbsp;"
                    placeholder="If you have any relevant experience in development or design, please explain here. This information will be shared with Dev Launchers to make decisions on planning and team roles. It won't be publicly shown on the workshopping page."
                    id="experience"
                    name="experience"
                    touched={touched['experience']}
                    error={errors.experience}
                    cols={50}
                    rows={5}
                  />
                </atoms.Box>
                <atoms.Box flexDirection="column">
                  <Field
                    as={organisms.OpenResponse}
                    label="Describe your expected users:"
                    placeholder="Describe your audience, including their demographic information, technology experience, why they would be interested in your idea, etc."
                    id="targetAudience"
                    name="targetAudience"
                    cols={50}
                    rows={5}
                  />
                </atoms.Box>
                <atoms.Box flexDirection="column">
                  <Field
                    required
                    as={organisms.OpenResponse}
                    label="What Features Would Your Product Have?&nbsp;"
                    placeholder="A list of possible features your product could have."
                    id="features"
                    name="features"
                    touched={touched['features']}
                    error={errors.features}
                    cols={50}
                    rows={5}
                  />
                </atoms.Box>
                <Field
                  as={organisms.OpenResponse}
                  label="Anything else you would like to share to support your idea?"
                  placeholder="Want to share something else not listed above?"
                  id="extraInfo"
                  name="extraInfo"
                  cols={50}
                  rows={5}
                />
                <Field
                  as={organisms.FormField}
                  label="What's a catchy tagline for your idea that sums up your value and purpose?"
                  placeholder="Your tagline"
                  id="tagline"
                  name="tagline"
                />

                <atoms.Box flexDirection="column">
                  <atoms.Typography
                    type="label"
                    style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}
                  >
                    What level of involvement would you like to have after this
                    submission?<span style={{ color: 'red' }}>&nbsp;*</span>
                    <atoms.ToolTip
                      content="As an “idea owner” you'll own the idea and be in charge of refine and update the information on the workshopping page."
                      direction="right"
                      delay={100}
                      style={{ marginLeft: '0.1rem', marginBottom: '0.7rem' }}
                    >
                      <img alt="submit_image" src={popoverSvg} />
                    </atoms.ToolTip>
                  </atoms.Typography>
                  <atoms.Box flexDirection="column" alignItems="flex-start">
                    <atoms.Radio
                      onChange={(e, label) =>
                        setFieldValue('involveLevel', label)
                      }
                      label='I want to "own" this idea from beginning to end'
                    />
                    <atoms.Radio
                      onChange={(e, label) =>
                        setFieldValue('involveLevel', label)
                      }
                      label='I want to "own" this idea only after it is approved as a project'
                    />
                    <atoms.Radio
                      onChange={(e, label) =>
                        setFieldValue('involveLevel', label)
                      }
                      label='I want to "own" this idea during workshopping only'
                    />
                    <atoms.Radio
                      onChange={(e, label) =>
                        setFieldValue('involveLevel', label)
                      }
                      label="I don't want to be involved after submitting"
                    />
                  </atoms.Box>
                  <atoms.Typography
                    type="p"
                    style={{
                      marginLeft: '1rem',
                      marginTop: '0.5rem',
                      color: '#F03D3E',
                      fontSize: '0.875rem',
                    }}
                  >
                    {' '}
                    {errors.involveLevel}
                  </atoms.Typography>
                </atoms.Box>

                <atoms.Typography type="p">
                  After submitting your idea, it will be posted in the
                  Workshopping area to begin collaboration with other Dev
                  Launchers.
                </atoms.Typography>

                <atoms.Box style={{ fontSize: '1rem', alignItems: 'center' }}>
                  <Checkbox disabled={false} required />
                  <atoms.Typography type="p">
                    &nbsp;I have read and agree to the Terms and Conditions.
                    <span style={{ color: 'red' }}>&nbsp;*</span>
                  </atoms.Typography>
                </atoms.Box>

                <atoms.Box justifyContent="flex-end" gap="1rem">
                  {formButton == 'submit' ? (
                    <SubmissionButton sending={sending} />
                  ) : (
                    <EditionButton
                      clickHandlerButton={clickHandler}
                      sending={sending}
                      disabling={disabling}
                    />
                  )}
                </atoms.Box>
              </atoms.Box>
            </Form>
          )}
        </Formik>
      </atoms.Box>
    </atoms.Box>
  );
};

export default IdeaForm;
