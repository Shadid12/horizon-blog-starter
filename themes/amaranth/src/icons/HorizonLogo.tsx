import React from 'react';
import styled from "styled-components";
import Horizon from './horizon.svg';

const HorizonLogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0D0D0E;
  padding: 5px;
  border-radius: 10px;
`

export default function HorizonLogo() {
  return (
    <HorizonLogoWrap>
      <Horizon />
    </HorizonLogoWrap>
  )
}