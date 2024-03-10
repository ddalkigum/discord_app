import React from 'react';
import styled from 'styled-components';

const BaseSvg = styled.svg<{ width: number, height: number, color: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  path {
    fill: ${props => props.color};
  }
`

export default BaseSvg;
