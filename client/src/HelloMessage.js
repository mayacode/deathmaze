import React from 'react';
import { string } from 'prop-types';

export function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

HelloMessage.propTypes = {
  name: string,
};

export default HelloMessage;
