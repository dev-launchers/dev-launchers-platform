import { sidebarActions } from './../actions';

const sidebarInitialState = {
  pages: {
    showOverview: true,
    showProjects: false,
    showChatbot: false,
  },
};

const sidebarReducer = (state, action) => {
  switch (action.type) {
    case sidebarActions.SHOW_OVERVIEW_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showOverview: true,
          showProjects: false,
          showProfiles: false,
          showIdeas: false,
          showChatbot: false,
          showOpportunities: false,
        },
      };
    }
    case sidebarActions.HIDE_OVERVIEW_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showOverview: false,
        },
      };
    }
    case sidebarActions.SHOW_PROJECTS_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showOverview: false,
          showProjects: true,
          showProfiles: false,
          showIdeas: false,
          showChatbot: false,
          showOpportunities: false,
        },
      };
    }
    case sidebarActions.HIDE_PROJECTS_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showProjects: false,
        },
      };
    }
    case sidebarActions.SHOW_PROFILES_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showOverview: false,
          showProjects: false,
          showProfiles: true,
          showIdeas: false,
          showChatbot: false,
          showOpportunities: false,
        },
      };
    }
    case sidebarActions.HIDE_PROFILES_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showProfiles: false,
        },
      };
    }
    case sidebarActions.SHOW_IDEAS_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showOverview: false,
          showProjects: false,
          showProfiles: false,
          showIdeas: true,
          showChatbot: false,
          showOpportunities: false,
        },
      };
    }
    case sidebarActions.HIDE_IDEAS_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showIdeas: false,
        },
      };
    }
    case sidebarActions.SHOW_OPPORTUNITIES_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showOverview: false,
          showProjects: false,
          showProfiles: false,
          showChatbot: false,
          showIdeas: false,
          showOpportunities: true,
        },
      };
    }
    case sidebarActions.HIDE_OPPORTUNITIES_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showOpportunities: false,
        },
      };
    }
    case sidebarActions.SHOW_CHATBOT_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showOverview: false,
          showProjects: false,
          showProfiles: false,
          showChatbot: true,
          showIdeas: false,
          showOpportunities: false,
        },
      };
    }
    case sidebarActions.HIDE_CHATBOT_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showChatbot: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export { sidebarReducer, sidebarInitialState };
