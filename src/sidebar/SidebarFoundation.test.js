import React from 'react';
import SidebarFoundation from './SidebarFoundation';

it('set isVisble by default value', () => {
  const adapter = {};
  const sidebar = new SidebarFoundation(adapter);
  expect(sidebar.isVisible).toEqual(false);
});

it('updates isVisible value', () => {
  const adapter = {};
  const sidebar = new SidebarFoundation(adapter);
  expect(sidebar.isVisible).toEqual(false);
  sidebar.update();;
  expect(sidebar.isVisible).toEqual(true);
});
