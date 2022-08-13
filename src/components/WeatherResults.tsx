/** @jsxImportSource @emotion/react */
import { memo } from 'react';
import Button from './Button';
import { css } from '@emotion/react';
import { WeatherInfo } from '../types/weather';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { formatDate } from '../util/util';

type Props = {
  results: WeatherInfo[];
  cityName: String;
};

const WeatherResults = (props: Props) => {
  const { results, cityName } = props;

  /* Styles */
  const cityNameStyle = css`
    font-size: 20px;
  `;

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

  const textStyle = css`
    display: flex;
    justify-content: center;
    gap: 12px;

    > .max {
      color: red;
    }

    > .min {
      color: blue;
    }
  `;

  // カルーセル
  const settings = {
    infinite: true,
    speed: 500,
    // nextArrow: <button css={buttonStyle}>次へ</button>,
    // prevArrow: <button css={buttonStyle}>前へ</button>,
    arrows: true,
  };

  if (results.length) {
    return (
      <>
        <p css={cityNameStyle}>{cityName}</p>
        <Slider {...settings}>
          {results.map((result, i) => {
            return (
              <div key={i}>
                <p css={dateStyle}>{formatDate(result.datetime)}</p>
                <div css={weatherResultsStyles}>
                  <div css={cardStyle}>
                    <p>{result.weather.icon}</p>
                    <p>{result.weather.description}</p>
                    <div css={textStyle}>
                      <p className="max">{result.max_temp}</p>
                      <span> / </span>
                      <p className="min">{result.min_temp}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </>
    );
  }
  return <></>;
};

export default memo(WeatherResults);
