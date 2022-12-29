import styled, { keyframes } from 'styled-components';
import React from 'react';

const ShowPage = ({ children }) => {
  return <StyledShowPage>{children}</StyledShowPage>;
};

export default ShowPage;

const showLeft = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const StyledShowPage = styled.section`
  animation: ${showLeft} 0.3s forwards;
  padding: 0px 20px;
`;
