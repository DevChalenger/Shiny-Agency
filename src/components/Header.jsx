import { useContext } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import { ThemeContext } from '../utils/context/theme';
import { StyledLink } from '../utils/style/components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 75px;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 20px;
`;
const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  font-size: 20px;
`;

const StyledTitle = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => (theme === 'light' ? '#2F2E41' : 'white')};
`;

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <img src={Logo} alt="app-logo" height={80} />
        <StyledTitle theme={theme}>Shiny</StyledTitle>
      </StyledLogoContainer>
      <StyledNav>
        <StyledLink theme={theme} to={'/'}>
          Accueil
        </StyledLink>
        <StyledLink theme={theme} to={'/freelances'}>
          Profiles
        </StyledLink>
        <StyledLink theme={theme} to={'/survey/1'} $isFullLink>
          Faire le test
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
