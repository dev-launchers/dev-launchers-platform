import React from 'react';

const Tag: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span
      className="text-gray-200 px-3 py-1 text-sm rounded-md mr-2"
      style={{
        background: 'var(--surface-grey-brand, #1C1C1C)',
        border: '1px solid grey',
        display: 'inline-block',
        textColor: '1px solid grey',
      }}
    >
      {label}
    </span>
  );
};

export default Tag;
