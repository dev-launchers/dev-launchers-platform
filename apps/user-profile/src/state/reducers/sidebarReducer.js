import { sidebarActions } from './../actions';

// Initial state for the sidebar, defining which pages are visible by default
const sidebarInitialState = {
  pages: {
    showOverview: true,
    showProjects: false,
    showChatbot: false,
  },
};

/**
 * Reducer function to manage sidebar state.
 * Handles showing or hiding specific pages in the sidebar based on dispatched actions.
 *
 * @param {Object} state - Current state of the sidebar.
 * @param {Object} action - Action dispatched with a type and optional payload.
 * @returns {Object} - Updated state of the sidebar.
 */
const sidebarReducer = (state, action) => {
  switch (action.type) {
    // Case to show the Overview page and hide others
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

    // Case to hide the Overview page
    case sidebarActions.HIDE_OVERVIEW_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showOverview: false,
        },
      };
    }

    // Case to show the Projects page and hide others
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

    // Case to hide the Projects page
    case sidebarActions.HIDE_PROJECTS_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showProjects: false,
        },
      };
    }

    // Case to show the Profiles page and hide others
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

    // Case to hide the Profiles page
    case sidebarActions.HIDE_PROFILES_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showProfiles: false,
        },
      };
    }

    // Case to show the Ideas page and hide others
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

    // Case to hide the Ideas page
    case sidebarActions.HIDE_IDEAS_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showIdeas: false,
        },
      };
    }

    // Case to show the Opportunities page and hide others
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

    // Case to hide the Opportunities page
    case sidebarActions.HIDE_OPPORTUNITIES_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showOpportunities: false,
        },
      };
    }

    // Case to show the Chatbot page and hide others
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

    // Case to hide the Chatbot page
    case sidebarActions.HIDE_CHATBOT_SETTING: {
      return {
        ...state,
        pages: {
          ...state.pages,
          showChatbot: false,
        },
      };
    }

    // Default case returns the current state if the action type is not recognized
    default: {
      return state;
    }
  }
};

export { sidebarReducer, sidebarInitialState };
