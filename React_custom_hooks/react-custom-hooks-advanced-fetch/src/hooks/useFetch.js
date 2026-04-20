import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(url);
      const receivedData = await response.json();

      setData(receivedData);

      setCache(prevCache => ({
        ...prevCache,
        [url]: receivedData
      }));

      setIsLoading(false);
    }

    if (cache[url]) {
      console.log("FROM CACHE");
      setData(cache[url]);
      return;
    }


    fetchData();
  }, [url,cache]);

  return { data, isLoading };
}
