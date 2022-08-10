import { useCallback, useState } from 'react';
import { useWeatherInfo } from '../api/useWeatherInfo';

export const useSearchWeather = () => {
  const { fetchWeatherInfo, weatherList } = useWeatherInfo();
  // 緯度
  const [lat, setLat] = useState<number | null>(null);
  const handleInputLat = useCallback((e: string) => setLat(Number(e)), []);
  // 経度
  const [lon, setLon] = useState<number | null>(null);
  const handleInputLon = useCallback((e: string) => setLon(Number(e)), []);

  const search = () => {
    if (!lat || !lon) {
      return;
    }
    fetchWeatherInfo({
      lat,
      lon,
    });
  };

  return {
    handleInputLat,
    handleInputLon,
    search,
    weatherList,
  };
};
