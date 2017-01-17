/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Dialog from './Dialog';
import PlaceholderDialogContent from '../../data/PlaceholderDialogContent';

it('renders correctly', () => {
  const wrapper = mount(
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'fadeIn'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  );

  expect(wrapper).toMatchSnapshot();
});
