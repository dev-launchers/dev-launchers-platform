export const editModalReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_PROFILE_EDIT_MODAL': {
            return {
                showProfileEditModal: true
            }
        }
        case 'HIDE_PROFILE_EDIT_MODAL': {
            return {
                showProfileEditModal: false
            }
        }
        default: {
            return state;
        }
    }
}