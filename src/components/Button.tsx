/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';

type ButtonProps = JSX.IntrinsicElements['button'];

type OtherProps = {
  text: string;
  variant: 'search' | 'slider';
};

type Props = ButtonProps & OtherProps;

const Button = (props: Props) => {
  const { text, variant, ...buttonProps } = props;

  const searchButtonStyle = css`
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

  const sliderButtonStyle = css`
    height: 40px;
    border-radius: 4px;
    color: #006fe7;
    border: 1px solid #006fe7;
    font-size: 16px;
  `;

  const buttonStyle = () => {
    switch (variant) {
      case 'search':
        return searchButtonStyle;
      case 'slider':
        return sliderButtonStyle;
    }
  };

  return (
    <button css={buttonStyle} {...buttonProps}>
      {text}
    </button>
  );
};

export default memo(Button);
