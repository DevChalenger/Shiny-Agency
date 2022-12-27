import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context/theme';

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    box-sizing: border-box;
  }   
  body{
    margin:0;
  }
  #root{     
    background-color: ${({ theme }) =>
      theme === 'dark' ? '#2F2E41' : 'white'};
      margin: 0; 
      padding: 40px 64px 0 63px;
      display:flex;
      flex-direction:column;
      min-height: 100vh;
    }  
  a{
    text-decoration:none;
  }
`;

const GlobalStyle = () => {
  const { theme } = useContext(ThemeContext);

  return <StyledGlobalStyle theme={theme} />;
};

export default GlobalStyle;
