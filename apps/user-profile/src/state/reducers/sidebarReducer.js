import { sidebarActions } from './../actions';

const sidebarInitialState = {
  pages: {
    showOverview: true,
    showProjects: false,
    showProfiles: false,
    showIdeas: false,
    showOpportunities: false,
    showChatbot: false,
  },
};

const sidebarReducer = (state, action) => {
  const resetPages = () => ({
    showOverview: false,
    showProjects: false,
    showProfiles: false,
    showIdeas: false,
    showOpportunities: false,
    showChatbot: false,
  });

  switch (action.type) {
    case sidebarActions.SHOW_OVERVIEW_SETTING:
      return { ...state, pages: { ...resetPages(), showOverview: true } };
    case sidebarActions.SHOW_PROJECTS_SETTING:
      return { ...state, pages: { ...resetPages(), showProjects: true } };
    case sidebarActions.SHOW_PROFILES_SETTING:
      return { ...state, pages: { ...resetPages(), showProfiles: true } };
    case sidebarActions.SHOW_IDEAS_SETTING:
      return { ...state, pages: { ...resetPages(), showIdeas: true } };
    case sidebarActions.SHOW_OPPORTUNITIES_SETTING:
      return { ...state, pages: { ...resetPages(), showOpportunities: true } };
    case sidebarActions.SHOW_CHATBOT_SETTING:
      return { ...state, pages: { ...resetPages(), showChatbot: true } };
    case sidebarActions.HIDE_OVERVIEW_SETTING:
      return { ...state, pages: { ...state.pages, showOverview: false } };
    case sidebarActions.HIDE_PROJECTS_SETTING:
      return { ...state, pages: { ...state.pages, showProjects: false } };
    case sidebarActions.HIDE_PROFILES_SETTING:
      return { ...state, pages: { ...state.pages, showProfiles: false } };
    case sidebarActions.HIDE_IDEAS_SETTING:
      return { ...state, pages: { ...state.pages, showIdeas: false } };
    case sidebarActions.HIDE_OPPORTUNITIES_SETTING:
      return { ...state, pages: { ...state.pages, showOpportunities: false } };
    case sidebarActions.HIDE_CHATBOT_SETTING:
      return { ...state, pages: { ...state.pages, showChatbot: false } };
    default:
      return state;
  }
};

export { sidebarReducer, sidebarInitialState };
