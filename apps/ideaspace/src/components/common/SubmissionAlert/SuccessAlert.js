import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import styled from 'styled-components';

const AlertWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: #c4ebc6;
  width: 940px;
  height: 38px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
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
const AlertMessage = styled.h4`
  color: #206124;
  margin: 0;
  padding: 16px 32px;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const SuccessAlert = ({
  message = 'Your idea was submmited. Now your idea can be workshop with our comunity so you get better insights ',
}) => {
  return (
    <AlertWrapper>
      <AlertMessage>{message}</AlertMessage>
    </AlertWrapper>
  );
};

export default SuccessAlert;
