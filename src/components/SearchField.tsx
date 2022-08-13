/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';
import Button from './Button';
import TextField from './TextField';

type Props = {
  handleInputLat: (e: string) => void;
  handleInputLon: (e: string) => void;
  search: () => void;
};

const SearchField = (props: Props) => {
  const { handleInputLat, handleInputLon, search } = props;

  const searchContainerStyle = css`
    display: flex;
    gap: 12px;
    flex-direction: column;
    margin-bottom: 24px;
  `;

  return (
    <div css={searchContainerStyle}>
      <TextField handleInput={handleInputLat} placeholder="緯度（20 ~ 46）" />
      <TextField handleInput={handleInputLon} placeholder="経度（122 ~ 154）" />
      <Button variant="search" text="検索" onClick={search} />
    </div>
  );
};

export default memo(SearchField);
