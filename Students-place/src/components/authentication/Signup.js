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

const Signup = (props) => {
  const initialState = {
    username: "",
    email: "",
    password1: "",
    password2: "",
    firstname: "",
    lastname: "",
    usernameError: "",
    firstnameError: "",
    lastnameError: "",
    emailError: "",
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
    let firstnameError = "";
    let lastnameError = "";

    if (!values.firstname.trim()) {
      firstnameError = "Field required!";
    }
    if (!values.lastname.trim()) {
      lastnameError = "Field required!";
    }

    if (!values.username.trim()) {
      usernameError = "Field Cannot Be Empty";
    }

    if (!values.password1.trim()) {
      passwordError = "Password is Required";
    } else if (values.password1 !== values.password2) {
      passwordError = "Passwords Do not Match!";
    }
    if (firstnameError) {
      setErrors({ firstnameError });
      return false;
    }
    if (lastnameError) {
      setErrors({ lastnameError });
      return false;
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
      props.onAuth(
        values.username,
        values.email,
        values.password1,
        values.password2,
        values.firstname,
        values.lastname
      );
      console.log(values);
      console.log(props.onAuth);
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
            <Loading text="Creating account..." />
          ) : (
            <>
              <div className="text-heading">
                <h2>Create An Account</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="firstname"
                  value={values.firstname}
                  placeholder="Firstname"
                  onChange={handleChange}
                />
                {errors.firstnameError && <span>{errors.firstnameError}</span>}
                <input
                  type="text"
                  name="lastname"
                  value={values.lastname}
                  placeholder="Lastname"
                  onChange={handleChange}
                />
                {errors.lastnameError && <span>{errors.lastnameError}</span>}

                <input
                  type="text"
                  name="username"
                  value={values.username}
                  placeholder="Username"
                  onChange={handleChange}
                />
                {errors.usernameError && <span>{errors.usernameError}</span>}

                <input
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                {errors.emailError && <span>{errors.emailError}</span>}
                <input
                  type="password"
                  name="password1"
                  id="password1"
                  value={values.password1}
                  placeholder="Password"
                  onChange={handleChange}
                />
                {errors.passwordError && <span>{errors.passwordError}</span>}
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  value={values.password2}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
                {errors.passwordError && <span>{errors.passwordError}</span>}
                <div className="login-signup-btn">
                  <button type="submit" className="login-btn">
                    Create Account
                  </button>
                  <p>
                    Already have an account?{" "}
                    <Link to="/login/" className="login">
                      login
                    </Link>{" "}
                  </p>
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
    onAuth: (username, email, password1, password2, firstname, lastname) => {
      dispatch(
        actions.authSignup(
          username,
          email,
          password1,
          password2,
          firstname,
          lastname
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
