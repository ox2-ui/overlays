/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Backdrop from './Backdrop';

it('renders enabled', () => {
  const wrapper = mount(
    <Backdrop zDepth={2} isOpen={true} />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders disabled', () => {
  const wrapper = mount(
    <Backdrop zDepth={2} isOpen={false} />
  );

  expect(wrapper).toMatchSnapshot();
});
