import React, { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    if (errors) {
      setValues({
        username: e.target.username,
        password: e.target.password,
      });
      console.log(values);
      onAuth(values.username, values.password);
    }
    return true;
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
