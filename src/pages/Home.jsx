import styled from 'styled-components';
import homePicture from '../assets/home-picture.svg';
import { StyledLink } from '../utils/style/components';
import colors from '../utils/style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/theme';

const StyledHome = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 150px 90px;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? `${colors.backgroundLight}`
      : `${colors.backgroundDark}`};
`;

const StyledPicture = styled.img``;

const StyledLefCol = styled.div`
  width: 552px;
  height: 100%;
`;

const StyledTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? `#2F2E41` : `#FFF`)};
  font-size: 50px;
  margin-bottom: 100px;
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledHome theme={theme}>
      <StyledLefCol>
        <StyledTitle theme={theme}>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </StyledTitle>
        <StyledLink to={'/survey/1'} $isFullLink $isSectionLink>
          Faire le test
        </StyledLink>
      </StyledLefCol>
      <StyledPicture src={homePicture} height={500} />
    </StyledHome>
  );
};

export default Home;
