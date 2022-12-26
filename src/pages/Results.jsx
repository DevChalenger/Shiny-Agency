import { useContext } from 'react';
import { SurveyContext } from '../utils/context/survey';
import styled from 'styled-components';
import colors from '../utils/style/colors';
import { useFetch } from '../utils/hooks/fetch';
import { StyledLink, Loader, LoaderWrapper } from '../utils/style/components';
import { ThemeContext } from '../utils/context/theme';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 60px 90px;
  padding: 100px 200px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`;

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: 700;
  padding: 0 75px;
  font-size: 31px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`;

const DescriptionWrapper = styled.div`
  margin-top: 60px;
`;

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`;

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`;

function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers);

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0;
    const separator = isFirstParam ? '' : '&';
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
  }, '');
}

function Results() {
  const { theme } = useContext(ThemeContext);
  const { answers } = useContext(SurveyContext);
  const fetchParams = formatFetchParams(answers);

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  );

  if (error) {
    return <span>Il y a un problème</span>;
  }

  const resultsData = data?.resultsData;

  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {result.title}
              {index === resultsData.length - 1 ? '' : ','}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  );
}

export default Results;
