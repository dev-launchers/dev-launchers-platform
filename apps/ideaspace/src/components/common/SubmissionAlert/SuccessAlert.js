import React, { useState, useEffect } from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import styled from 'styled-components';
//import { Typography } from '@devlaunchers/components/components/atoms/Typography';

const AlertWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: #c4ebc6;
  width: 928px;
  height: 56px;
  border: 2px solid #226626;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  animation: slideDown 0.5s ease-out;

  @keyframes slideDown {
    from {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
`;

const AlertContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #226626;
  padding: 4px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

const SuccessAlert = ({ onClose }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AlertWrapper>
      <AlertContent>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
            fill="#226626"
          />
        </svg>
        <atoms.Typography
          as="h4"
          variant="secondary"
          size="body_sm"
          style={{ color: '#206124', margin: 0 }}
        >
          Your idea was successfully posted! You'll be redirected to the Idea
          Workshopping Page in <strong>{countdown}</strong> seconds.
        </atoms.Typography>
      </AlertContent>
      <CloseButton onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill="#226626"
          />
        </svg>
      </CloseButton>
    </AlertWrapper>
  );
};

export default SuccessAlert;
