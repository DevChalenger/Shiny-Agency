import styled from 'styled-components';
import Logo from '../assets/dark-logo.png';
import { StyledLink } from '../utils/components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 75px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={Logo} alt="app-logo" height={80} />
      </div>
      <nav>
        <StyledLink to={'/'}>Accueil</StyledLink>
        <StyledLink to={'/freelances'}>Profiles</StyledLink>
        <StyledLink to={'/survey/1'} $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;
