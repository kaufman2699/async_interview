import { useEffect, useState } from 'react';
import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {"Content-Type": "application/json"},
})

const useApi = (({
  method,
  endpoint,
  data
}) => {
  const [results, setResults] = useState();

  useEffect(() => {
    api[method](endpoint)
      .then(({ data }) => setResults(data));
  }, []);

  return results;
})

export { api, useApi };