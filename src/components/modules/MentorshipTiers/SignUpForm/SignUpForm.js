import React from "react";
import { useForm, useField, splitFormProps } from "react-form";
import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";

import style from "./SignUpForm.module.css";

import Button from "../../../common/Button";
import Modal from "../../../common/Modal";

import ProgressBar from "./ProgressBar";
import FormEntry from "./FormEntry";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import ScheduleOrientationButton from "./ScheduleOrientationButton";

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const formEntries = [
  <div style={{ width: "100%", textAlign: "center", marginTop: "5%" }}>
    <div>Applications now open!</div>
    <div style={{ fontSize: "1.5rem", marginBottom: "5%" }}>
      Apply for our development incubator for access to exclusive content,
      mentorship, and the ability to help others grow within the Dev Launchers
      community.
    </div>
  </div>,

  <FormEntry
    label="Name"
    description="What should we call you? Please enter your full name!"
  >
    <InputField
      field="name"
      validate={value => (!value ? "Required" : false)}
    />
  </FormEntry>,

  <FormEntry label="Email" description="How should we contact you?">
    <InputField
      field="email"
      validate={async value => {
        if (!value) {
          return "Email is required";
        }

        if (!validateEmail(value)) {
          return "Please enter a valid email addresss";
        }

        console.log(`Checking email: ${value}...`);

        // We're going to mock that for now
        await new Promise(resolve => setTimeout(resolve, 2000));

        return value === "tanner@gmail.com"
          ? "Email is already being used"
          : false;
      }}
    />
  </FormEntry>,

  <FormEntry label="Zip Code" description="Where are you?">
    <InputField field="zip" type="number" />
  </FormEntry>,

  <FormEntry
    label="Age"
    description="We are actively seeking members 16+, but exceptions are made for exceptional young people"
  >
    <InputField
      field="age"
      type="number"
      validate={value =>
        value < 13 ? "You must be at least 13 years old" : false
      }
      min="1"
    />
  </FormEntry>,

  <FormEntry
    label="Skills"
    description="Which of the following skillsets are you passionate about?"
  >
    <SelectField
      field="skills"
      options={["Coding", "Art/Visual Design", "UX/Game Design"]}
      validate={value => (!value ? "This is required!" : false)}
    />
  </FormEntry>,
  <FormEntry label="Level" description="What is your level of experience?">
    <SelectField
      field="level"
      options={[
        "Beginner (No  development experience)",
        "Intermediate (Some development experience, but no large projects)",
        "Advanced (Have completed large projects, worked in a team, etc.)"
      ]}
      validate={value => (!value ? "This is required!" : false)}
    />
  </FormEntry>,

  <FormEntry
    label="Experience"
    description="Briefly describe any relevant experience you have [optional]"
  >
    <TextAreaField field="experience" type="textarea" />
  </FormEntry>,

  <FormEntry
    label="Reason"
    description="Why do you want to join the Dev Launchers Incubator and Development Lab? (Hint: Are you looking to learn? Help others learn? Gain experience? Build something epic?) [optional]"
  >
    <TextAreaField field="reason" type="textarea" />
  </FormEntry>,

  <FormEntry
    label="Commitment"
    description="How much time are you able to commit to the program? (Labs are held on Saturdays from 12pm-3pm CST)"
  >
    <SelectField
      field="commitment"
      options={[
        "I will try to attend every lab session, if I'm able to make it!",
        "Two labs per month",
        "Three labs per month",
        "One lab per month - only available for advanced members (DL7-DL8)"
      ]}
      validate={value => (!value ? "This is required!" : false)}
    />
  </FormEntry>,

  <FormEntry
    label="Accept"
    description="𝘼𝙡𝙡 𝙢𝙚𝙢𝙗𝙚𝙧𝙨 𝙖𝙧𝙚 𝙚𝙭𝙥𝙚𝙘𝙩𝙚𝙙 𝙩𝙤 𝙖𝙩𝙩𝙚𝙣𝙙 𝙩𝙝𝙚 𝙣𝙪𝙢𝙗𝙚𝙧 𝙤𝙛 𝙡𝙖𝙗𝙨 𝙨𝙚𝙡𝙚𝙘𝙩𝙚𝙙 𝙖𝙗𝙤𝙫𝙚 𝙤𝙣 𝙖 𝙢𝙤𝙣𝙩𝙝𝙡𝙮 𝙗𝙖𝙨𝙞𝙨, 𝙤𝙧 𝙜𝙞𝙫𝙚 𝘿𝙚𝙫 𝙇𝙖𝙪𝙣𝙘𝙝𝙚𝙧𝙨 𝙧𝙚𝙖𝙨𝙤𝙣𝙖𝙗𝙡𝙚 𝙣𝙤𝙩𝙞𝙘𝙚 𝙤𝙛 𝙖𝙣𝙮 𝙘𝙤𝙣𝙛𝙡𝙞𝙘𝙩𝙨 𝙤𝙧 𝙘𝙝𝙖𝙣𝙜𝙚𝙨 𝙞𝙣 𝙮𝙤𝙪𝙧 𝙨𝙘𝙝𝙚𝙙𝙪𝙡𝙚. 𝙔𝙤𝙪 𝙝𝙚𝙧𝙚𝙗𝙮 𝙖𝙜𝙧𝙚𝙚 𝙩𝙝𝙖𝙩 𝙮𝙤𝙪 𝙬𝙞𝙡𝙡 𝙥𝙧𝙤𝙖𝙘𝙩𝙞𝙫𝙚𝙡𝙮 𝙘𝙤𝙢𝙢𝙪𝙣𝙞𝙘𝙖𝙩𝙚 𝙬𝙞𝙩𝙝 𝘿𝙚𝙫 𝙇𝙖𝙪𝙣𝙘𝙝𝙚𝙧𝙨 𝙢𝙚𝙢𝙗𝙚𝙧𝙨 𝙖𝙣𝙙 𝙨𝙩𝙖𝙛𝙛 𝙞𝙣 𝙤𝙧𝙙𝙚𝙧 𝙩𝙤 𝙜𝙞𝙫𝙚 𝙣𝙤𝙩𝙞𝙘𝙚 𝙖𝙗𝙤𝙪𝙩 𝙮𝙤𝙪𝙧 𝙖𝙫𝙖𝙞𝙡𝙖𝙗𝙞𝙡𝙞𝙩𝙮 𝙩𝙤 𝙖𝙩𝙩𝙚𝙣𝙙 𝙨𝙚𝙨𝙨𝙞𝙤𝙣𝙨, 𝙖𝙣𝙙 𝙍𝙎𝙑𝙋 𝙪𝙨𝙞𝙣𝙜 𝙤𝙪𝙧 𝙬𝙚𝙚𝙠𝙡𝙮 𝙨𝙞𝙜𝙣 𝙪𝙥 𝙨𝙝𝙚𝙚𝙩𝙨."
  >
    <SelectField
      field="accepted"
      options={["I accept", "I Do Not Accept"]}
      validate={value => (!value ? "This is required!" : false)}
    />
  </FormEntry>
];

