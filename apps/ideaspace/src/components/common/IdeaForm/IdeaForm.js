import React, { useState } from 'react';

import { Field, Form, Formik, FormikHelpers, useFormikContext } from 'formik';
import { atoms } from '@devlaunchers/components/src/components';
import popoverSvg from '../../../images/popover.svg';
import SubmissionButton from './SubmissionButton';
import EditionButton from './EditionButton';
import useResponsive from '@devlaunchers/components/src/hooks/useResponsive';
import Checkbox from '@devlaunchers/components/src/components/atoms/Checkbox/Checkbox';
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
import { agent } from '@devlaunchers/utility';

const CASE_INSENSITIVE_FIELDS = ['ideaName'];

const compareValuesToInitial = (values, initialValues) => {
  const keys = Object.keys(values);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const valueItem = values[key];
    const initialItem = initialValues[key];

    if (valueItem === null && initialItem === null) continue;
    if (valueItem === undefined && initialItem === undefined) continue;
    if (valueItem === null || initialItem === null) return true;
    if (valueItem === undefined || initialItem === undefined) return true;

    if (typeof valueItem === 'object' && typeof initialItem === 'object') {
      if (JSON.stringify(valueItem) !== JSON.stringify(initialItem)) {
        return true;
      }
    } else if (
      CASE_INSENSITIVE_FIELDS.includes(key) &&
      typeof valueItem === 'string' &&
      typeof initialItem === 'string'
    ) {
      if (valueItem.trim().toLowerCase() !== initialItem.trim().toLowerCase()) {
        return true;
      }
    } else {
      if (valueItem !== initialItem) {
        return true;
      }
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

const AutoSubmitToken = ({
  setDisabling,
  unsavedHandler,
  initialValues,
  editMode,
}) => {
  const { values } = useFormikContext();
  const [previousValues, setPreviousValues] = useState(values);
  React.useEffect(() => {
    // Only save to localStorage if NOT in edit mode
    if (!editMode) {
      autoSaveLocalStorage(values);
    }

    const hasChanges = compareValuesToInitial(values, initialValues);

    if (hasChanges) {
      unsavedHandler(true);
      setDisabling(false);
    } else {
      unsavedHandler(false);
      setDisabling(true);
    }
  }, [values, initialValues, setDisabling, unsavedHandler, editMode]);
  return null;
};

const IdeaForm = ({
  initialValues,
  SignupSchema,
  submitHandler,
  unsavedHandler,
  canSaveHandler,
  formButton,
  sending,
  clickHandler,
  editMode,
  hideFormButtons = false,
  formikRef = null,
}) => {
  const [focusedField, setFocusedField] = useState(null);
  const [disabling, setDisabling] = React.useState(true);
  const { isMobile } = useResponsive();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [alertVariant, setAlertVariant] = useState('submit'); // 'submit' or 'edit'

  const [isChecked, setIsChecked] = React.useState(false);

  const [nameTaken, setNameTaken] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  const isFieldCompleted = (value, error, fieldName) => {
    return value && !error && focusedField !== fieldName;
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const savedData = editMode ? null : loadFromLocalStorage();
  const newInitialValues = savedData
    ? { ...initialValues, ...savedData }
    : initialValues;

  React.useEffect(() => {
    localStorage.removeItem('ideaFormData');
    return () => {
      localStorage.removeItem('ideaFormData');
    };
  }, []);

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
      if (error.isDuplicateError) {
        return;
      }
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
        <atoms.Typography size="body_base">
          <CharacterCounter isLimit={value?.length === maxLength}>
            {value?.length || 0}/{maxLength} characters
          </CharacterCounter>
        </atoms.Typography>
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

  const checkIdeaName = async (name) => {
    if (!name || name.trim().length === 0) {
      setNameTaken(false);
      return;
    }

    try {
      const res = await agent.Ideas.findByName(name);
      setNameTaken(res.length > 0);
    } catch (err) {
      console.error('Error checking idea name', err);
      setNameTaken(false);
    }
  };

  return (
    <atoms.Box
      margin="0rem"
      style={{
        backgroundColor: '#141414',
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
          }) => {
            const requiredFieldsFilled =
              values.ideaName?.trim() &&
              values.description?.trim() &&
              values.experience?.trim() &&
              values.targetAudience?.trim() &&
              values.features?.trim();

            const canSubmit =
              Boolean(requiredFieldsFilled) && isValid && !nameTaken;

            const canSave = canSubmit && !disabling;

            React.useEffect(() => {
              if (canSaveHandler && editMode) {
                canSaveHandler(canSave);
              }
            }, [canSave, canSaveHandler, editMode]);

            const canPostIdea = canSubmit && isChecked;

            return (
              <Form>
                <AutoSubmitToken
                  setDisabling={setDisabling}
                  unsavedHandler={unsavedHandler}
                  initialValues={initialValues}
                  editMode={editMode}
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
                      <atoms.Typography textWeight="normal">
                        Idea name
                      </atoms.Typography>
                      <RequiredAsterisk>*</RequiredAsterisk>
                    </FieldLabel>

                    <TextAreaWrapper
                      hasError={
                        nameTaken || (touched.ideaName && errors.ideaName)
                      }
                      isCompleted={
                        !nameTaken &&
                        values.ideaName.trim().length > 0 &&
                        !errors.ideaName
                      }
                      isFocused={
                        !(
                          !nameTaken &&
                          values.ideaName.trim().length > 0 &&
                          !errors.ideaName
                        ) && focusedField === 'ideaName'
                      }
                    >
                      <StyledInput
                        name="ideaName"
                        placeholder="Title your idea"
                        value={values.ideaName || ''}
                        onChange={(e) => {
                          const text = e.target.value.slice(0, 80);
                          setFieldValue('ideaName', text);
                        }}
                        onKeyUp={() => {
                          if (nameTaken) setNameTaken(false);
                        }}
                        maxLength={80}
                        onFocus={() => setFocusedField('ideaName')}
                        onBlur={async (e) => {
                          handleBlur(e);
                          await checkIdeaName(values.ideaName);
                          setFocusedField(null);
                        }}
                      />
                    </TextAreaWrapper>

                    {nameTaken && (
                      <ErrorText>
                        This idea name is already in use. Please try something
                        else.
                      </ErrorText>
                    )}
                    {!nameTaken &&
                      renderFieldMessage(
                        'ideaName',
                        values.ideaName,
                        touched.ideaName,
                        errors.ideaName,
                        80
                      )}
                  </FieldWrapper>
                </atoms.Box>

                {/* Description Field */}
                <FieldWrapper data-field="description">
                  <FieldLabel>
                    <atoms.Typography textWeight="normal">
                      Describe your idea:
                      <RequiredAsterisk>*</RequiredAsterisk>
                    </atoms.Typography>
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
                    <atoms.Typography textWeight="normal">
                      Do you have any relevant experience that you'd like to
                      utilize?
                      <RequiredAsterisk>*</RequiredAsterisk>
                    </atoms.Typography>
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
                    <atoms.Typography textWeight="normal">
                      Describe your expected users:
                      <RequiredAsterisk>*</RequiredAsterisk>
                    </atoms.Typography>
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
                    <atoms.Typography textWeight="normal">
                      What features would your product have?
                      <RequiredAsterisk>*</RequiredAsterisk>
                    </atoms.Typography>
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
                    <atoms.Typography textWeight="normal">
                      Anything else you would like to share to support your
                      idea?{' '}
                    </atoms.Typography>
                    <atoms.Typography
                      as="span"
                      style={{
                        color: 'var(--content-04, #DAD8D9)',
                        fontWeight: 300,
                      }}
                    >
                      (Optional)
                    </atoms.Typography>
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
                    <atoms.Typography textWeight="normal">
                      What's a catchy tagline for your idea that sums up your
                      value and purpose? (Optional)
                    </atoms.Typography>
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
                  <atoms.Box
                    as="p"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      backgroundColor: 'var(--surface-01, #08211E)',
                      marginBottom: '48px',
                      marginTop: '48px',
                      padding: '24px',
                      borderRadius: 'var(--rounded-sm, 8px)',
                      border:
                        'var(--interactive-border-width, 2px) solid var(--border-03, #9FDDD7)',
                    }}
                  >
                    <atoms.Typography
                      as="span"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--content-04, #EAF8F6)',
                        fontFamily: 'var(--text-family-mode-family, Oswald)',
                        fontSize: 'var(--text-size-xl, 22.28px)',
                        fontWeight: 'bold',
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM18 22C18 22.2652 17.8946 22.5196 17.7071 22.7071C17.5196 22.8946 17.2652 23 17 23C16.4696 23 15.9609 22.7893 15.5858 22.4142C15.2107 22.0391 15 21.5304 15 21V16C14.7348 16 14.4804 15.8946 14.2929 15.7071C14.1054 15.5196 14 15.2652 14 15C14 14.7348 14.1054 14.4804 14.2929 14.2929C14.4804 14.1054 14.7348 14 15 14C15.5304 14 16.0391 14.2107 16.4142 14.5858C16.7893 14.9609 17 15.4696 17 16V21C17.2652 21 17.5196 21.1054 17.7071 21.2929C17.8946 21.4804 18 21.7348 18 22ZM14 10.5C14 10.2033 14.088 9.91332 14.2528 9.66665C14.4176 9.41997 14.6519 9.22771 14.926 9.11418C15.2001 9.00065 15.5017 8.97094 15.7926 9.02882C16.0836 9.0867 16.3509 9.22956 16.5607 9.43934C16.7704 9.64912 16.9133 9.91639 16.9712 10.2074C17.0291 10.4983 16.9994 10.7999 16.8858 11.074C16.7723 11.3481 16.58 11.5824 16.3334 11.7472C16.0867 11.912 15.7967 12 15.5 12C15.1022 12 14.7206 11.842 14.4393 11.5607C14.158 11.2794 14 10.8978 14 10.5Z"
                          fill="#EAF8F6"
                        />
                      </svg>
                      Your idea will be public!
                    </atoms.Typography>
                    <atoms.Typography
                      as="span"
                      style={{
                        color: 'var(--content-04, #EAF8F6)',
                        opacity: 'var(--opacity-opacity, 0.8)',
                      }}
                    >
                      To help promote your concept and increase its reach, once
                      you publish your idea, it will be publicly visible for
                      everyone to view and engage with. You can edit it anytime
                      on the Workshopping page.
                    </atoms.Typography>
                  </atoms.Box>
                )}
                {!editMode && (
                  <atoms.Box
                    style={{
                      fontSize: '1rem',
                      alignItems: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Checkbox
                      name="termsAndConditions"
                      required
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />

                    <atoms.Typography
                      as="p"
                      style={{ color: 'var(--content-04, #DAD8D9)' }}
                    >
                      &nbsp;I have read and agree to the{' '}
                      <Link href="/ideaspace/terms" passHref>
                        <atoms.Typography
                          as="a"
                          target="_blank"
                          style={{
                            color: 'var(--priority-content, #A4ADD9)',
                            textDecoration: 'underline',
                          }}
                        >
                          Idea Submission Terms & Conditions
                        </atoms.Typography>
                      </Link>
                      .
                      <atoms.Typography as="span" style={{ color: 'red' }}>
                        &nbsp;*
                      </atoms.Typography>
                    </atoms.Typography>
                  </atoms.Box>
                )}

                {!hideFormButtons && (
                  <atoms.Box justifyContent="flex-end" gap="1rem">
                    {formButton == 'submit' ? (
                      <SubmissionButton
                        sending={sending}
                        style={{
                          opacity: canPostIdea ? 1 : 0.5,
                          cursor: canPostIdea ? 'pointer' : 'not-allowed',
                        }}
                        onClick={async (e) => {
                          e.preventDefault();

                          const fields = [
                            'ideaName',
                            'description',
                            'experience',
                            'targetAudience',
                            'features',
                          ];
                          fields.forEach((field) =>
                            setFieldTouched(field, true)
                          );

                          const validationErrors = await validateForm();

                          if (nameTaken) {
                            validationErrors.ideaName =
                              'This idea name is already in use. Please try something else.';
                          }

                          // Block submit but still scroll
                          if (Object.keys(validationErrors).length > 0) {
                            scrollToError(validationErrors);
                            return;
                          }

                          // Block if can't post idea (T&C or otherwise)
                          if (!canPostIdea) {
                            if (!isChecked) {
                              alert(
                                'You must accept the Terms & Conditions to submit the form.'
                              );
                            }
                            return;
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
                        style={{
                          opacity: canSave ? 1 : 0.5,
                          cursor: canSave ? 'pointer' : 'not-allowed',
                        }}
                        onClick={async (e) => {
                          e.preventDefault();
                          const fields = [
                            'ideaName',
                            'description',
                            'experience',
                            'targetAudience',
                            'features',
                          ];

                          // Mark required fields as touched
                          fields.forEach((field) =>
                            setFieldTouched(field, true)
                          );

                          const validationErrors = await validateForm();

                          if (nameTaken) {
                            validationErrors.ideaName =
                              'This idea name is already in use. Please try something else.';
                          }

                          if (Object.keys(validationErrors).length > 0) {
                            scrollToError(validationErrors);
                            return;
                          }

                          if (!canSave) {
                            return;
                          }

                          try {
                            await submitForm();
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
                  editMode={editMode}
                />

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
            );
          }}
        </Formik>
      </atoms.Box>
    </atoms.Box>
  );
};

export default IdeaForm;
