/* eslint-env mocha */

import React from 'react';
import { shallow, mount } from 'enzyme';
import PlaceholderDialogContent from './PlaceholderDialogContent';
import { assert } from 'chai';

describe('PlaceholderDialogContent', () => {
  it('should render a <PlaceholderDialogContent> element', () => {
    const wrapper = shallow(
      <PlaceholderDialogContent />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
