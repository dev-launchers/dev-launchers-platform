export const initialSideNavbarState = {
  activeTab: 'overview',
};

export const sidebarReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};
