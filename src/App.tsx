/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LoadingOverlay from 'react-loading-overlay-ts';
/*  Components */
import Title from './components/Title';
import SearchField from './components/SearchField';
import WeatherResults from './components/WeatherResults';
/* Hooks */
import { useSearchWeather } from './hooks/useSearchWeather';

function App() {
  const containerStyle = css`
    padding: 40px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
  `;

  const loadingStyle = css`
    position: static;
  `;

  const {
    handleInputLat,
    handleInputLon,
    search,
    weatherList,
    cityName,
    isLoading,
  } = useSearchWeather();

  return (
    <LoadingOverlay
      css={loadingStyle}
      active={isLoading}
      spinner
      text="Loading your content..."
    >
      <div css={containerStyle}>
        <Title title="お天気チェック" />
        <SearchField
          handleInputLat={handleInputLat}
          handleInputLon={handleInputLon}
          search={search}
        />
        <WeatherResults results={weatherList} cityName={cityName} />
      </div>
    </LoadingOverlay>
  );
}

export default App;
