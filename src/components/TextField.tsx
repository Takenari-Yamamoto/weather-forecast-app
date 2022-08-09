/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';

const textFieldStyle = css`
  height: 40px;
  border: 2px solid #a0a0a0;
`;

const TextField = () => {
  return <input css={textFieldStyle} type="text" />;
};

export default memo(TextField);
