import { createContext, useReducer } from "react";
import { editModalReducer, editModalState } from "../state/reducers/editModalReducer";

export const UserProfileDataContext = createContext();

export const UserProfileDataProvider = ({children}) => {
    const [editModalIsOpen, dispatch] = useReducer(editModalReducer, editModalState);

    const openModal = () => {
        dispatch({type: 'SHOW_PROFILE_EDIT_MODAL'});
    }

    const closeModal = () => {
        dispatch({type: 'HIDE_PROFILE_EDIT_MODAL'});
    }
    
    return (
        <UserProfileDataContext.Provider value={{ editModalIsOpen, openModal, closeModal }}>
            {children}
        </UserProfileDataContext.Provider>
    );
};