export default function SignUpForm() {
  // Modal state management
  const [modalContent, setModalContent] = React.useState("content");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openOrientationIntroModal = () => {
    setModalContent(
      <div style={{ height: "70%", textAlign: "center", padding: "10%" }}>
        <div>
          <b>Your application has been automatically approved!</b>
          <br />
          <br /> Please sign up for an orientation with us to begin yor journey.
          If none of these times work for you, feel free to reach out to{" "}
          <a href="mailto:support@devlaunchers.com">
            support@devlaunchers.com
          </a>{" "}
          to schedule a different time.
        </div>
        <ScheduleOrientationButton
          style={{ margin: "10%" }}
          onClick={() => {
            closeModal();
          }}
        />
      </div>
    );
    openModal();
  };

  const [submittingForm, setSubmittingForm] = React.useState(false);
  const [isFormValidated, setIsFormValidated] = React.useState(false);
  const [applicationApproved, setApplicationApproved] = React.useState(false);
  const [formPage, setFormPage] = React.useState(0);
  const [progressPercent, setProgressPercent] = React.useState(0);

  const checkAutoApproval = values => {
    if (values.age > 16) return true;
    return false;
  };

  const onSubmit = async (values, instance) => {
    if (!isFormValidated) {
      if (formPage < formEntries.length - 1) incrementFormPage();
      return;
    }

    setSubmittingForm(true);

    const axiosInstance = axios.create({
      baseURL:
        "https://script.google.com/macros/s/AKfycby9cNYNtLoRg68F8KhibzBam0sonk0Q-h_qQke9qeep5vOw2zICKbBtxOcCCQSyNznHhA",
      timeout: 10000,
      headers: { "Content-Type": "multipart/form-data" }
    });
    axiosInstance
      .get("/exec", { params: values })
      .then(function(response) {
        //handle success
        setSubmittingForm(false);
        setFormSubmitted(true);
        if (checkAutoApproval(values)) {
          setApplicationApproved(true);
          openOrientationIntroModal();
        }
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  };

  const defaultValues = React.useMemo(
    () => ({
      name: "",
      email: "",
      zip: "",
      age: "",
      skills: "",
      level: "",
      experience: "",
      reason: "",
      commitment: "",
      accepted: ""
    }),
    []
  );
  const {
    Form,
    values,
    pushFieldValue,
    removeFieldValue,
    meta: { isSubmitting, isSubmitted, canSubmit, error }
  } = useForm({
    defaultValues,
    validate: values => {
      // Check if all fields have been filled
      let isValidated = true;
      Object.keys(values).forEach(key => {
        if (values[key] == "") {
          isValidated = false;
        }
      });
      setIsFormValidated(isValidated);
      return false;
    },
    onSubmit: onSubmit,
    debugForm: false
  });

  const incrementFormPage = () => {
    setFormPage(formPage + 1);
  };
  const decrementFormPage = () => {
    setFormPage(formPage - 1);
  };

  // Update progressPercent when formPage changes
  React.useEffect(() => {
    setProgressPercent(((formPage * 1.0) / (formEntries.length - 1)) * 100);
  }, [formPage]);

  const [formSubmitted, setFormSubmitted] = React.useState(false);

  return (
    <div
      className={style.formOuter}
      style={{ width: "100%", textAlign: "center" }}
    >
      <Modal
        modalContent={modalContent}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      {formSubmitted ? (
        <div style={{ fontSize: "3rem", color: "white", margin: "10%" }}>
          Thanks for submitting your application!
          <br />
          {applicationApproved ? (
            <ScheduleOrientationButton
              style={{ margin: "5%" }}
              onClick={() => {
                closeModal();
              }}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className={style.formContainer}>
          <div
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "space-between",
              color: "white"
            }}
          >
            {formPage > 0 ? (
              <Button onClick={decrementFormPage}>Back</Button>
            ) : (
              "Join today"
            )}
            <div>Apply to our development labs!</div>
          </div>
          <Form className={style.signUpForm}>
            {formEntries[formPage]}

            {submittingForm ? (
              "Submitting your information..."
            ) : formPage == formEntries.length - 1 ? (
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
          </Form>

          {formPage < formEntries.length - 1 ? (
            <Button
              onClick={incrementFormPage}
              style={{
                fontSize: "3rem",
                paddingLeft: "5rem",
                paddingRight: "5rem"
              }}
            >
              {formPage == 0 ? "Start" : "Next"}
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
        </div>
      )}
    </div>
  );
}
