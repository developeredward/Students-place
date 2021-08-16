import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (token, url) => {
  const [data, setData] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);

  function updateFeed() {
    setUpdated(true);
  }

  useEffect(() => {
    axios.default.headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setUpdated(false);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err.message);
      });
  }, [updated]);

  return { data, isLoading, error, updateFeed };
};

export default useFetch;
