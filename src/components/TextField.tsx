/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo } from 'react';

type InputProp = JSX.IntrinsicElements['input'];

type OtherProps = {
  handleInput: (text: string) => void;
};

type Props = InputProp & OtherProps;

const textFieldStyle = css`
  height: 40px;
  border: 2px solid #a0a0a0;
`;

const TextField: React.FC<Props> = (props) => {
  const { handleInput, ...inputProps } = props;
  return (
    <input
      css={textFieldStyle}
      type="text"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleInput(e.target.value)
      }
      {...inputProps}
    />
  );
};

export default memo(TextField);
