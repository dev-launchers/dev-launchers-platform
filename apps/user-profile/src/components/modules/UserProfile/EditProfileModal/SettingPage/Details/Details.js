import React from 'react';
import { Typography } from '@devlaunchers/components/components/atoms';
import InputField from '../../../../../common/Forms/Input/InputField';

function Details() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Header */}
      <Typography
        variant="primary"
        size="heading_md"
        className="font-semibold text-grayscale-800"
      >
        Edit your details
      </Typography>

      {/* Form Fields */}
      <div className="flex flex-col gap-6 w-[70%]">
        {/* First Name */}
        <div className="flex flex-col gap-2">
          <Typography
            variant="secondary"
            size="body_sm"
            className="text-grayscale-700"
          >
            <span className="font-bold">First Name</span>
            <span className="text-error-500 ml-1">*</span>
          </Typography>

          <InputField
            field="firstName"
            placeholder="John"
            validate={(value) => (!value ? 'Required' : false)}
            className="h-10 border border-grayscale-300 rounded-md px-3 text-grayscale-800 placeholder:text-grayscale-400 focus:border-primary-500 focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2">
          <Typography
            variant="secondary"
            size="body_sm"
            className="text-grayscale-700"
          >
            <span className="font-bold">Last Name</span>
            <span className="text-error-500 ml-1">*</span>
          </Typography>

          <InputField
            field="lastName"
            placeholder="Doe"
            validate={(value) => (!value ? 'Required' : false)}
            className="h-10 border border-grayscale-300 rounded-md px-3 text-grayscale-800 placeholder:text-grayscale-400 focus:border-primary-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
