import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../utils/context/theme';
import { useFetch } from '../utils/hooks/fetch';
import colors from '../utils/style/colors';
import { Loader, LoaderWrapper } from '../utils/style/components';

const StyledProfileContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 110px 290px;
  gap: 100px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  h2,
  h3 {
    margin: 0;
  }
`;

const ProfileInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileInformationHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
`;

const ProfileName = styled.h2`
  font-size: 31px;

  color: ${({ theme }) => (theme === 'light' ? '#2F2E41' : '#FFF')};
`;

const ProfileLocation = styled.h3`
  font-size: 18px;

  color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#FFF')};
`;

const ProfileJob = styled.h2`
  font-size: 25px;
  color: ${({ theme }) => (theme === 'light' ? '#2F2E41' : '#FFF')};
`;

const ProfileSkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 12px;
`;

const ProfileSkillesItem = styled.li`
  padding: 7px 15px;
  border-radius: 8px;
  color: ${({ theme }) => (theme === 'light' ? '#2F2E41' : '#FFF')};
  border: 1px solid ${({ theme }) => (theme === 'light' ? '#2F2E41' : '#FFF')};
`;

const ProfileAvailable = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#2F2E41' : '#FFF')};
  &:before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    margin-right: 11px;
    ${({ $available }) => $available && 'background-color: #57b894'};
    ${({ $unavailable }) => $unavailable && 'background-color: #da4f49'};
  }
`;

const ProfilePaidPerDay = styled.h2`
  font-size: 31px;
  color: ${({ theme }) => (theme === 'light' ? '#2F2E41' : '#FFF')};
`;

const ProfilePicture = styled.img`
  height: 205px;
  width: 205px;
  border-radius: 100%;
`;

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelance/?id=${id}`
  );
  /* { name, location, job, available, picture, skills, tjm }*/
  const freelanceData = data?.freelanceData;

  if (error) {
    return <div>Oups error occured</div>;
  }
  return isLoading ? (
    <LoaderWrapper>
      <Loader />
      <span>Loading Profile</span>
    </LoaderWrapper>
  ) : (
    <StyledProfileContainer theme={theme}>
      <ProfilePicture src={freelanceData?.picture} />
      <ProfileInformationContainer>
        <ProfileInformationHeader>
          <ProfileName theme={theme}>{freelanceData?.name}</ProfileName>
          <ProfileLocation theme={theme}>
            {freelanceData?.location}
          </ProfileLocation>
        </ProfileInformationHeader>
        <ProfileJob theme={theme}>{freelanceData?.job}</ProfileJob>
        <ProfileSkillsList>
          {freelanceData?.skills.map((skills, index) => (
            <ProfileSkillesItem theme={theme} key={skills + index}>
              {skills}
            </ProfileSkillesItem>
          ))}
        </ProfileSkillsList>
        {freelanceData?.available ? (
          <ProfileAvailable theme={theme} $available>
            Disponible maintenant
          </ProfileAvailable>
        ) : (
          <ProfileAvailable theme={theme} $unavailable>
            Indisponible Pour l'instant
          </ProfileAvailable>
        )}
        <ProfilePaidPerDay theme={theme}>
          {freelanceData?.tjm} € / jour
        </ProfilePaidPerDay>
      </ProfileInformationContainer>
    </StyledProfileContainer>
  );
};

export default Profile;
