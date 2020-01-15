import React from 'react';
import renderer from 'react-test-renderer';

import MenuItem from './MenuItem';

import buildingMenuIcon from '../../assets/menu/Buildings.png';

describe('<MenuItem />', () => {
  it('Should render menu item and match the snapshot', () => {
    const component = renderer.create(<MenuItem src={buildingMenuIcon} name="buildings" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
