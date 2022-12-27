import Card from '../components/Card';
import styled from 'styled-components';
import colors from '../utils/style/colors';
import { Loader, LoaderWrapper } from '../utils/style/components';
import { useFetch } from '../utils/hooks/fetch';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../utils/context/theme';
import { useContext } from 'react';

const CardsContainer = styled.main`
  display: grid;
  gap: 50px;
  margin: auto;
  grid-template-columns: repeat(auto-fill, 350px);
  max-width: 900px;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const FreelancesTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => (theme === 'light' ? '#2f2e41' : '#FFF')};
  margin-bottom: 50px;
`;

const FreelancesSubTitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#FFF')};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const Freelances = () => {
  const { theme } = useContext(ThemeContext);

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  );
  const freelancersList = data?.freelancersList;

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return (
    <main>
      <FreelancesTitle theme={theme}>Trouvez votre prestataire</FreelancesTitle>
      <FreelancesSubTitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </FreelancesSubTitle>

      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList?.map((profile, index) => (
            <Link
              to={`/profile/${profile.id}`}
              key={`${profile.name}-${index}`}
            >
              <Card
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
              />
            </Link>
          ))}
        </CardsContainer>
      )}
    </main>
  );
};

export default Freelances;
