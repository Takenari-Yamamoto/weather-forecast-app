/** @jsxImportSource @emotion/react */
import { memo, useRef } from 'react';
import { css } from '@emotion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from './Button';
import { formatDate } from '../util/util';
import { WeatherInfo } from '../types/weather';

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

  const sliderStyle = css`
    cursor: pointer;
  `;

  const buttonContainerStyle = css`
    display: flex;
    justify-content: space-between;
  `;

  /* Logic */
  // FIX: Hooks で切り分けてもいいかも
  const sliderRef = useRef<Slider>(null);
  const settings = {
    infinite: true,
    speed: 500,
  };

  const handleClickSliderPrev = () => {
    if (sliderRef?.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleClickSliderNext = () => {
    if (sliderRef?.current) {
      sliderRef.current.slickNext();
    }
  };

  if (!results.length) {
    return <></>;
  }

  return (
    <>
      <p css={cityNameStyle}>{cityName}</p>
      <Slider ref={sliderRef} {...settings}>
        {results.map((result, i) => {
          return (
            <div css={sliderStyle} key={i}>
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
      <div css={buttonContainerStyle}>
        <Button
          variant="slider"
          text="前日へ"
          onClick={handleClickSliderPrev}
        />
        <Button
          variant="slider"
          text="翌日へ"
          onClick={handleClickSliderNext}
        />
      </div>
    </>
  );
};

export default memo(WeatherResults);
