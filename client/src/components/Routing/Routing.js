import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Friends from '../Friends/Friends';

export function Routing() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/friends">
          <Friends />
        </Route>
      </Switch>
    </>
  )
}

Routing.displayName = 'Routing';
Routing.propTypes = {};
Routing.whyDidYouRender = true;

export default Routing;