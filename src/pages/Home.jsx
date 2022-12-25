import styled from 'styled-components';
import homePicture from '../assets/home-picture.svg';
import { StyledLink } from '../utils/components';
import colors from '../utils/style/colors';

const StyledHome = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 150px 90px;
  background-color: ${colors.backgroundLight};
`;

const StyledPicture = styled.img``;

const StyledLefCol = styled.div`
  width: 552px;
  height: 100%;
`;

const StyledTitle = styled.h2`
  color: #2f2e41;
  font-size: 50px;
  margin-bottom: 100px;
`;
const Home = () => {
  return (
    <StyledHome>
      <StyledLefCol>
        <StyledTitle>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </StyledTitle>
        <StyledLink to={'/survey/'} $isFullLink>
          Faire le test
        </StyledLink>
      </StyledLefCol>
      <StyledPicture src={homePicture} height={500} />
    </StyledHome>
  );
};

export default Home;
