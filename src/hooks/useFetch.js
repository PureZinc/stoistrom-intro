import { useState, useEffect } from "react";

export default function useFetch(endpoint) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(endpoint)
        .then(res => {
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsLoading(false)
        })
        .catch(err => {
            setError(true)
            setIsLoading(false)
        })
    }, [endpoint])

    return { isLoading, error, data }
}
