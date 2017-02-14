import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Panel from './Panel';
import PlaceholderDialogContent from '../../data/PlaceholderDialogContent';

storiesOf('Panel', module)
  .add('left panel', () => (
    <Panel
      zDepth={10}
      isOpen={true}
      maxWidth={'320px'}
      width={'93%'}
      transition={'slideFromLeft'}
      right={'auto'}
      className={'color:white'}
    >
      <PlaceholderDialogContent hasScroller={true} size="long" />
    </Panel>
  ))
  .add('right panel', () => (
    <Panel
      zDepth={10}
      isOpen={true}
      maxWidth={'320px'}
      width={'93%'}
      transition={'slideFromRight'}
      left={'auto'}
      className={'color:white'}
    >
      <PlaceholderDialogContent hasScroller={true} size="long" />
    </Panel>
  ))
  .add('right panel • modal', () => (
    <Panel
      zDepth={10}
      isOpen={true}
      maxWidth={'320px'}
      width={'93%'}
      isModal={true}
      transition={'slideFromRight'}
      left={'auto'}
      className={'color:white'}
    >
      <PlaceholderDialogContent hasScroller={true} size="long" />
    </Panel>
  ))
  .add('fullscreen', () => (
    <Panel
      zDepth={10}
      isOpen={true}
      hideBackdrop={true}
      transition={'zoomIn'}
      className={'color:white'}
    >
      <PlaceholderDialogContent hasScroller={true} size="long" />
    </Panel>
  ))
  .add('fullscreen • slideFromBottom', () => (
    <Panel
      zDepth={10}
      isOpen={true}
      hideBackdrop={true}
      transition={'slideFromBottom'}
      className={'color:white'}
    >
      <PlaceholderDialogContent hasScroller={true} size="long" />
    </Panel>
  ))
  .add('maxWidth centered • slideFromBottom', () => (
    <Panel
      zDepth={10}
      isOpen={true}
      maxWidth={'600px'}
      centered={true}
      transition={'slideFromBottom'}
      className={'color:white'}
    >
      <PlaceholderDialogContent hasScroller={true} size="long" />
    </Panel>
  ))
  .add('bottom left', () => (
    <Panel
      zDepth={10}
      isOpen={true}
      maxWidth={'320px'}
      width={'93%'}
      height={'500px'}
      transition={'slideFromRight'}
      left={'auto'}
      top={'auto'}
      className={'color:white'}
    >
      <PlaceholderDialogContent hasScroller={true} size="long" />
    </Panel>
  ))
  .add('right panel • top spacing', () => (
    <Panel
      zDepth={10}
      isOpen={true}
      maxWidth={'320px'}
      width={'93%'}
      transition={'slideFromRight'}
      left={'auto'}
      top={'20px'}
      className={'color:white'}
    >
      <PlaceholderDialogContent hasScroller={true} size="long" />
    </Panel>
  ));