import {
  lazy,
  Suspense,
  useState,
  useEffect,
} from 'react';

import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import { LoadingScreen } from './components/common/LoadingScreen';
import { ErrorBoundary } from './components/common/ErrorBoundary';

/* Lazy Pages */
const LandingPage = lazy(() =>
  import('./pages/LandingPage').then(
    (module) => ({
      default: module.LandingPage,
    })
  )
);

const TeamPage = lazy(() =>
  import('./pages/TeamPage').then(
    (module) => ({
      default: module.TeamPage,
    })
  )
);

const ContactPage = lazy(() =>
  import('./pages/ContactPage').then(
    (module) => ({
      default: module.ContactPage,
    })
  )
);

const AnalyzePage = lazy(() =>
  import('./pages/AnalyzePage').then(
    (module) => ({
      default: module.AnalyzePage,
    })
  )
);

const ResultsPage = lazy(() =>
  import('./pages/ResultsPage').then(
    (module) => ({
      default: module.ResultsPage,
    })
  )
);

const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then(
    (module) => ({
      default: module.NotFoundPage,
    })
  )
);

function App() {
  const [results, setResults] =
    useState(() => {
      try {
        const saved =
          localStorage.getItem(
            'career_results'
          );

        return saved
          ? JSON.parse(saved)
          : [];
      } catch (error) {
        console.error(
          'LocalStorage Error:',
          error
        );

        return [];
      }
    });

  // SAVE STORAGE SAFELY
  useEffect(() => {
    try {
      localStorage.setItem(
        'career_results',
        JSON.stringify(
          results.slice(0, 20)
        )
      );
    } catch (error) {
      console.error(
        'Storage Save Error:',
        error
      );
    }
  }, [results]);

  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <Suspense
        fallback={<LoadingScreen />}
      >
        <Routes>

          {/* LANDING */}
          <Route
            path="/"
            element={<LandingPage />}
          />

          {/* TEAM */}
          <Route
            path="/team"
            element={<TeamPage />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />

          {/* ANALYZE */}
          <Route
            path="/analyze"
            element={
              <AnalyzePage
                onSuccess={(data) => {
                  setResults(
                    data?.recommendations || []
                  );

                  navigate('/results');
                }}
              />
            }
          />

          {/* RESULTS */}
          <Route
            path="/results"
            element={
              <ResultsPage
                results={results}
                onBack={() => navigate('/')}
                onAnalyzeNew={() => navigate('/analyze')}
              />
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFoundPage />}
          />

        </Routes>
      </Suspense>
    </ErrorBoundary>
    
  );
}

export default App;