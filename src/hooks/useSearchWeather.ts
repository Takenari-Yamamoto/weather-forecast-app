import { useCallback, useState } from 'react';
import { WeatherInfoRepo } from '../api/WeatherInfoRepo';
import { WeatherInfo } from '../types/weather';

export const useSearchWeather = () => {
  const { fetchWeatherInfo } = WeatherInfoRepo();
  const [weatherList, setWeatherList] = useState<WeatherInfo[] | null>(null);

  // 緯度
  const [lat, setLat] = useState<number | null>(null);
  const handleInputLat = useCallback((e: string) => setLat(Number(e)), []);
  // 経度
  const [lon, setLon] = useState<number | null>(null);
  const handleInputLon = useCallback((e: string) => setLon(Number(e)), []);

  // 検索ボタン押下時の処理
  const search = async () => {
    if (!lat || !lon) {
      return;
    }

    try {
      const res = await fetchWeatherInfo({
        lat,
        lon,
      });
      setWeatherList(res);
    } catch (e) {
      console.error('API error', e);
      alert('検索に失敗しました。');
    }
  };

  return {
    handleInputLat,
    handleInputLon,
    search,
    weatherList,
  };
};
