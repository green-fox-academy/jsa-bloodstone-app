import React from 'react';
import renderer from 'react-test-renderer';
import { TouchableHighlight } from 'react-native';

import BuildingItem from './buildingItem';

import farmIcon from '../../assets/buildings/factory.png';

const mockGetIconImage = jest.fn(() => farmIcon);

describe('<BuildingItem />', () => {
  afterAll(() => {
    jest.resetModules();
  });

  it('Should render BuildingItem and match the snapshot', () => {
    const mockOnPress = jest.fn(() => { });

    const tree = renderer.create(<BuildingItem
      type="test type"
      level={1}
      onPress={mockOnPress}
      getIconImage={mockGetIconImage}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should call onPress when press BuildingItem', () => {
    const mockOnPress = jest.fn(() => { });

    const testRenderer = renderer.create(<BuildingItem
      type="test type"
      level={1}
      onPress={mockOnPress}
      getIconImage={mockGetIconImage}
    />);
    const testInstance = testRenderer.root;

    testInstance.findByType(TouchableHighlight).props.onPress();
    expect(mockOnPress).toHaveBeenCalled();
  });
});
