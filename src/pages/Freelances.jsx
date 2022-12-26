import Card from '../components/Card';
import styled from 'styled-components';
import colors from '../utils/style/colors';
import { useEffect, useState } from 'react';
import { Loader, LoaderWrapper } from '../utils/style/components';

const CardsContainer = styled.main`
  display: grid;
  gap: 50px 0;
  grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
  justify-content: center;
  justify-items: center;
`;

const FreelancesTitle = styled.h1`
  text-align: center;
  color: #2f2e41;
  margin-bottom: 50px;
`;

const FreelancesSubTitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const Freelances = () => {
  const [isDataLoading, setDataLoading] = useState(false);
  const [freelancesData, setFreelancesData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFreelance() {
      setDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/freelances`);
        const { freelancersList } = await response.json();
        setFreelancesData(freelancersList);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchFreelance();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return (
    <main>
      <FreelancesTitle>Trouvez votre prestataire</FreelancesTitle>
      <FreelancesSubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </FreelancesSubTitle>

      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancesData.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </main>
  );
};

export default Freelances;
