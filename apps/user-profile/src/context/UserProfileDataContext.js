import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';
import constate from 'constate';
import { userProfileReducer, userProfileState } from './../state/reducers';
import { userProfileActions } from '../state/actions';

export const UserProfileData = ({ children }) => {
  const [userProfileState, userProfileDispatch] = useReducer(
    userProfileReducer,
    userProfileState
  );

  return { userProfileState, userProfileDispatch };
};

const [UserProfileDataProvider, userProfileDataContext] =
  constate(UserProfileData);
export { UserProfileDataProvider, userProfileDataContext };
