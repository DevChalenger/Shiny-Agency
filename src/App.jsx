// React Router
import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from 'react-router-dom';

// Header and Footer
import Header from './components/Header';
import Footer from './components/Footer';

// Routes path
import Home from './pages/Home';
import Survey from './pages/Survey';
import Error from './pages/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';

import { ThemeProvider } from './utils/context/theme';
import GlobalStyle from './utils/style/GlobalStyle';
import { SurveyProvider } from './utils/context/survey';

const App = () => {
  return (
    <ThemeProvider>
      <SurveyProvider>
        <Router>
          <GlobalStyle />
          <Header />
          <Navigation>
            <Route exact path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Navigation>
          <Footer />
        </Router>
      </SurveyProvider>
    </ThemeProvider>
  );
};

export default App;
