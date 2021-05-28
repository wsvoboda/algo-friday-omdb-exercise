export const changeUsername = (dispatch, newName) => {
  return dispatch({ type: "CHANGE_NAME", newUsername: newName });
};

export const changeLoadingStateToTrue = (dispatch) => {
  return dispatch({ type: "TRUE_STATE" });
};

export const changeLoadingStateToFalse = (dispatch) => {
  return dispatch({ type: "FALSE_STATE" });
};
