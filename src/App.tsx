import React, { Fragment, FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './helpers/styles';
import Header from './components/Header/Header'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import B2B from './pages/B2B'

const App:FC = () => {
  return (
    <>
      <GlobalStyle/>
      <Router>
          <Header/>      
          <Switch>
            <Route exact path="/">
              <AboutUs />
              <Contact />
            </Route>
            <Route path="/b2b">
              <B2B />
            </Route>
          </Switch>
      </Router> 
    </>
  );
}

export default App;
