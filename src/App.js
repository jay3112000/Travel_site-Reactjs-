import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import amazon from './components/pages/amazon';
import bali from './components/pages/bali';
import mountain from './components/pages/mountain';
import atlantic from './components/pages/atlantic';
import sahara from './components/pages/sahara';
import catalogs from './components/pages/catalog';

import axios from 'axios';
function App() {
  
  return (
    <>
      <Router>
        <Navbar />
       
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/amazon' component={amazon}/>
          <Route path='/bali' component={bali}/>
          <Route path='/atlantic' component={atlantic}/>
          <Route path='/mountain' component={mountain}/>
          <Route path='/sahara' component={sahara}/>
          <Route path='/catalogs' component={catalogs}/>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
