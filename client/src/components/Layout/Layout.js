import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import Routing from '../Routing/Routing'

export function Layout() {
  const history = useHistory();

  console.log(history);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/active">Active Games</NavLink>
            </li>
            <li>
              <NavLink to="/new">Start New Game</NavLink>
            </li>
            <li>
              <NavLink to="/friends">Friends</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Routing />
      </section>
      <footer>footer</footer>
    </>
  );
}

Layout.displayName = 'Layout';
Layout.propTypes = {};
Layout.whyDidYouRender = true;

export default Layout;
