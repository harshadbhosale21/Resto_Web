import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout';
import Pages from './components/Page.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Pages />
        </main>

      </Router>
    </>
  )
}

export default App

