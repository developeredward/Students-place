import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};
export const authGetUserCredentials = (
  username,
  get_full_name,
  first_name,
  middle_name,
  last_name,
  picture,
  admin,
  staff,
  verified
) => {
  return {
    type: actionTypes.AUTH_GET_USER_DETAILS,
    username: username,
    fullname: get_full_name,
    firstname: first_name,
    middlename: middle_name,
    surname: last_name,
    picture: picture,
    admin: admin,
    staff: staff,
    verified: verified,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("fullname");
  localStorage.removeItem("firstname");
  localStorage.removeItem("middlename");
  localStorage.removeItem("surname");
  localStorage.removeItem("picture");
  localStorage.removeItem("admin");
  localStorage.removeItem("verified");
  localStorage.removeItem("staff");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

const handleTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 10000);
  };
};

export const authLogin = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password,
      })
      .then((res) => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 10000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(handleTimeout(3600));
        dispatch(() => {
          axios
            .get("http://127.0.0.1:8000/rest-auth/user/", {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
              },
            })
            .then((res) => {
              const username = res.data.username;
              const fullname = res.data.get_full_name;
              const firstname = res.data.first_name;
              const middlename = res.data.middle_name;
              const surname = res.data.last_name;
              const picture = res.data.profile_picture;
              const admin = res.data.admin;
              const staff = res.data.staff;
              const verified = res.data.verified;

              // localStorage.setItem("expirationDate", expirationDate);
              localStorage.setItem("username", username);
              localStorage.setItem("fullname", fullname);
              localStorage.setItem("firstname", firstname);
              localStorage.setItem("middlename", middlename);
              localStorage.setItem("surname", surname);
              if (picture !== null) {
                localStorage.setItem("picture", picture);
              }
              localStorage.setItem("verified", verified);
              localStorage.setItem("admin", admin);
              localStorage.setItem("staff", staff);
              dispatch(
                authGetUserCredentials(
                  username,
                  fullname,
                  firstname,
                  middlename,
                  surname,
                  picture,
                  admin,
                  staff,
                  verified
                )
              );
            });
        });
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authSignup = (
  username,
  email,
  password1,
  password2,
  first_name,
  last_name
) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
        first_name: first_name,
        last_name: last_name,
      })
      .then((res) => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 10000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(handleTimeout(3600));
        dispatch(() => {
          axios
            .get("http://127.0.0.1:8000/rest-auth/user/", {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
              },
            })
            .then((res) => {
              const username = res.data.username;
              const fullname = res.data.get_full_name;
              const firstname = res.data.first_name;
              const middlename = res.data.middle_name;
              const surname = res.data.last_name;
              const picture = res.data.profile_picture;
              const admin = res.data.admin;
              const staff = res.data.staff;
              const verified = res.data.verified;

              // localStorage.setItem("expirationDate", expirationDate);
              localStorage.setItem("username", username);
              localStorage.setItem("fullname", fullname);
              localStorage.setItem("firstname", firstname);
              localStorage.setItem("middlename", middlename);
              localStorage.setItem("surname", surname);
              if (picture !== null) {
                localStorage.setItem("picture", picture);
              }
              localStorage.setItem("verified", verified);
              localStorage.setItem("admin", admin);
              localStorage.setItem("staff", staff);
              dispatch(
                authGetUserCredentials(
                  username,
                  fullname,
                  firstname,
                  middlename,
                  surname,
                  picture,
                  admin,
                  staff,
                  verified
                )
              );
            });
        });
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      const username = localStorage.getItem("username");
      const fullname = localStorage.getItem("fullname");
      const firstname = localStorage.getItem("firstname");
      const middlename = localStorage.getItem("middlename");
      const surname = localStorage.getItem("surname");
      const picture = localStorage.getItem("picture");
      const admin = localStorage.getItem("admin");
      const staff = localStorage.getItem("staff");
      const verified = localStorage.getItem("verified");
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          authGetUserCredentials(
            username,
            fullname,
            firstname,
            middlename,
            surname,
            picture,
            admin,
            staff,
            verified
          )
        );
        dispatch(
          handleTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 10000
          )
        );
      }
    }
  };
};
