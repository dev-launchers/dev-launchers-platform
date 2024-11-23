import React, { useState } from 'react';

import { Field, Form, Formik, FormikHelpers, useFormikContext } from 'formik';
import { atoms, organisms } from '@devlaunchers/components/src/components';
import popoverSvg from '../../../images/popover.svg';
import SubmissionButton from './SubmissionButton';
import EditionButton from './EditionButton';
import Dropdown from '@devlaunchers/components/components/organisms/Dropdown';
import useResponsive from '@devlaunchers/components/src/hooks/useResponsive';
import Checkbox from '@devlaunchers/components/src/components/Checkbox/Checkbox';
import Link from 'next/link';
import {
  TextAreaWrapper,
  FieldWrapper,
  FieldLabel,
  RequiredAsterisk,
  StyledTextArea,
  CharacterCounter,
  StyledInput,
  GroupWrapper,
  GroupLabel,
  RadioButton,
  RadioInput,
  RadioLabel,
  ErrorText,
  SuccessText,
} from '../../modules/SubmissionForm/StyledSubmissionForm';

import SuccessAlert from '../SubmissionAlert/SuccessAlert.js';

const compareValuesToInitial = (values, initialValues) => {
  const name = Object.keys(values);
  for (let i = 0; i < name.length; i++) {
    if (values[name[i]] !== initialValues[name[i]]) {
      return true;
    }
  }
  return false;
};

const autoSaveLocalStorage = (values) => {
  localStorage.setItem('ideaFormData', JSON.stringify(values));
};

const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem('ideaFormData');
  return savedData ? JSON.parse(savedData) : null;
};

const clearLocalStorage = () => {
  localStorage.removeItem('ideaFormData');
  localStorage.removeItem('involveLevel');
};

const AutoSubmitToken = ({ setDisabling, unsavedHandler, initialValues }) => {
  const { values } = useFormikContext();
  const [previousValues, setPreviousValues] = useState(values);
  React.useEffect(() => {
    autoSaveLocalStorage(values);
    if (compareValuesToInitial(values, initialValues)) {
      unsavedHandler(true);
      setDisabling(false);
    } else if (JSON.stringify(values) !== JSON.stringify(previousValues)) {
      unsavedHandler(false);
      setDisabling(true);
      setPreviousValues(values);
    }
  }, [values, previousValues, initialValues, setDisabling, unsavedHandler]);
  return null;
};

