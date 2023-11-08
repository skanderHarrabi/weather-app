import {useState, useEffect} from "react";
//API
import API, {WeatherData} from "../API";

export const useHomeFetch = () => {
  const [state, setState] = useState<WeatherData>({} as WeatherData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchWeatherData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const data = await API.fetchData();

      setState(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  // initial
  useEffect(() => {
    setState({} as WeatherData);
    fetchWeatherData();
  }, []);

  return {
    state,
    isLoading,
    isError,
  };
};
