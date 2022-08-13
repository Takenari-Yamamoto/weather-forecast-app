import axios from 'axios';
import { Weather } from '../types/weather';

export const WeatherInfoRepo = () => {
  // const [weatherList, setWeatherList] = useState<WeatherInfo[] | null>(null);
  const fetchWeatherInfo = async (params: { lat: number; lon: number }) => {
    const { lat, lon } = params;
    const url = 'http://api.weatherbit.io/v2.0/forecast/daily';
    const res = await axios.get<Weather>(url, {
      params: {
        lat,
        lon,
        days: 7,
        key: process.env.REACT_APP_WEATHER_KEY,
      },
    });

    return res.data.data;
  };

  return { fetchWeatherInfo };
};
