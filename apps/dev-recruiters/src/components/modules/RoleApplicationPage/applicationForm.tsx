import { Formik, Field, Form, FormikHelpers } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { atoms } from '@devlaunchers/components/src/components';

const inputClass =
  'flex items-center min-w-[240px] max-w-[350px] p-6 px-2 gap-2 rounded-md border-2 border-[#676767] bg-black text-white placeholder-gray-400';

const ApplicationForm: React.FC = () => {
  return (
    <div
      className="flex-grow flex-col bg-black px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-6 text-white"
      style={{
        background: 'rgba(73, 73, 73, 0.25)',
      }}
    >
      {/* About You Heading */}
      <atoms.Typography
        type="h1"
        className="ml-4"
        style={{
          fontFamily: 'var(--text-family-primary, Oswald), sans-serif',
          fontSize: 'var(--text-size-3xl, 33.18px)',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '130.75%',
          letterSpacing: '1.327px',
        }}
      >
        About You
      </atoms.Typography>

      <h1 className="ml-4 mt-2 text-sm text-gray-400 font-light">
        Let's get in touch - We use this to collaborate.
      </h1>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          discordUsername: '',
          githubUsername: '',
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required('Your full name is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          discordUsername: Yup.string().required(
            'Discord username is required'
          ),
          githubUsername: Yup.string().required('Github username is required'),
        })}
        onSubmit={(values, { setSubmitting }: FormikHelpers<any>) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        <Form className="flex flex-col gap-6 ml-4 mt-6">
          {/* Full Name Field */}
          <div className="flex flex-col">
            <label htmlFor="fullName" className="mb-1 text-sm font-medium">
              Full Name*
            </label>
            <Field
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className={inputClass}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Your Email*
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          {/* Discord Username */}
          <div className="flex flex-col">
            <label
              htmlFor="discordUsername"
              className="mb-1 text-sm font-medium"
            >
              Discord Username*
            </label>
            <Field
              id="discordUsername"
              name="discordUsername"
              placeholder="e.g., username#1234"
              className={inputClass}
            />
          </div>

          {/* GitHub Username */}
          <div className="flex flex-col">
            <label
              htmlFor="githubUsername"
              className="mb-1 text-sm font-medium"
            >
              GitHub Username*
            </label>
            <Field
              id="githubUsername"
              name="githubUsername"
              placeholder="e.g., johndoe"
              className={inputClass}
            />
          </div>

          {/* Your Role & Goals Section */}
          <atoms.Typography
            type="h1"
            className="ml-4 mt-8"
            style={{
              fontFamily: 'var(--text-family-primary, Oswald), sans-serif',
              fontSize: 'var(--text-size-3xl, 33.18px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '130.75%',
              letterSpacing: '1.327px',
            }}
          >
            Your Role & Goals
          </atoms.Typography>

          <h1 className="ml-4 mt-2 text-sm text-gray-400 font-light">
            Tell us what you're excited to contribute or learn.
          </h1>
          {/* Availability & Commitment Section */}
          <atoms.Typography
            type="h1"
            className="ml-4 mt-8"
            style={{
              fontFamily: 'var(--text-family-primary, Oswald), sans-serif',
              fontSize: 'var(--text-size-3xl, 33.18px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '130.75%',
              letterSpacing: '1.327px',
            }}
          >
            Availability & Commitment
          </atoms.Typography>

          <h1 className="ml-4 mt-2 text-sm text-gray-400 font-light">
            Let's talk time. When and how often are you available to
            collaborate?
          </h1>
          {/* Experience Section */}
          <atoms.Typography
            type="h1"
            className="ml-4 mt-8"
            style={{
              fontFamily: 'var(--text-family-primary, Oswald), sans-serif',
              fontSize: 'var(--text-size-3xl, 33.18px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '130.75%',
              letterSpacing: '1.327px',
            }}
          >
            Experience
          </atoms.Typography>

          <h1 className="ml-4 mt-2 text-sm text-gray-400 font-light">
            Tell us a bit about your experience related to the role.
          </h1>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 w-fit mt-4 text-white border border-white rounded-md hover:bg-white hover:text-black transition"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ApplicationForm;
