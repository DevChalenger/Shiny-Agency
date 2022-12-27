import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../utils/context/theme';
import colors from '../utils/style/colors';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2em;
  padding-top: 60px;
  margin-top: auto;
`;

const NightModeButton = styled.button`
  background-color: transparent;
  font-size: 20px;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`;

const Footer = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  );
};

export default Footer;
