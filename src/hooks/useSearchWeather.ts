import { useCallback, useState } from 'react';
import { WeatherInfoRepo } from '../api/WeatherInfoRepo';
import { WeatherInfo } from '../types/weather';

export const useSearchWeather = () => {
  const { fetchWeatherInfo } = WeatherInfoRepo();
  const [cityName, setCityName] = useState('');
  const [weatherList, setWeatherList] = useState<WeatherInfo[]>([]);
  const [isLoading, setLoading] = useState(false);

  // 緯度
  const [lat, setLat] = useState<number | null>(null);
  const handleInputLat = useCallback((e: string) => setLat(Number(e)), []);
  // 経度
  const [lon, setLon] = useState<number | null>(null);
  const handleInputLon = useCallback((e: string) => setLon(Number(e)), []);

  // 検索ボタン押下時の処理
  const search = async () => {
    if (!lat || !lon) {
      alert('経度と緯度を入力してください。');
      return;
    }

    if (!(lat >= 20 && lat <= 46)) {
      alert('緯度は20度以上、46度以下で入力してください');
      return;
    }

    if (!(lon >= 122 && lon <= 154)) {
      alert('経度は122度以上、154度以下で入力してください');
      return;
    }

    setLoading(true);
    try {
      const res = await fetchWeatherInfo({
        lat,
        lon,
      });
      setCityName(res.city_name);
      setWeatherList(res.data);
    } catch (e) {
      console.error('API error', e);
      alert('検索に失敗しました。');
    }
    setLoading(false);
  };

  return {
    handleInputLat,
    handleInputLon,
    search,
    weatherList,
    cityName,
    isLoading,
  };
};
