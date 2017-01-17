/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Panel from './Panel';
import Scroller from '@ox2/scroller/Scroller';
import PlaceholderDialogContent from '../../data/PlaceholderDialogContent';

it('renders correctly', () => {
  const wrapper = mount(
    <Panel
      zDepth={10}
      isOpen={true}
      maxWidth={'320px'}
      width={'93%'}
      transition={'slideFromLeft'}
      right={'auto'}
      className={'color:white'}
    >
      <Scroller className="padding-b:40">
        <PlaceholderDialogContent size="long" />
      </Scroller>
    </Panel>
  );

  expect(wrapper).toMatchSnapshot();
});
