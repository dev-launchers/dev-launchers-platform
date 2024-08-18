import { useState, useEffect, useReducer } from 'react';
import constate from 'constate';
import { editProfileReducer } from './../state/reducers';

export const EditProfileData = () => {
  const [editProfileState, editProfileDispatch] = useReducer(
    editProfileReducer.editProfileReducer,
    editProfileReducer.editProfileInitialState
  );

  return { editProfileState, editProfileDispatch };
};

const [EditProfileDataProvider, editProfileDataContext] =
  constate(EditProfileData);

export { EditProfileDataProvider, editProfileDataContext };
