/** @jsxImportSource @emotion/react */
import { memo } from 'react';
import Button from './Button';
import { css } from '@emotion/react';
import { WeatherInfo } from '../types/weather';

type Props = {
  results: WeatherInfo[] | null;
};

const WeatherResults = (props: Props) => {
  const { results } = props;
  const dateStyle = css`
    font-weight: bold;
    font-size: 24px;
  `;

  const weatherResultsStyles = css`
    display: flex;
    border: 2px solid #000000;
    padding: 16px;
    margin-bottom: 16px;
    justify-content: center;
  `;

  const cardStyle = css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 16px;
  `;

  const buttonsStyle = css`
    display: flex;
    justify-content: space-between;
  `;
  return (
    <>
      {results?.map((result, i) => {
        return (
          <div key={i}>
            <p css={dateStyle}>{result.datetime}</p>
            <div css={weatherResultsStyles}>
              <div css={cardStyle}>
                <p>{result.weather.icon}</p>
                <p>{result.weather.description}</p>
                <p>
                  {result.max_temp} / {result.min_temp}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div css={buttonsStyle}>
        <Button text="前日へ" />
        <Button text="翌日へ" />
      </div>
    </>
  );
};

export default memo(WeatherResults);
