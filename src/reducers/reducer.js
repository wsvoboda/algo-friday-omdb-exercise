import {
  CHANGE_NAME,
  FALSE_STATE,
  TRUE_STATE,
} from "../action-types/action-types";

const initialState = {
  username: "Whitney",
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, username: action.newUsername };
    case FALSE_STATE:
      return { ...state, loading: false };
    case TRUE_STATE:
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default rootReducer;
