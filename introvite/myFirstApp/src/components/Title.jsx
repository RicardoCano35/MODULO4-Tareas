import React from 'react';
import styled from 'styled-components';

function Component() {
  const TitleStyled = styled.h1`
    color: blue;
    font-size: 24px;
    text-align: center;
  `;

  return (
    <div>
      <TitleStyled>Rick Sanchez</TitleStyled>
    </div>
  );
}

export default Component;