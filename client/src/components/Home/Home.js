import React from 'react';

export function Home({ match, location, history }) {
  function handleClick(evt) {
    const target = evt.target;
    const content = target.textContent;

    if (content === 'd') {
      history.replace(`${location.pathname}?content=c`);
      return
    }
    history.replace(`${location.pathname}?content=${content}`);
  }
  return (
    <>
      <h1>home{console.log('render')}</h1>
      <div onClick={handleClick}>
        <span>a</span>{' '}
        <span>b</span>{' '}
        <span>c</span>{' '}
        <span>d</span>
      </div>
    </>
  );
}

Home.displayName = 'Home';
Home.propTypes = {};
Home.whyDidYouRender = true;

function areEqual(prev, next) {
  return prev.location.pathname === next.location.pathname &&
    prev.location.search === next.location.search &&
    prev.location.hash === next.location.hash;
}

export default Home;
//export default React.memo(Home, areEqual);