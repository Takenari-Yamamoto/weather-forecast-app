/** @jsxImportSource @emotion/react */
import { memo } from 'react';
import Button from './Button';
import { css } from '@emotion/react';
import { WeatherInfo } from '../types/weather';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

type Props = {
  results: WeatherInfo[] | null;
};

const WeatherResults = (props: Props) => {
  const { results } = props;
  const dateStyle = css`
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 12px;
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

  const buttonStyle = css`
    &::before {
      color: #0082ff;
    }
  `;

  // カルーセル
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <button css={buttonStyle}>次へ</button>,
    prevArrow: <button css={buttonStyle}>前へ</button>,
    arrows: true,
  };

  return (
    <Slider {...settings}>
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
    </Slider>
  );
};

export default memo(WeatherResults);
