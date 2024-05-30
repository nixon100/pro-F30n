import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // try {
      //   const res = await axios.get(url);
      //   setData(res.data);
      // } catch (err) {
      //   setError(err);
      // }
      axios
        .get(url)
        .then((response) => {
          console.log(response.data)
          setData(response.data); // This should log the data from the Capstone collection
        })
        .catch((error) => {
          console.error(error); // This will log any errors that occur
        });
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
