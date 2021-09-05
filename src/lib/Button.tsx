import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Color } from 'types/theme';

const Button = styled.button(
  ({ color = Color.primary }) => css`
    padding: 1rem;
    border: none;
    border-radius: 4px;
    color: white;
    background-color: ${color};
    :hover {
      color: white;
      background-color: black;
    }
  `
);

export default Button;
