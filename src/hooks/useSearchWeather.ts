import { useCallback, useState } from 'react';
import { useWeatherInfo } from '../api/useWeatherInfo';
import { useValidation } from './useValidation';

export const useSearchWeather = () => {
  const { fetchWeatherInfo, weatherList } = useWeatherInfo();
  const { isLatValid, isLonValid } = useValidation();
  // 緯度
  const [lat, setLat] = useState<number | null>(null);
  const handleInputLat = useCallback((e: string) => setLat(Number(e)), []);
  // 経度
  const [lon, setLon] = useState<number | null>(null);
  const handleInputLon = useCallback((e: string) => setLon(Number(e)), []);

  const search = () => {
    if (!lat || !lon) {
      alert('経度と緯度を入力してください。');
      return;
    }
    // 緯度
    if (isLatValid(lat)) {
      alert('経度は20以上、46以下で入力してください');
      return;
    }
    // 経度
    if (isLonValid(lon)) {
      alert('経度は122以上、154以下で入力してください');
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
