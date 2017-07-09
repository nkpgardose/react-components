import React from 'react';
import { shallow } from 'enzyme';
import ComponentContainer from './ComponentContainer';

it('renders without crashing', () => {
  shallow(<ComponentContainer />);
});

it('renders with content', () => {
  const title = <h1>This is a sample content</h1>;
  const wrapper = shallow(
    <ComponentContainer>
      <h1>This is a sample content</h1>;
    </ComponentContainer>
  );

  expect(wrapper.contains(title)).toEqual(true);
})
