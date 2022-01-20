import api from 'modules/shared/api';
import { useEffect, useState } from 'react';

function useFetch<T>(url: string, intialValue?: T) {
  const [data, setData] = useState(intialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const { data } = await api.get(url);
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
}

export default useFetch;
