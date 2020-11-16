import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Admin from '../pages/Admin';
import Test from '../pages/Test';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home/admin' exact component={Admin} />
        <Route path='/home/test' exact component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
