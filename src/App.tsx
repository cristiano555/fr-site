import React, { Fragment, FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage'

const App:FC = () => {
  return (
    <Fragment>
       <Router>
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
      </Router> 
    </Fragment>
  
    // <p>test</p>
  );
}

export default App;
