import React from "react";
import { useForm, useField, splitFormProps } from "react-form";
import axios from "axios";

import style from "./SignUpForm.module.css";

import FormEntry from "./FormEntry";

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function FormPage() {
  return <div></div>;
}

const formEntries = [
  <FormEntry label="Name">
    <InputField
      field="name"
      validate={value => (!value ? "Required" : false)}
    />
  </FormEntry>,
  <FormEntry label="Email">
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
  <FormEntry label="Zip Code">
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
      options={["Coding"]}
      validate={value => (!value ? "This is required!" : false)}
    />
  </FormEntry>,
  <FormEntry label="Level" description="What is your level of experience?">
    <SelectField
      field="level"
      options={["Beginner (No  development experience)"]}
      validate={value => (!value ? "This is required!" : false)}
    />
  </FormEntry>,
  <FormEntry
    label="Experience"
    description="Briefly describe any relevant experience you have [optional]"
  >
    <InputField field="experience" type="textarea" />
  </FormEntry>,
  <FormEntry
    label="Reason"
    description="Why do you want to join the Dev Launchers Incubator and Development Lab? (Hint: Are you looking to learn? Help others learn? Gain experience? Build something epic?) [optional]"
  >
    <InputField field="reason" type="textarea" />
  </FormEntry>,

  <FormEntry
    label="Commitment"
    description="How much time are you able to commit to the program? (Labs are held on Saturdays from 12pm-3pm CST)"
  >
    <SelectField
      field="commitment"
      options={[
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
      options={["I accept"]}
      validate={value => (!value ? "This is required!" : false)}
    />
  </FormEntry>
];

export default function SignUpForm() {
  const defaultValues = React.useMemo(
    () => ({
      name: "",
      email: "",
      zip: "",
      age: "",
      skills: [],
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
      if (values.name === "tanner" && values.age !== "29") {
        return "This is not tanner's correct age";
      }
      return false;
    },
    onSubmit: async (values, instance) => {
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
          console.log(response);
        })
        .catch(function(response) {
          //handle error
          console.log(response);
        });

      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log(JSON.stringify(values));
    },
    debugForm: false
  });

  return (
    <div
      className={style.formContainer}
      style={{ width: "100%", textAlign: "center" }}
    >
      <Form className={style.signUpForm}>
        {isSubmitted ? <em>Thanks for submitting!</em> : null}

        {error ? <strong>{error}</strong> : null}

        {isSubmitting ? (
          "Submitting..."
        ) : (
          <div>
            <button type="submit" disable={!canSubmit}>
              Submit
            </button>
          </div>
        )}
      </Form>
    </div>
  );
}

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props);

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps
  } = useField(field, fieldOptions);

  // Make this input inherit the font size if its parent
  const styleProp = props.style
    ? { ...props.style, fontSize: "inherit" }
    : { fontSize: "inherit" };

  // Build the field
  return (
    <>
      <input {...getInputProps({ ref, ...rest })} style={styleProp} />
      <div style={{ "font-size": "1rem" }}>
        {/*
          Let's inline some validation and error information
          for our field
        */}

        {isValidating ? (
          <em>Validating...</em>
        ) : isTouched && error ? (
          <strong>{error}</strong>
        ) : message ? (
          <small>{message}</small>
        ) : null}
      </div>
    </>
  );
});

function SelectField(props) {
  const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

  const {
    value = "",
    setValue,
    meta: { error, isTouched }
  } = useField(field, fieldOptions);

  const handleSelectChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <select {...rest} value={value} onChange={handleSelectChange}>
        <option disabled value="" />
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>{" "}
      {isTouched && error ? <em>{error}</em> : null}
    </>
  );
}
