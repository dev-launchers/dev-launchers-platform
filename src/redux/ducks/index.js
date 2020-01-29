// src/redux/ducks/index.js

export const actionTypes = {
  addShow: {
    ADD_SHOW = “ADD_SHOW”
  }

};

export const actions = {
   addShow = show => ({type: ADD_SHOW, payload: show});
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOW:
    return { …state, shows: […state.shows, action.payload] };
    default:
    return state;
  }
};
