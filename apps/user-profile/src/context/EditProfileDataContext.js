import { createContext, useReducer } from "react";
import { editProfileReducer, editProfileState } from "../state/reducers/editProfileReducer";
import { editProfileActions } from "../state/actions";

export const EditProfileDataContext = createContext();

export const EditProfileDataProvider = ({children}) => {
    const [editProfileIsOpen, dispatch] = useReducer(editProfileReducer, editProfileState);

    const openModal = () => {
        dispatch({type: editProfileActions.SHOW_EDIT_PROFILE_MODAL});
    }

    const closeModal = () => {
        dispatch({type: editProfileActions.HIDE_EDIT_PROFILE_MODAL});
    }
    
    return (
        <EditProfileDataContext.Provider value={{ editProfileIsOpen, openModal, closeModal }}>
            {children}
        </EditProfileDataContext.Provider>
    );
};