const IdeaForm = ({
  initialValues,
  SignupSchema,
  submitHandler,
  unsavedHandler,
  formButton,
  sending,
  clickHandler,
}) => {
  const [focusedField, setFocusedField] = useState(null);
  const [disabling, setDisabling] = React.useState(true);
  const { isMobile } = useResponsive();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const isFieldCompleted = (value, error, fieldName) => {
    return value && !error && focusedField !== fieldName;
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const savedData = loadFromLocalStorage();
  const newInitialValues = { ...initialValues, ...savedData };

  React.useEffect(() => {
    localStorage.removeItem('ideaFormData');
    return () => {
      localStorage.removeItem('ideaFormData');
    };
  }, []);

  const handleSubmit = (values, actions) => {
    submitHandler(values, actions);
    setSuccessMessageVisible(true);
    actions.resetForm({ values: initialValues });
    clearLocalStorage();
  };

  const renderFieldMessage = (
    fieldName,
    value,
    touched,
    error,
    maxLength,
    isRequired = true
  ) => {
    if (focusedField === fieldName) {
      return (
        <CharacterCounter isLimit={value?.length === maxLength}>
          {value?.length || 0}/{maxLength} characters
        </CharacterCounter>
      );
    } else {
      if (isRequired) {
        if (error && touched) {
          return <ErrorText>{error}</ErrorText>;
        }
      }
      if (value && !error) {
        return <SuccessText>Completed!</SuccessText>;
      }
    }
    return null;
  };

  const scrollToError = (errors) => {
    const firstError = Object.keys(errors)[0];
    if (firstError) {
      const errorElement = document.querySelector(
        `[data-field="${firstError}"]`
      );

      if (errorElement) {
        setTimeout(() => {
          errorElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }, 100);
      }
    }
  };

  return (
    <atoms.Box
      margin="1.5rem 0rem"
      style={{
        backgroundColor: 'rgba(244, 240, 249, 1)',
        padding: '40px 0',
      }}
    >
      <atoms.Box maxWidth="36rem" margin="auto" style={{ textAlign: 'left' }}>
        <Formik
          initialValues={newInitialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
          enableReinitialize
          validateOnMount={true}
        >
          {({
            values,
            setFieldValue,
            errors,
            touched,
            handleBlur,
            submitForm,
            isValid,
            setFieldTouched,
            validateForm,
          }) => (
            <Form>
              <AutoSubmitToken
                setDisabling={setDisabling}
                unsavedHandler={unsavedHandler}
                initialValues={initialValues}
              />
              <atoms.Typography type="h4">
                Idea Info
                <hr style={{ margin: '1rem auto 2rem' }} />
              </atoms.Typography>

              <atoms.Box flexDirection="column" gap="2rem">
                {/* Idea Name Field */}
                <FieldWrapper data-field="ideaName">
                  <FieldLabel>
                    Idea Name
                    <RequiredAsterisk>*</RequiredAsterisk>
                  </FieldLabel>
                  <TextAreaWrapper
                    hasError={touched.ideaName && errors.ideaName}
                    isCompleted={isFieldCompleted(
                      values.ideaName,
                      errors.ideaName,
                      'ideaName'
                    )}
                    isFocused={focusedField === 'ideaName'}
                  >
                    <StyledInput
                      name="ideaName"
                      placeholder="Enter your idea name"
                      value={values.ideaName || ''}
                      onChange={(e) =>
                        setFieldValue('ideaName', e.target.value.slice(0, 80))
                      }
                      maxLength={80}
                      onFocus={() => setFocusedField('ideaName')}
                      onBlur={(e) => {
                        handleBlur(e);
                        setFocusedField(null);
                      }}
                    />
                  </TextAreaWrapper>
                  {renderFieldMessage(
                    'ideaName',
                    values.ideaName,
                    touched.ideaName,
                    errors.ideaName,
                    80
                  )}
                </FieldWrapper>

                {/* Description Field */}
                <FieldWrapper data-field="description">
                  <FieldLabel>
                    Describe your idea:
                    <RequiredAsterisk>*</RequiredAsterisk>
                  </FieldLabel>
                  <TextAreaWrapper
                    hasError={touched.description && errors.description}
                    isCompleted={isFieldCompleted(
                      values.description,
                      errors.description,
                      'description'
                    )}
                    isFocused={focusedField === 'description'}
                  >
                    <StyledTextArea
                      name="description"
                      placeholder="What is your product idea?"
                      value={values.description || ''}
                      onChange={(e) =>
                        setFieldValue(
                          'description',
                          e.target.value.slice(0, 1000)
                        )
                      }
                      maxLength={1000}
                      onFocus={() => setFocusedField('description')}
                      onBlur={(e) => {
                        handleBlur(e);
                        setFocusedField(null);
                      }}
                    />
                  </TextAreaWrapper>
                  {renderFieldMessage(
                    'description',
                    values.description,
                    touched.description,
                    errors.description,
                    1000
                  )}
                </FieldWrapper>

                {/* Experience Field */}
                <FieldWrapper data-field="experience">
                  <FieldLabel>
                    What experience do you have with this idea?
                    <RequiredAsterisk>*</RequiredAsterisk>
                  </FieldLabel>
                  <TextAreaWrapper
                    hasError={touched.experience && errors.experience}
                    isCompleted={isFieldCompleted(
                      values.experience,
                      errors.experience,
                      'experience'
                    )}
                    isFocused={focusedField === 'experience'}
                  >
                    <StyledTextArea
                      name="experience"
                      placeholder="Share your experience relevant to this idea"
                      value={values.experience || ''}
                      onChange={(e) =>
                        setFieldValue(
                          'experience',
                          e.target.value.slice(0, 1000)
                        )
                      }
                      maxLength={1000}
                      onFocus={() => setFocusedField('experience')}
                      onBlur={(e) => {
                        handleBlur(e);
                        setFocusedField(null);
                      }}
                    />
                  </TextAreaWrapper>
                  {renderFieldMessage(
                    'experience',
                    values.experience,
                    touched.experience,
                    errors.experience,
                    1000
                  )}
                </FieldWrapper>

                {/* Target Audience Field */}
                <FieldWrapper data-field="targetAudience">
                  <FieldLabel>
                    Describe your expected users:
                    <RequiredAsterisk>*</RequiredAsterisk>
                  </FieldLabel>
                  <TextAreaWrapper
                    hasError={touched.targetAudience && errors.targetAudience}
                    isCompleted={isFieldCompleted(
                      values.targetAudience,
                      errors.targetAudience,
                      'targetAudience'
                    )}
                    isFocused={focusedField === 'targetAudience'}
                  >
                    <StyledTextArea
                      name="targetAudience"
                      placeholder="Describe your audience, including their demographic information, technology experience, why they would be interested in your idea, etc."
                      value={values.targetAudience || ''}
                      onChange={(e) => {
                        const text = e.target.value.slice(0, 1000);
                        setFieldValue('targetAudience', text);
                      }}
                      maxLength={1000}
                      onFocus={() => setFocusedField('targetAudience')}
                      onBlur={(e) => {
                        handleBlur(e);
                        setFocusedField(null);
                      }}
                    />
                  </TextAreaWrapper>
                  {renderFieldMessage(
                    'targetAudience',
                    values.targetAudience,
                    touched.targetAudience,
                    errors.targetAudience,
                    1000
                  )}
                </FieldWrapper>

                {/* Features Field - Required */}
                <FieldWrapper data-field="features">
                  <FieldLabel>
                    What Features Would Your Product Have?
                    <RequiredAsterisk>*</RequiredAsterisk>
                  </FieldLabel>
                  <TextAreaWrapper
                    hasError={touched.features && errors.features}
                    isCompleted={isFieldCompleted(
                      values.features,
                      errors.features,
                      'features'
                    )}
                    isFocused={focusedField === 'features'}
                  >
                    <StyledTextArea
                      name="features"
                      placeholder="A list of possible features your product could have"
                      value={values.features || ''}
                      onChange={(e) => {
                        const text = e.target.value.slice(0, 1000);
                        setFieldValue('features', text);
                      }}
                      maxLength={1000}
                      onFocus={() => handleFocus('features')}
                      onBlur={(e) => {
                        handleBlur(e);
                        setFocusedField(null);
                      }}
                    />
                  </TextAreaWrapper>
                  {renderFieldMessage(
                    'features',
                    values.features,
                    touched.features,
                    errors.features,
                    1000
                  )}
                </FieldWrapper>

                {/* Extra Info Field - Optional */}
                <FieldWrapper>
                  <FieldLabel>
                    Anything else you would like to share to support your idea?{' '}
                    <span style={{ color: '#666666', fontWeight: '300' }}>
                      (Optional)
                    </span>
                  </FieldLabel>
                  <TextAreaWrapper
                    hasError={touched.extraInfo && errors.extraInfo}
                    isCompleted={isFieldCompleted(
                      values.extraInfo,
                      errors.extraInfo,
                      'extraInfo'
                    )}
                    isFocused={focusedField === 'extraInfo'}
                  >
                    <StyledTextArea
                      name="extraInfo"
                      placeholder="Want to share something else not listed above?"
                      value={values.extraInfo || ''}
                      onChange={(e) => {
                        const text = e.target.value.slice(0, 1000);
                        setFieldValue('extraInfo', text);
                      }}
                      maxLength={1000}
                      onFocus={() => handleFocus('extraInfo')}
                      onBlur={(e) => {
                        handleBlur(e);
                        setFocusedField(null);
                      }}
                    />
                  </TextAreaWrapper>
                  {renderFieldMessage(
                    'extraInfo',
                    values.extraInfo,
                    touched.extraInfo,
                    errors.extraInfo,
                    1000,
                    false
                  )}
                </FieldWrapper>

                {/* Tagline Field - Optional */}
                <FieldWrapper>
                  <FieldLabel>
                    What's a catchy tagline for your idea that sums up your
                    value and purpose? (Optional)
                  </FieldLabel>
                  <TextAreaWrapper
                    hasError={touched.tagline && errors.tagline}
                    isCompleted={isFieldCompleted(
                      values.tagline,
                      errors.tagline,
                      'tagline'
                    )}
                    isFocused={focusedField === 'tagline'}
                  >
                    <StyledInput
                      name="tagline"
                      placeholder="Your tagline"
                      value={values.tagline || ''}
                      onChange={(e) => {
                        const text = e.target.value.slice(0, 80);
                        setFieldValue('tagline', text);
                      }}
                      maxLength={80}
                      onFocus={() => handleFocus('tagline')}
                      onBlur={(e) => {
                        handleBlur(e);
                        setFocusedField(null);
                      }}
                    />
                  </TextAreaWrapper>
                  {renderFieldMessage(
                    'tagline',
                    values.tagline,
                    touched.tagline,
                    errors.tagline,
                    80,
                    false
                  )}
                </FieldWrapper>

                {/* Involvement Level - Required */}
                <GroupWrapper data-field="involveLevel">
                  <GroupLabel>
                    What level of involvement would you like to have after this
                    submission?
                    <RequiredAsterisk>*</RequiredAsterisk>
                    <atoms.ToolTip
                      content="As an 'idea owner' you'll own the idea and be in charge of refining and updating the information on the workshopping page."
                      direction="right"
                      delay={100}
                      style={{
                        marginLeft: '0.1rem',
                        marginBottom: '0.5rem',
                        width: '1rem',
                        height: '1rem',
                      }}
                    >
                      <img alt="submit_image" src={popoverSvg} />
                    </atoms.ToolTip>
                  </GroupLabel>

                  <RadioButton>
                    <RadioInput
                      type="radio"
                      id="highly"
                      name="involveLevel"
                      value="highly"
                      checked={values.involveLevel === 'highly'}
                      onChange={(e) =>
                        setFieldValue('involveLevel', e.target.value)
                      }
                      onBlur={handleBlur}
                    />
                    <RadioLabel htmlFor="highly">
                      <strong>Level 1 - Rocket</strong>
                      <br />I want to "own" this idea from beginning to end
                    </RadioLabel>
                  </RadioButton>

                  <RadioButton>
                    <RadioInput
                      type="radio"
                      id="medium"
                      name="involveLevel"
                      value="medium"
                      checked={values.involveLevel === 'medium'}
                      onChange={(e) =>
                        setFieldValue('involveLevel', e.target.value)
                      }
                      onBlur={handleBlur}
                    />
                    <RadioLabel htmlFor="medium">
                      <strong>Level 2 - Astronaut</strong>
                      <br />I want to "own" this idea only after it is approved
                      as a project
                    </RadioLabel>
                  </RadioButton>

                  <RadioButton>
                    <RadioInput
                      type="radio"
                      id="minimum"
                      name="involveLevel"
                      value="minimum"
                      checked={values.involveLevel === 'minimum'}
                      onChange={(e) =>
                        setFieldValue('involveLevel', e.target.value)
                      }
                      onBlur={handleBlur}
                    />
                    <RadioLabel htmlFor="minimum">
                      <strong>Level 3 - UFO</strong>
                      <br />I want to "own" this idea during workshopping only
                    </RadioLabel>
                  </RadioButton>

                  <RadioButton>
                    <RadioInput
                      type="radio"
                      id="none"
                      name="involveLevel"
                      value="none"
                      checked={values.involveLevel === 'none'}
                      onChange={(e) =>
                        setFieldValue('involveLevel', e.target.value)
                      }
                      onBlur={handleBlur}
                    />
                    <RadioLabel htmlFor="none">
                      <strong>Level 4 - Meteor</strong>
                      <br />I don't want to be involved after submitting
                    </RadioLabel>
                  </RadioButton>

                  {touched.involveLevel && errors.involveLevel && (
                    <ErrorText>{errors.involveLevel}</ErrorText>
                  )}
                </GroupWrapper>

                <atoms.Typography type="p">
                  After submitting your idea, it will be posted in the
                  Workshopping area to begin collaboration with other Dev
                  Launchers.
                </atoms.Typography>

                <atoms.Box style={{ fontSize: '1rem', alignItems: 'center' }}>
                  <Checkbox required />
                  <atoms.Typography type="p">
                    &nbsp;I have read and agree to the{' '}
                    <Link href="/ideaspace/terms" passHref>
                      <a
                        style={{ color: 'blue', textDecoration: 'underline' }}
                        target="_blank"
                      >
                        Idea Submission Terms & Conditions
                      </a>
                    </Link>
                    .<span style={{ color: 'red' }}>&nbsp;*</span>
                  </atoms.Typography>
                </atoms.Box>

                <atoms.Box justifyContent="flex-end" gap="1rem">
                  {formButton == 'submit' ? (
                    <SubmissionButton
                      sending={sending}
                      onClick={async (e) => {
                        e.preventDefault();

                        const fields = [
                          'ideaName',
                          'description',
                          'experience',
                          'targetAudience',
                          'features',
                          'involveLevel',
                        ];
                        fields.forEach((field) => setFieldTouched(field, true));

                        const validationErrors = await validateForm();
                        if (Object.keys(validationErrors).length > 0) {
                          scrollToError(validationErrors);
                          return;
                        }

                        submitForm();
                      }}
                    />
                  ) : (
                    <EditionButton
                      clickHandlerButton={clickHandler}
                      sending={sending}
                      disabling={disabling}
                      onClick={async (e) => {
                        e.preventDefault();
                        try {
                          await submitForm();
                          if (Object.keys(errors).length > 0) {
                            scrollToError(errors);
                          }
                        } catch (error) {
                          console.error('Form submission error:', error);
                        }
                      }}
                    />
                  )}
                </atoms.Box>
              </atoms.Box>
              {successMessageVisible && <SuccessAlert />}
            </Form>
          )}
        </Formik>
      </atoms.Box>
    </atoms.Box>
  );
};

export default IdeaForm;
