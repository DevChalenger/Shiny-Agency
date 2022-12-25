import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './style/colors';

export const StyledLink = styled(Link)`
  padding: 10px 25px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;