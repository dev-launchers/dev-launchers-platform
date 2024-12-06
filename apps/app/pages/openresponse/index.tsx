import { OpenResponse } from '@devlaunchers/components/components/atoms/OpenResponse/OpenResponse';
import React from 'react';

const Page = () => {
  return (
    <div>
      <OpenResponse
        name="ghada"
        fieldLabel="Label"
        placeholder="Type something"
        inputValue="Sample text"
        isRequired={true}
        status="error"
      />
    </div>
  );
};

export default Page;
