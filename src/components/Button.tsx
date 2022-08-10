/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';

type ButtonProps = JSX.IntrinsicElements['button'];

type OtherProps = {
  text: string;
};

type Props = ButtonProps & OtherProps;

const Button = (props: Props) => {
  const { text, ...buttonProps } = props;
  const buttonStyle = css`
    height: 40px;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    background-color: orange;

    &:hover {
      background-color: #d68d05;
    }
  `;
  return (
    <button css={buttonStyle} {...buttonProps}>
      {text}
    </button>
  );
};

export default memo(Button);
