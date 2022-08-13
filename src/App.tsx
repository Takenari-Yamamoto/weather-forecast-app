/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import Button from './components/Button';
import TextField from './components/TextField';
import WeatherResults from './components/WeatherResults';
import { useSearchWeather } from './hooks/useSearchWeather';

function App() {
  const titleStyle = css`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 8px;
  `;

  const searchContainerStyle = css`
    display: flex;
    gap: 12px;
    flex-direction: column;
    margin-bottom: 24px;
  `;

  const { handleInputLat, handleInputLon, search, weatherList, cityName } =
    useSearchWeather();

  return (
    <div className="App">
      <p css={titleStyle}>お天気チェック</p>
      <div css={searchContainerStyle}>
        <TextField handleInput={handleInputLat} placeholder="緯度（20 ~ 46）" />
        <TextField
          handleInput={handleInputLon}
          placeholder="経度（122 ~ 154）"
        />
        <Button variant="search" text="検索" onClick={search} />
      </div>
      <WeatherResults results={weatherList} cityName={cityName} />
    </div>
  );
}

export default App;
