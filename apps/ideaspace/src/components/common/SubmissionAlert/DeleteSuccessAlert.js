import React, { useEffect } from 'react';
import styled from 'styled-components';

const AlertWrapper = styled.div`
  position: fixed;
  top: 85px;
  right: 20px;
  z-index: 1100;
  background-color: #c4ebc6;
  border: 2px solid #226626;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AlertContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AlertMessage = styled.h4`
  color: #206124;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #226626;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

const DeleteSuccessAlert = ({ onClose }) => {
  // Optionally auto-dismiss after 4 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

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
        <AlertMessage>
          <b>Idea deleted: </b>Your idea has been successfully deleted
        </AlertMessage>
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

export default DeleteSuccessAlert;
