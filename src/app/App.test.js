import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders title', () => {
  const wrapper = shallow(<App />);
  const title = <h1 className="Title">List of Components</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});

