import styled from 'styled-components';
import colors from '../utils/style/colors';
import ErrorPicture from '../assets/error-picture.svg';

const ErrorContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
`;

const ErrorTitle = styled.h1`
  font-weight: 300;
  font-size: 31px;
  margin-bottom: 75px;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: #2f2e41;
  font-size: 31px;
`;

const Illustration = styled.img`
  max-width: 800px;
  margin-bottom: 80px;
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={ErrorPicture} />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorContainer>
  );
}

export default Error;
