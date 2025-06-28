import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // A "refetch index" that changes whenever we want to refetch
  const [refetchIndex, setRefetchIndex] = useState(0);

  // This function can be called to re-trigger the fetch
  const refetch = () => setRefetchIndex((prev) => prev + 1);

  useEffect(() => {
    let isMounted = true; // Track if the component is still mounted

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        // Only update state if still mounted
        if (isMounted) {
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Unexpected error");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to avoid memory leaks if the component unmounts
    return () => {
      isMounted = false;
    };
  }, [refetchIndex]);

  return { data, loading, error, refetch };
};
