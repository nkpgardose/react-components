import React from 'react';
import { shallow, mount } from 'enzyme';
import Sidebar from './Sidebar';

it('renders without crashing', () => {
  shallow(<Sidebar />);
});

it('renders with the content', () => {
  const content = <a className="item" href="#">Home</a>;
  const wrapper = shallow(
    <Sidebar>
      <nav className="List">
        <a className="item" href="#">Home</a>
        <a className="item" href="#">About</a>
        <a className="item" href="#">Help</a>
        <a className="item" href="#">Contact</a>
      </nav>
    </Sidebar>
  );

  expect(wrapper.contains(content)).toEqual(true)
});

it('shows sidebar on render', () => {
  const wrapper = mount(<Sidebar isVisible={true} />);
  expect(wrapper.find('div.Sidebar.isVisible').length).toBe(1);
});

it('open and close when toggling btn', () => {
  const wrapper = mount(<Sidebar />);
  wrapper.find('.btnToggle').get(0).click();
  expect(wrapper.find('div.Sidebar.isVisible').length).toBe(1);
  wrapper.find('.btnToggle').get(0).click();
  expect(wrapper.find('div.Sidebar.isVisible').length).toBe(0);
});
