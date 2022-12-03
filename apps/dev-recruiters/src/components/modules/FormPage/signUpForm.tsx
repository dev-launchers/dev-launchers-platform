import React, { useEffect } from "react";
// import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useUserDataContext } from "../../../contexts/UserDataContext";
import Slider from "../../common/Slider";
import { NewApplicant } from "@devlaunchers/models/newApplicant";
import { SkillLevel } from "@devlaunchers/models/level";
import Collapsible from "../../common/Collapsible";
import {atoms, organisms, molecules} from "@devlaunchers/components/src/components";
import { agent } from "@devlaunchers/utility";
import {
  Label,
  Column,
  Checkbox,
  Row,
  RadioWrapper,
  CheckboxLabel,
  Statement,
  SubmitButton,
  Input,
  Radio,
  TextArea,
  ErrorMsg,
  Header,
  Tooltip,
} from "./styledSignupForm";

interface FormFields extends Omit<NewApplicant, "level"> {
  level: NewApplicant["level"] | "";
}

export default function SignUpForm() {
  // const SignupSchema = Yup.object().shape({
  //   name: Yup.string().required("Name Field Entry is Required"),
  //   email: Yup.string()
  //     .email("Invalid email")
  //     .required("Email Field Entry is Required"),
  //   age: Yup.number().moreThan(17, 'DevLaunchers is only accepting 18+').required("Age Field Entry is Required"),
  //   commitment: Yup.number().required("Commitment Field Entry is Required"),
  //   extraInfo: Yup.string(),
  //   experience: Yup.string().required("Experience Field Entry is Required"),
  //   accepted: Yup.boolean().required("Acceptance Field Entry is Required"),
  // });

  const router = useRouter();
  // const { userData } = useUserDataContext();
  // const Formik = useFormik<FormFields>({
  //   initialValues: {
  //     discordUsername: "",
  //     name: "",
  //     email: "",
  //     age: 0,
  //     level: "Intermediate",
  //     accepted: false,
  //     commitment: 0,
  //     extraInfo: "",
  //     portfolioLink: "",
  //     experience: "",
  //     reason: "",
  //     zip: 0,
  //     role: router.query.position as string,
  //     id: router.query.slug as string,
  //     project: router.query.slug as string,
  //     skills: [{ skill: "" }],
  //   },
  //   onSubmit: (
  //     values: NewApplicant,
  //     { setSubmitting }: FormikHelpers<NewApplicant>
  //   ) => {
  //     setSubmitting(true);

  //     agent.Applicant.post({
  //       ...values,
  //       //@ts-ignore
  //       level: values.level.toLowerCase(),
  //       skills: values.skills
  //         .toString()
  //         .split(",")
  //         .map((skill) => ({ skill: skill })),
  //       role: router.query.position as string,
  //       project: router.query.project as string,
  //       id: router.query.slug as string,
  //     })
  //       .then((res) => {
  //         setSubmitting(false);
  //         router.push("/join/confirmation");
  //       })
  //       .catch((error) => {
  //         setSubmitting(false);
  //         console.log(error);
  //         // console.log(error.response);
  //         // console.log(error.response.data);
  //         // console.log(error.response.status);
  //       });
  //   },
  //   validationSchema: SignupSchema,
  // });

  //! GOING TO BE ACTIVATED AGAIN ONCE WE HAVE BACKEND REDIRECTION
  // useEffect(() => {
  //   if (userData.id == 0) {
  //     router.push("/login");
  //   }
  // }, [router, userData.id]);

  return (
    <form style={{ padding: "2rem" }} >
      <atoms.Box>
        <organisms.FormField
        label=""
        placeholder=""
       />
          
       
      </atoms.Box>
    </form>
  );
}
