/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useWeatherInfo } from './api/useWeatherInfo';
import './App.css';
import Button from './components/Button';
import TextField from './components/TextField';
import WeatherResults from './components/WeatherResults';

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

  const { fetchWeatherInfo } = useWeatherInfo();

  return (
    <div className="App">
      <p css={titleStyle}>お天気チェック</p>
      <div css={searchContainerStyle}>
        <TextField />
        <TextField />
        <Button text="検索" />
      </div>
      <WeatherResults />
    </div>
  );
}

export default App;
