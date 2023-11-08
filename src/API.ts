import axios from "axios";
import {OPENWEATHERAPI_BASE_URL} from "./config";

// Types

interface wheather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface minutely {
  dt: number;
  precipitation: number;
}

interface hourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: wheather[];
  pop: number;
}

export interface daily {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: wheather[];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  rain?: number;
  weather: wheather[];
}

export type WeatherData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely: minutely[];
  hourly: hourly[];
  daily: daily[];
};

const apiSettings = {
  fetchData: async (): Promise<WeatherData> => {
    const endpoint: string = OPENWEATHERAPI_BASE_URL;
    const weatherData = await axios.get(endpoint);
    return weatherData.data;
  },
};

export default apiSettings;
