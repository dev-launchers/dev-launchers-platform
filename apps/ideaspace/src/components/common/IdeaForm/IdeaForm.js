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

import Alert from '../SubmissionAlert/Alert.js';

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
  editMode,
  hideFormButtons = false,
  formikRef = null,
  checkIdeaNameAvailability,
  submissionError = '',
  onSubmissionErrorClear = () => {},
}) => {
  const [focusedField, setFocusedField] = useState(null);
  const [disabling, setDisabling] = React.useState(true);
  const { isMobile } = useResponsive();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [ideaNameError, setIdeaNameError] = useState('');
  const [isCheckingName, setIsCheckingName] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [alertVariant, setAlertVariant] = useState('submit'); // 'submit' or 'edit'

  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  // Specifically checking for eorror in 'ideaname' field
  const isFieldCompleted = (value, error, fieldName) => {
    if (fieldName === 'ideaName') {
      return (
        value &&
        !error &&
        focusedField !== fieldName &&
        !ideaNameError &&
        !submissionError
      );
    }
    return value && !error && focusedField !== fieldName;
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
    if (fieldName === 'ideaName' && submissionError) {
      onSubmissionErrorClear();
    }
  };

  const savedData = loadFromLocalStorage();
  const newInitialValues = { ...initialValues, ...savedData };

  React.useEffect(() => {
    localStorage.removeItem('ideaFormData');
    return () => {
      localStorage.removeItem('ideaFormData');
    };
  }, []);

  const handleIdeaNameChange = async (value, setFieldValue) => {
    setFieldValue('ideaName', value.slice(0, 80));
    setIdeaNameError('');
    if (submissionError) {
      onSubmissionErrorClear();
    }

    if (value.trim() && !editMode && checkIdeaNameAvailability) {
      setIsCheckingName(true);
      try {
        const isAvailable = await checkIdeaNameAvailability(value.trim());
        if (!isAvailable) {
          setIdeaNameError(
            'This idea name is already in use. Please try something else.'
          );
        }
      } catch (error) {
        console.error('Error checking idea name availability:', error);
      } finally {
        setIsCheckingName(false);
      }
    }
  };

  const handleSubmit = async (values, actions) => {
    try {
      await submitHandler(values, actions);
      if (!editMode) {
        setSuccessMessageVisible(true);
        setAlertVariant('submit');
        actions.resetForm({ values: initialValues });
        clearLocalStorage();
      } else {
        setSuccessMessageVisible(true);
        setAlertVariant('edit');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessageVisible(true);
      setAlertVariant(editMode ? 'edit' : 'submit');
    }
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
        if (fieldName === 'ideaName' && submissionError) {
          return <ErrorText>{submissionError}</ErrorText>;
        }
        if (fieldName === 'ideaName' && ideaNameError) {
          return <ErrorText>{ideaNameError}</ErrorText>;
        }
        if (error && touched) {
          return <ErrorText>{error}</ErrorText>;
        }
      }
      if (
        value &&
        !error &&
        !(fieldName === 'ideaName' && (ideaNameError || submissionError))
      ) {
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
      margin="0rem"
      style={{
        backgroundColor: 'rgba(244, 240, 249, 1)',
        padding: '20px 0',
      }}
    >
      <atoms.Box maxWidth="36rem" margin="auto" style={{ textAlign: 'left' }}>
        <Formik
          initialValues={newInitialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
          enableReinitialize
          validateOnMount={true}
          innerRef={formikRef}
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
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <AutoSubmitToken
                setDisabling={setDisabling}
                unsavedHandler={unsavedHandler}
                initialValues={initialValues}
              />
              {/* {!editMode && (
                <atoms.Typography type="h4">
                  Idea Info
                  <hr style={{ margin: '1rem auto 2rem' }} />
                </atoms.Typography>
              )} */}
              <atoms.Box flexDirection="column" gap="2rem">
                {/* Idea Name Field */}
                <FieldWrapper data-field="ideaName">
                  <FieldLabel>
                    Idea name
                    <RequiredAsterisk>*</RequiredAsterisk>
                  </FieldLabel>
                  <TextAreaWrapper
                    hasError={
                      (touched.ideaName && errors.ideaName) ||
                      ideaNameError ||
                      submissionError
                    }
                    isCompleted={isFieldCompleted(
                      values.ideaName,
                      errors.ideaName,
                      'ideaName'
                    )}
                    isFocused={focusedField === 'ideaName'}
                  >
                    <StyledInput
                      name="ideaName"
                      placeholder="Title your idea"
                      value={values.ideaName || ''}
                      onChange={(e) =>
                        handleIdeaNameChange(e.target.value, setFieldValue)
                      }
                      maxLength={80}
                      onFocus={() => handleFocus('ideaName')}
                      onBlur={(e) => {
                        handleBlur(e);
                        setFocusedField(null);
                      }}
                    />
                    {isCheckingName && (
                      <div
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          fontSize: '12px',
                          color: '#666',
                        }}
                      >
                        Checking...
                      </div>
                    )}
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
                      placeholder="Describe your idea, its target audience, and the impact it would have."
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
                    Do you have any relevant experience that you'd like to
                    utilize?
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
                      placeholder="If you have any relevant experience in development or design, please share here. It won't be shown publicly."
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
                    What features would your product have?
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
                {/* <GroupWrapper data-field="involveLevel">
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
                      <strong>Level 1 - Highly</strong>
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
                      <strong>Level 2 - Medium</strong>
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
                      <strong>Level 3 - Minimum</strong>
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
                      <strong>Level 4 - None</strong>
                      <br />I don't want to be involved after submitting
                    </RadioLabel>
                  </RadioButton>

                  {touched.involveLevel && errors.involveLevel && (
                    <ErrorText>{errors.involveLevel}</ErrorText>
                  )}
                </GroupWrapper> */}

                {!editMode && (
                  <atoms.Typography type="p">
                    After submitting your idea, it will be posted in the
                    Workshopping area to begin collaboration with other Dev
                    Launchers.
                  </atoms.Typography>
                )}

                {!editMode && (
                  <atoms.Box style={{ fontSize: '1rem', alignItems: 'center' }}>
                    <Checkbox
                      name="termsAndConditions"
                      required
                      checked={isChecked}
                      onCheckedChange={handleCheckboxChange}
                    />

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
                )}

                {!hideFormButtons && (
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
                            //                            'involveLevel',
                          ];
                          fields.forEach((field) =>
                            setFieldTouched(field, true)
                          );

                          const validationErrors = await validateForm();
                          if (Object.keys(validationErrors).length > 0) {
                            scrollToError(validationErrors);
                            return;
                          }

                          // Check for idea name availability error
                          if (ideaNameError) {
                            const ideaNameElement = document.querySelector(
                              '[data-field="ideaName"]'
                            );
                            if (ideaNameElement) {
                              ideaNameElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                              });
                            }
                            return;
                          }

                          if (submissionError) {
                            const ideaNameElement = document.querySelector(
                              '[data-field="ideaName"]'
                            );
                            if (ideaNameElement) {
                              ideaNameElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                              });
                            }
                            return;
                          }

                          //  Updated T&C checkbox validation
                          if (!isChecked) {
                            alert(
                              'You must accept the Terms & Conditions to submit the form.'
                            );
                            return; // Preventing form submission if T&C is not checked
                          }
                          try {
                            await submitForm();
                          } catch (error) {
                            console.error('Submission failed:', error);
                          }
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
                )}

                <AutoSubmitToken
                  setDisabling={setDisabling}
                  unsavedHandler={unsavedHandler}
                  initialValues={initialValues}
                />
              </atoms.Box>
              {successMessageVisible && (
                <Alert
                  type="success"
                  variant={alertVariant}
                  countdown={alertVariant === 'submit' ? 5 : null}
                  onClose={() => setSuccessMessageVisible(false)}
                />
              )}

              {errorMessageVisible && (
                <Alert
                  type="error"
                  variant={alertVariant}
                  onClose={() => setErrorMessageVisible(false)}
                />
              )}
            </Form>
          )}
        </Formik>
      </atoms.Box>
    </atoms.Box>
  );
};

export default IdeaForm;
