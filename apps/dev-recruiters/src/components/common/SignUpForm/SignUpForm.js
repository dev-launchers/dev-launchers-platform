/* eslint-disable no-nested-ternary */
import React from "react";
import { useForm } from "react-form";
import axios from "axios";
// eslint-disable-next-line no-unused-vars

import { FormOuter, FormContainer, StyledForm } from "./StyledSignUpForm";

import Button from "../Button";

import ProgressBar from "./ProgressBar";
import FormEntry from "./FormEntry";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import { env } from "@utils/EnvironmentVariables";
import InputAdder from "./InputAdder";

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function SignUpForm(props) {
  const [submittingForm, setSubmittingForm] = React.useState(false);
  const [isFormValidated, setIsFormValidated] = React.useState(false);
  const [formPage, setFormPage] = React.useState(0);
  const incrementFormPage = () => {
    setFormPage(formPage + 1);
  };
  const decrementFormPage = () => {
    setFormPage(formPage - 1);
  };
  const [progressPercent, setProgressPercent] = React.useState(0);
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const onSubmit = async (values) => {
    if (!isFormValidated) {
      // eslint-disable-next-line no-use-before-define
      if (formPage < formEntries.length - 1) incrementFormPage();
      return;
    }
    const {
      project,
      name,
      role,
      email,
      age,
      skills,
      level,
      experience,
      commitment,
      reason,
      accepted,
    } = values;

    setSubmittingForm(true);
    const axiosInstance = axios.create({
      baseURL:
        "https://script.google.com/macros/s/AKfycby9cNYNtLoRg68F8KhibzBam0sonk0Q-h_qQke9qeep5vOw2zICKbBtxOcCCQSyNznHhA",
      timeout: 10000,
      headers: { "Content-Type": "multipart/form-data" },
    });
    axiosInstance
      .get("/exec", { params: values })
      .then(() => {
        // handle success
        setSubmittingForm(false);
        setFormSubmitted(true);
      })
      .catch(() => {
        // handle error
        // console.log(response);
      });
    axios
      .post(`${env().STRAPI_URL}/applicants`, {
        email,
        name,
        age,
        role,
        zip: 23,
        experience,
        commitment,
        accepted: !!accepted,
        reason,
        project,
        level: level.toLowerCase(),
        skills: skills.map((skill) => ({ skill })),
      })
      .then(() => {
        setSubmittingForm(false);
        setFormSubmitted(true);
      })
      .catch(() => {});
  };

  const defaultValues = React.useMemo(
    () => ({
      project: props.projectSlug,
      name: "",
      role: props.roleName,
      email: "",
      age: "",
      skills: [],
      level: "",
      experience: "",
      commitment: 1,
      reason: "",
      accepted: "",
    }),
    []
  );

  const {
    Form,
    values,
    pushFieldValue,
    removeFieldValue,
    meta: { canSubmit },
  } = useForm({
    defaultValues,
    validate: () => {
      // Check if all fields have been filled
      let isValidated = true;
      Object.keys(values).forEach((key) => {
        if (values[key] === "") {
          isValidated = false;
        }
      });
      setIsFormValidated(isValidated);
      return false;
    },
    onSubmit,
    debugForm: false,
  });

  const formEntries = [
    <FormEntry
      key={1}
      label="Name"
      description="What should we call you? Please enter your full name!"
    >
      <InputField
        field="name"
        validate={(value) => (!value ? "Required" : false)}
      />
    </FormEntry>,
    <FormEntry key={3} label="Email" description="How should we contact you?">
      <InputField
        field="email"
        validate={async (value) => {
          if (!value) {
            return "Email is required";
          }

          if (!validateEmail(value)) {
            return "Please enter a valid email addresss";
          }

          // We're going to mock that for now
          await new Promise((resolve) => setTimeout(resolve, 2000));

          return value === "tanner@gmail.com"
            ? "Email is already being used"
            : false;
        }}
      />
    </FormEntry>,

    <FormEntry
      key={5}
      label="Age"
      description="We are actively seeking members 16+, but exceptions are made for exceptional young people"
    >
      <InputField
        field="age"
        type="number"
        validate={(value) =>
          value < 13 ? "You must be at least 13 years old" : false
        }
        min="1"
      />
    </FormEntry>,
    <FormEntry key={6} label="Skills" description="What are your skills?">
      <InputAdder field="skillAdder" onAdd={pushFieldValue} />
      <br />
      My Skills:
      {values.skills.map((skill, i) => (
        <div key={i}>
          <label style={{ display: "flex", alignItems: "baseline" }}>
            <InputField field={`skills.${i}`} />{" "}
            <button type="button" onClick={() => removeFieldValue("skills", i)}>
              X
            </button>
          </label>
        </div>
      ))}
    </FormEntry>,
    <FormEntry
      key={7}
      label="Level"
      description="What is your level of experience?"
    >
      <SelectField
        field="level"
        options={["Beginner", "Intermediate", "Advanced"]}
        validate={(value) => (!value ? "This is required!" : false)}
      />
    </FormEntry>,
    <FormEntry
      key={5}
      label="Commitment"
      description="How many hours would you commit per week?"
    >
      <InputField
        field="commitment"
        type="number"
        validate={(value) =>
          value < 1 ? "You must at least commit an hour per week" : false
        }
        min="1"
      />
    </FormEntry>,
    <FormEntry
      key={9}
      label="Experience"
      description="Briefly describe any relevant experience you have [optional]"
    >
      <TextAreaField field="experience" type="textarea" />
    </FormEntry>,
    <FormEntry
      key={10}
      label="Reason"
      description="Why do you want to join this project? (Hint: Are you looking to learn? Help others learn? Gain experience? Build something epic?) [optional]"
    >
      <TextAreaField field="reason" type="textarea" />
    </FormEntry>,

    <FormEntry
      key={11}
      label="Accept"
      description="𝘼𝙡𝙡 𝙢𝙚𝙢𝙗𝙚𝙧𝙨 𝙖𝙧𝙚 𝙚𝙭𝙥𝙚𝙘𝙩𝙚𝙙 𝙩𝙤 𝙖𝙩𝙩𝙚𝙣𝙙 𝙩𝙝𝙚 𝙣𝙪𝙢𝙗𝙚𝙧 𝙤𝙛 𝙡𝙖𝙗𝙨 𝙨𝙚𝙡𝙚𝙘𝙩𝙚𝙙 𝙖𝙗𝙤𝙫𝙚 𝙤𝙣 𝙖 𝙢𝙤𝙣𝙩𝙝𝙡𝙮 𝙗𝙖𝙨𝙞𝙨, 𝙤𝙧 𝙜𝙞𝙫𝙚 𝘿𝙚𝙫 𝙇𝙖𝙪𝙣𝙘𝙝𝙚𝙧𝙨 𝙧𝙚𝙖𝙨𝙤𝙣𝙖𝙗𝙡𝙚 𝙣𝙤𝙩𝙞𝙘𝙚 𝙤𝙛 𝙖𝙣𝙮 𝙘𝙤𝙣𝙛𝙡𝙞𝙘𝙩𝙨 𝙤𝙧 𝙘𝙝𝙖𝙣𝙜𝙚𝙨 𝙞𝙣 𝙮𝙤𝙪𝙧 𝙨𝙘𝙝𝙚𝙙𝙪𝙡𝙚. 𝙔𝙤𝙪 𝙝𝙚𝙧𝙚𝙗𝙮 𝙖𝙜𝙧𝙚𝙚 𝙩𝙝𝙖𝙩 𝙮𝙤𝙪 𝙬𝙞𝙡𝙡 𝙥𝙧𝙤𝙖𝙘𝙩𝙞𝙫𝙚𝙡𝙮 𝙘𝙤𝙢𝙢𝙪𝙣𝙞𝙘𝙖𝙩𝙚 𝙬𝙞𝙩𝙝 𝘿𝙚𝙫 𝙇𝙖𝙪𝙣𝙘𝙝𝙚𝙧𝙨 𝙢𝙚𝙢𝙗𝙚𝙧𝙨 𝙖𝙣𝙙 𝙨𝙩𝙖𝙛𝙛 𝙞𝙣 𝙤𝙧𝙙𝙚𝙧 𝙩𝙤 𝙜𝙞𝙫𝙚 𝙣𝙤𝙩𝙞𝙘𝙚 𝙖𝙗𝙤𝙪𝙩 𝙮𝙤𝙪𝙧 𝙖𝙫𝙖𝙞𝙡𝙖𝙗𝙞𝙡𝙞𝙩𝙮 𝙩𝙤 𝙖𝙩𝙩𝙚𝙣𝙙 𝙨𝙚𝙨𝙨𝙞𝙤𝙣𝙨, 𝙖𝙣𝙙 𝙍𝙎𝙑𝙋 𝙪𝙨𝙞𝙣𝙜 𝙤𝙪𝙧 𝙬𝙚𝙚𝙠𝙡𝙮 𝙨𝙞𝙜𝙣 𝙪𝙥 𝙨𝙝𝙚𝙚𝙩𝙨."
    >
      <SelectField
        field="accepted"
        options={["I accept"]}
        validate={(value) => (!value ? "This is required!" : false)}
      />
    </FormEntry>,
  ];

  // Update progressPercent when formPage changes
  React.useEffect(() => {
    setProgressPercent(((formPage * 1.0) / (formEntries.length - 1)) * 100);
  }, [formPage]);
  return (
    <FormOuter style={{ width: "100%", textAlign: "center" }}>
      {formSubmitted ? (
        <div style={{ fontSize: "3rem", margin: "10%" }}>
          Thanks for submitting your application!
          <br />
        </div>
      ) : (
        <FormContainer>
          <div
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            {formPage > 0 ? (
              <Button onClick={decrementFormPage}>Back</Button>
            ) : (
              ""
            )}
            {/* <div>Join project!</div> */}
          </div>
          <StyledForm as={Form}>
            {formEntries[formPage]}

            {submittingForm ? (
              "Submitting your information..."
            ) : formPage === formEntries.length - 1 ? (
              !isFormValidated ? (
                <span style={{ color: "red", fontSize: "1.5rem" }}>
                  It appears some form elements have not been filled out!
                </span>
              ) : (
                <div>
                  <Button
                    as="button"
                    type="submit"
                    onClick={() => {}}
                    disable={!canSubmit}
                  >
                    Submit
                  </Button>
                </div>
              )
            ) : (
              ""
            )}
          </StyledForm>

          {formPage < formEntries.length - 1 ? (
            <Button
              onClick={incrementFormPage}
              style={{
                fontSize: "3rem",
                paddingLeft: "5rem",
                paddingRight: "5rem",
              }}
            >
              {formPage === 0 ? "Start" : "Next"}
            </Button>
          ) : (
            ""
          )}
          {formPage > 0 ? (
            <ProgressBar
              progressPercent={progressPercent}
              style={{ marginTop: "5%" }}
            />
          ) : (
            ""
          )}
        </FormContainer>
      )}
    </FormOuter>
  );
}
