import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import * as actions from "../../store/actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons"; // import useForm from "./useForm";
import validate from "./validateLogin";
import "../../static/css/authentication.css";
import Loading from "../Loading";
const Login = (props) => {
  const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
  };
  const history = useHistory();
  const [values, setValues] = useState(initialState);

  const [errors, setErrors] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const validate = () => {
    let usernameError = "";
    let passwordError = "";

    if (!values.username.trim()) {
      usernameError = "Username is Required";
    }
    if (!values.password) {
      passwordError = "Password is Required";
    }
    if (usernameError) {
      setErrors({ usernameError });
      return false;
    }
    if (passwordError) {
      setErrors({ passwordError });
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      setValues(initialState);
      setErrors(initialState);
      props.onAuth(values.username, values.password);
    }
  };
  if (props.isAuthenticated) {
    history.go(-1);
  }
  return (
    <div className="login-fullscreen-container">
      <div className="login-container">
        <button
          className="cancel"
          onClick={() => {
            history.go(-1);
          }}
        >
          x
        </button>
        <div className="login-content">
          {props.loading ? (
            <Loading text="signing in..." />
          ) : (
            <>
              <div className="text-heading">
                <h2>Sign In</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  placeholder="Username"
                  onChange={handleChange}
                />
                {errors.usernameError && <span>{errors.usernameError}</span>}
                <input
                  type="password"
                  name="password"
                  id=""
                  value={values.password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                {errors.passwordError && <span>{errors.passwordError}</span>}
                <div className="login-signup-btn">
                  <button type="submit" className="login-btn">
                    Login
                  </button>
                  <p>or</p>
                  <Link to="/signup/" className="signup">
                    Signup
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    loading: state.loading,
    state: state.error,
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    onAuth: (username, password) => {
      dispatch(actions.authLogin(username, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
