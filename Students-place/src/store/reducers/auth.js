import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  error: null,
  loading: false,
  username: null,
  fullname: null,
  firstname: null,
  middlename: null,
  surname: null,
  picture: null,
  admin: null,
  staff: null,
  verified: null,
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
  });
};

const userDetails = (state, action) => {
  return updateObject(state, {
    username: action.username,
    fullname: action.fullname,
    firstname: action.firstname,
    middlename: action.middlename,
    surname: action.surname,
    picture: action.picture,
    admin: action.admin,
    staff: action.staff,
    verified: action.verified,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    username: null,
    fullname: null,
    picture: null,
    admin: null,
    staff: null,
    verified: null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.AUTH_GET_USER_DETAILS:
      return userDetails(state, action);
    default:
      return state;
  }
};

export default reducer;
