import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as history from 'history';
import Dashboard from './pages/Dashboard';
import Navbar from './common/Navbar';

function App() {
  const Loader = () => {
    return <>loading...</>;
  };
  return (
    <Router history={history}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path='/'
            element={
              <Navbar>
                <Dashboard />
              </Navbar>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
