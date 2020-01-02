import React from 'react';
import renderer from 'react-test-renderer';
import { TouchableHighlight } from 'react-native';

import AddBuildingItem from './addBuildingItem';

import addFarmIcon from '../../assets/buildings/addFarm.png';

describe('<AddBuildingItem />', () => {
  afterAll(() => {
    jest.resetModules();
  });

  it('Should render AddBuildingItem and match the snapshot', () => {
    const mockOnPress = jest.fn(() => {});

    const tree = renderer.create(<AddBuildingItem
      icon={addFarmIcon}
      type="test type"
      onPress={mockOnPress}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should call onPress when AddBuildingItem and match the snapshot', () => {
    const mockOnPress = jest.fn(() => { });

    const testRenderer = renderer.create(<AddBuildingItem
      icon={addFarmIcon}
      type="test type"
      onPress={mockOnPress}
    />);
    const testInstance = testRenderer.root;

    testInstance.findByType(TouchableHighlight).props.onPress();
    expect(mockOnPress).toHaveBeenCalled();
  });
});
