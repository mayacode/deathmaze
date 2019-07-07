import React from 'react';
import { shallow } from 'enzyme';

import HelloMessage from './HelloMessage';

describe('<HelloMessage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HelloMessage name="Ala" />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render name Ala', () => {
    expect(wrapper.text()).toBe('Hello Ala');
  });
});
