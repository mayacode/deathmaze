import React from 'react';
import ReactDOM from 'react-dom';
import { string } from 'prop-types';

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

HelloMessage.propTypes = {
  name: string,
};

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('deathmaze-app'),
);
