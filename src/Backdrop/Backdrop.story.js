import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Backdrop from './Backdrop';

storiesOf('Backdrop', module)
  .add('opened', () => (
    <Backdrop zDepth={2} isOpen={true} />
  ))
  .add('closing', () => (
    <Backdrop zDepth={2} isOpen={false} />
  ));
