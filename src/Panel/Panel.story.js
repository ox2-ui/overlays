import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Panel from './Panel';
import Scroller from '@ox2/scroller/Scroller';
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
      <Scroller className="padding-b:40">
        <PlaceholderDialogContent size="long" />
      </Scroller>
    </Panel>
  ))
  .add('left panel2 ', () => (
    <div>
      <button className="pos:absolute-0" style={{zIndex: 9}}>some</button>
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
    </div>
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
      <Scroller className="padding-b:40">
        <PlaceholderDialogContent size="long" />
      </Scroller>
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
      <Scroller className="padding-b:40">
        <PlaceholderDialogContent size="long" />
      </Scroller>
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
      <Scroller className="padding-b:40">
        <PlaceholderDialogContent size="long" />
      </Scroller>
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
      <Scroller className="padding-b:40">
        <PlaceholderDialogContent size="long" />
      </Scroller>
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
      <Scroller className="padding-b:40">
        <PlaceholderDialogContent size="long" />
      </Scroller>
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
      <Scroller className="padding-b:40">
        <PlaceholderDialogContent size="long" />
      </Scroller>
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
      <Scroller className="padding-b:40">
        <PlaceholderDialogContent size="long" />
      </Scroller>
    </Panel>
  ));
