// React Router
import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from 'react-router-dom';

// Header and Footer
import Header from './components/Header';

// Routes path
import Home from './pages/Home';
import Survey from './pages/Survey';
import Error404 from './pages/Error404';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        box-sizing: border-box;
    }
    
`;

const AppContainer = styled.div`
  padding: 40px 64px 0 63px;
`;

const App = () => {
  return (
    <AppContainer className="app">
      <Router>
        <GlobalStyle />
        <Header />
        <Navigation>
          <Route exact path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="*" element={<Error404 />} />
        </Navigation>
      </Router>
    </AppContainer>
  );
};

export default App;
