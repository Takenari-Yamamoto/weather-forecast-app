import axios from 'axios';
import { useState } from 'react';
import { Weather, WeatherInfo } from '../types/weather';

export const useWeatherInfo = () => {
  const [weatherList, setWeatherList] = useState<WeatherInfo[] | null>(null);
  const fetchWeatherInfo = async (params: { lat: number; lon: number }) => {
    const { lat, lon } = params;
    const url = 'http://api.weatherbit.io/v2.0/forecast/daily';

    try {
      const res = await axios.get<Weather>(url, {
        params: {
          lat,
          lon,
          days: 7,
          key: process.env.REACT_APP_WEATHER_KEY,
        },
      });
      console.log('RESPONSE --->>>', res.data.data);
      setWeatherList(res.data.data);
    } catch (e) {
      console.error('API ERROR --->>>>', e);
    }
  };

  return { fetchWeatherInfo, weatherList };
};
