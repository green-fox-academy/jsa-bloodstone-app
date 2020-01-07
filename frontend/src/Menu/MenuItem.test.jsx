import React from 'react';
import renderer from 'react-test-renderer';

import MenuItem from './MenuItem';

describe('<MenuItem />', () => {
  it('Should render menu item and match the snapshot', () => {
    const component = renderer.create(<MenuItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
