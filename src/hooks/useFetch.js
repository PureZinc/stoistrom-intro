import { useState, useEffect } from "react";

export default function useFetch(endpoint, method='GET') {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    const [request, setRequest] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true);
          setError(false);
          setData(null);

          try {
              const requestOptions = request ? {
                  method: method,
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(request.body),
              } : {
                  method: 'GET',
              };

              const response = await fetch(endpoint, requestOptions);
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const responseData = await response.json();
              setData(responseData);
          } catch (err) {
              setError(true);
          } finally {
              setIsLoading(false);
          }
      };
      fetchData();
    }, [endpoint, request])

    const requestSetter = (body) => {
        if (method === 'POST') {
            setRequest({ body });
        }
    };

    return { isLoading, error, data, requestSetter }
}
