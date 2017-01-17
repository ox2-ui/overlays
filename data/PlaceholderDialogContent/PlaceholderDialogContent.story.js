import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PlaceholderDialogContent from './PlaceholderDialogContent';

storiesOf('PlaceholderDialogContent', module)
  .add('default', () => (
    <PlaceholderDialogContent />
  ));
