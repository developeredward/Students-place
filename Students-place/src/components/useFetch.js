import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (token, url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);
  useEffect(() => {
    axios.default.headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
