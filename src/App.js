import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components/Layout';
import { Pages } from './components/Page.jsx';
import OrderOnline from './components/OrderOnline.jsx';
import BookaTable from './components/BookaTable.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Pages />}></Route>
            <Route path='/orderonline' element={<OrderOnline />}></Route>
            <Route path='/book' element={<BookaTable />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App

