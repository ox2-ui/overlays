import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Dialog from './Dialog';
import PlaceholderDialogContent from '../../data/PlaceholderDialogContent';

storiesOf('Dialog', module)
  .add('transition • fadeIn', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'fadeIn'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('transition • zoomIn', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'zoomIn'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('transition • slideFromTop', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromTop'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('transition • slideFromBottom', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromBottom'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('transition • slideFromBottom easeOutQuint', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromBottom'}
      className={'color:white transition:easeOutQuint'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('transition • slideFromBottom easeInOutBack', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromBottom'}
      className={'color:white transition:easeInOutBack'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('transition • slideFromLeft', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromLeft'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('transition • slideFromRight', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromRight'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('transition • none', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'none'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('position • top-left  • modal', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromLeft'}
      position={'top-left'}
      isModal={true}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('position • top-center', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromTop'}
      position={'top-center'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('position • top-right', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromRight'}
      position={'top-right'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('position • center-left', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromLeft'}
      position={'center-left'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('position • center', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'zoomIn'}
      position={'center'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('position • center-right', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromRight'}
      position={'center-right'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('position • bottom-left', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromBottom'}
      position={'bottom-left'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('position • bottom-center', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromBottom'}
      position={'bottom-center'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('position • bottom-center', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromBottom'}
      position={'bottom-center'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('position • bottom-right', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromBottom'}
      position={'bottom-right'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('hideShadow • true', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      hideShadow={true}
      transition={'slideFromTop'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('hideOverlay • true', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      hideOverlay={true}
      transition={'slideFromTop'}
      className={'color:white'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('border • rounded', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromTop'}
      className={'color:white border:rounded'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('full width', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'fixed'}
      transition={'slideFromTop'}
      className={'color:white max-w:100p'}
    >
      <PlaceholderDialogContent size="short" />
    </Dialog>
  ))
  .add('type: scrollable • transition • fadeIn', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'scrollable'}
      transition={'fadeIn'}
      className={'color:white margin-t:20'}
    >
      <PlaceholderDialogContent size="long" />
    </Dialog>
  ))
  .add('type: scrollable • transition • slideFromTop', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'scrollable'}
      transition={'slideFromTop'}
      className={'color:white margin-t:20'}
    >
      <PlaceholderDialogContent size="long" />
    </Dialog>
  ))
  .add('type: scrollable • transition • slideFromBottom', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'scrollable'}
      transition={'slideFromBottom'}
      className={'color:white margin-t:20'}
    >
      <PlaceholderDialogContent size="long" />
    </Dialog>
  ))
  .add('type: scrollable • transition • zoomIn', () => (
    <Dialog
      zDepth={10}
      isOpen={true}
      type={'scrollable'}
      transition={'zoomIn'}
      className={'color:white margin-t:20'}
    >
      <PlaceholderDialogContent size="long" />
    </Dialog>
  ));
