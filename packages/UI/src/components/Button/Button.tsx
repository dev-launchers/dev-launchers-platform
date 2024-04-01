// import Button from '@mui/material/Button';
import React from 'react';

interface ButtonProps {
  backgroundColor?: string;
  label: string;
  color: string;
  border: string;
  borderRadius: string;
  padding: string;
  width: string;
  height: string;
  gap: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor = '#ffffff',
  color = '#69349D',
  border = '2px solid #69349D',
  borderRadius = '8px',
  padding = '8px, 24px, 8px, 24px',
  width = '108px',
  height = '40px',
  gap = '10px',
  label,
  ...props
}) => {
  return (
    <button
      style={{
        backgroundColor,
        color,
        border,
        borderRadius,
        padding,
        width,
        height,
        gap,
      }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
