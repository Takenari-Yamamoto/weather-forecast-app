/** @jsxImportSource @emotion/react */
import { memo } from 'react';
import { css } from '@emotion/react';

type Props = {
  title: string;
};

const Title = (props: Props) => {
  const { title } = props;

  const titleStyle = css`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 8px;
  `;

  return <p css={titleStyle}>{title}</p>;
};

export default memo(Title);
