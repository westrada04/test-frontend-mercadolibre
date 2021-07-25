/* External */
import React, { memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Components */
import Home from './Home';
import Items from './Items';
import ItemsById from './ItemsById';

/* Utils */
import { ROUTES } from '../utils/router';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.Home}>
          <Home />
        </Route>
        <Route path={ROUTES.Items}>
          <Switch>
            <Route exact path={ROUTES.Items}>
              <Items />
            </Route>
            <Route path={ROUTES.ItemsById}>
              <ItemsById />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default memo(Routes);