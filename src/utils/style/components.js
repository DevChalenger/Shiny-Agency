import { Link } from 'react-router-dom';
import colors from './colors';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  justify-content: center;
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;

export const StyledLink = styled(Link)`
  padding: 10px 25px;

  text-decoration: none;
  font-size: 18px;
  text-align: center;
  color: ${({ theme, $isFullLink }) =>
    theme === 'light' && !$isFullLink ? '#8186a0' : '#FFFFFF'};
  ${({ $isFullLink }) =>
    $isFullLink &&
    `background-color:${colors.primary}; 
    border-radius:30px;`}
  ${({ $isSectionLink }) => $isSectionLink && `padding:10px 70px`}
`;
