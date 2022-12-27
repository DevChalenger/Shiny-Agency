import PropTypes from 'prop-types';
import DefaultPicture from '../assets/profile.png';
import styled from 'styled-components';
import colors from '../utils/style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/theme';

const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#FFF')};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`;

const CardTitle = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#FFF')};
  font-size: 25px;
  font-weight: normal;
  align-self: center;
`;

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 325px;
  height: 325px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
const Card = ({ label, title, picture }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <CardWrapper theme={theme}>
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <CardTitle theme={theme}>{title}</CardTitle>
    </CardWrapper>
  );
};
Card.defaultProps = {
  title: '',
  label: '',
  picture: DefaultPicture,
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Card;
