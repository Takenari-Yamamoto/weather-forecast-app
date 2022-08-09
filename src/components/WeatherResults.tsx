/** @jsxImportSource @emotion/react */
import { memo } from 'react';
import Button from './Button';
import { css } from '@emotion/react';

const WeatherResults = () => {
  const dateStyle = css`
    font-weight: bold;
    font-size: 24px;
  `;

  const weatherResultsStyles = css`
    display: flex;
    border: 2px solid #000000;
    padding: 16px;
    margin-bottom: 16px;
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
      <p css={dateStyle}>4月15日</p>
      <div css={weatherResultsStyles}>
        <div css={cardStyle}>
          <p>icon</p>
          <p>説明</p>
          <p>max / min</p>
        </div>
      </div>
      <div css={buttonsStyle}>
        <Button text="前日へ" />
        <Button text="翌日へ" />
      </div>
    </>
  );
};

export default memo(WeatherResults);
