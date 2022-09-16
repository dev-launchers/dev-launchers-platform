import React, { useEffect } from "react";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useUserDataContext } from "../../../contexts/UserDataContext";
import Slider from "../../common/Slider";
import { NewApplicant } from "@devlaunchers/models/newApplicant";
import { SkillLevel } from "@devlaunchers/models/level";
import Collapsible from "../../common/Collapsible";
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
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name Field Entry is Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email Field Entry is Required"),
    age: Yup.number().moreThan(17, 'DevLaunchers is only accepting 18+').required("Age Field Entry is Required"),
    commitment: Yup.number().required("Commitment Field Entry is Required"),
    extraInfo: Yup.string(),
    experience: Yup.string().required("Experience Field Entry is Required"),
    accepted: Yup.boolean().required("Acceptance Field Entry is Required"),
  });

  const router = useRouter();
  const { userData } = useUserDataContext();
  const Formik = useFormik<FormFields>({
    initialValues: {
      discordUsername: "",
      name: "",
      email: "",
      age: 0,
      level: "",
      accepted: false,
      commitment: 0,
      extraInfo: "",
      portfolioLink: "",
      experience: "",
      reason: "",
      zip: 0,
      role: router.query.position as string,
      id: router.query.slug as string,
      project: router.query.slug as string,
      skills: [{ skill: "" }],
    },
    onSubmit: (
      values: NewApplicant,
      { setSubmitting }: FormikHelpers<NewApplicant>
    ) => {
      setSubmitting(true);

      agent.Applicant.post({
        ...values,
        //@ts-ignore
        level: values.level.toLowerCase(),
        skills: values.skills
          .toString()
          .split(",")
          .map((skill) => ({ skill: skill })),
        role: router.query.position as string,
        project: router.query.project as string,
        id: router.query.slug as string,
      })
        .then((res) => {
          setSubmitting(false);
          router.push("/confirmation");
        })
        .catch((error) => {
          setSubmitting(false);
          console.log(error);
          // console.log(error.response);
          // console.log(error.response.data);
          // console.log(error.response.status);
        });
    },
    validationSchema: SignupSchema,
  });

  //! GOING TO BE ACTIVATED AGAIN ONCE WE HAVE BACKEND REDIRECTION
  // useEffect(() => {
  //   if (userData.id == 0) {
  //     router.push("/login");
  //   }
  // }, [router, userData.id]);

  return (
    <form style={{ padding: "2rem" }} onSubmit={Formik.handleSubmit}>
      <Row>
        <Header>Apply with Dev Launchers!</Header>
      </Row>
      <Column>
        <Label>
          Your Full Legal Name *
          <Tooltip>
            Why do I need to enter my full legal name?
            <br />
            <br />
            At Dev Launchers part of our on-boarding process involves a
            background check as a precaution to keep our members safe!
          </Tooltip>
        </Label>

        <Input id="name" name="name" onChange={Formik.handleChange} />
        {Formik.errors.name && Formik.touched.name ? (
          <ErrorMsg>{Formik.errors.name}</ErrorMsg>
        ) : null}
        <Label>
          Discord Name
          <Tooltip>
            Why do I need to enter my Discord name?
            <br />
            <br />
            We use Discord to connect with our members and to provide feedback
            on their progress.
          </Tooltip>
        </Label>

        <Input
          id="discordUsername"
          name="discordUsername"
          onChange={Formik.handleChange}
        />
        <Label>Your Email *</Label>

        <Input
          id="email"
          name="email"
          type="email"
          onChange={Formik.handleChange}
        />
        {Formik.errors.email && Formik.touched.email ? (
          <ErrorMsg>{Formik.errors.email}</ErrorMsg>
        ) : null}
        <Label>
          What is your Age? *
          <Tooltip>
            Currently Dev Launchers is only accepting applicants 18+
          </Tooltip>
        </Label>
        <Input id="age" name="age" onChange={Formik.handleChange} />
        {Formik.errors.age && Formik.touched.age ? (
          <ErrorMsg>{Formik.errors.age}</ErrorMsg>
        ) : null}
        <Label>
          What are your Skills? <br />
          <Tooltip
            css={`
              width: 100%;
            `}
          >
            (Please enter skills separated with a comma and a space)
          </Tooltip>
        </Label>
        <Input id="skills" name="skills" onChange={Formik.handleChange} />

        {/* <Label>What is your level of experience?</Label>
        <Collapsible
          title="Please Choose One"
          bgButton="SilverSand"
          bgContent="BlackCoral"
        >
          <RadioWrapper>
            <Row>
              <Label>Beginner</Label>
              <Radio
                id="level"
                name="level"
                value={SkillLevel[0]}
                onChange={Formik.handleChange}
              />
            </Row>

            <Row>
              <Label>Intermediate</Label>
              <Radio
                name="level"
                id="level"
                value={SkillLevel[1]}
                onChange={Formik.handleChange}
              />
            </Row>
            <Row>
              <Label>Advanced</Label>
              <Radio
                id="level"
                name="level"
                value={SkillLevel[2]}
                onChange={Formik.handleChange}
              />
            </Row>
          </RadioWrapper>
        </Collapsible> */}
        <Label>How many hours are you looking to commit per week? *</Label>
        {Formik.errors.commitment && Formik.touched.commitment ? (
          <ErrorMsg>{Formik.errors.commitment}</ErrorMsg>
        ) : null}
        <div id="commitment">
          <Slider
            min={0}
            max={10}
            onChange={(value) => Formik.setFieldValue("commitment", +value)}
            prefix="hrs"
          />
        </div>
        <Label>
          Please briefly describe any relevant experience you have in
          development or design. *
        </Label>
        <TextArea
          id="experience"
          name="experience"
          onChange={Formik.handleChange}
        />
        {Formik.errors.experience && Formik.touched.experience ? (
          <ErrorMsg>{Formik.errors.experience}</ErrorMsg>
        ) : null}
        <Label>
          Why would you like to be a Dev Launcher/ Volunteer? * <br />
          <Tooltip>(This can help us guide you to meet your goals!)</Tooltip>
        </Label>
        <TextArea id="reason" name="reason" onChange={Formik.handleChange} />
        <Label>Anything else you want to share with us?</Label>
        <TextArea
          id="extraInfo"
          name="extraInfo"
          onChange={Formik.handleChange}
        />
        {Formik.errors.extraInfo && Formik.touched.extraInfo ? (
          <ErrorMsg>{Formik.errors.extraInfo}</ErrorMsg>
        ) : null}
        <Label> Optional - Upload your Resume or Portfolio</Label>
        <Row>
          <Label> Link from the Web </Label>
          <Input
            id="portfolioLink"
            name="portfolioLink"
            onChange={Formik.handleChange}
          />
        </Row>
        <Statement>
          I agree that all members are expected to attend weekly meetings and
          honor commitments they have made when joining a product team. If for
          any reason you have a conflict in your schedule to attend any of your
          commitments please let your team lead know within a reasonable time
          frame so that they may adjust the plan and reassign the tasks.
        </Statement>
        <Row>
          <Checkbox
            id="accepted"
            name="accepted"
            onChange={Formik.handleChange}
          />
          <Label
            css={`
              font-size: 0.9rem;
            `}
            style={{ fontSize: "0.9rem" }}
          >
            I Understand *
          </Label>
        </Row>
        {Formik.errors.accepted && Formik.touched.accepted ? (
          <ErrorMsg>{Formik.errors.accepted}</ErrorMsg>
        ) : null}
        <SubmitButton type="submit">Submit</SubmitButton>
      </Column>
      <Column />
    </form>
  );
}
