import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { addBuildingSuccess } from './actionCreator';

import Buildings from '.';
import BuildingItem from './buildingItem';
import AddBuildingItem from './addBuildingItem';
import OneBuilding from '../OneBuilding';

jest.mock('react-redux');
jest.mock('./actionCreator');
jest.mock('./buildingItem', () => () => 'buildingItem');
jest.mock('./addBuildingItem', () => () => 'addBuildingItem');
jest.mock('../OneBuilding', () => () => 'oneBuilding');

const buildings = [
  {
    id: 1,
    type: 'Townhall',
    level: 1,
    hp: 1,
    started_at: 12345789,
    finished_at: 12399999,
  }, {
    id: 2,
    type: 'Academy',
    level: 1,
    hp: 1,
    started_at: 12345789,
    finished_at: 12399999,
  }, {
    id: 3,
    type: 'Farm',
    level: 1,
    hp: 1,
    started_at: 12345789,
    finished_at: 12399999,
  }, {
    id: 4,
    type: 'Mine',
    level: 1,
    hp: 1,
    started_at: 12345789,
    finished_at: 12399999,
  },
];

describe('<Buildings />', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => () => {});
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Should opening oneBuilding after press BuildingItem', () => {
    const mockedState = {
      buildings: {
        listOfBuildings: buildings,
        isLoading: false,
        error: undefined,
      },
    };
    useSelector.mockImplementation((func) => func(mockedState));

    const testRenderer = renderer.create(<Buildings />);
    const testInstance = testRenderer.root;

    act(() => {
      testInstance.findAllByType(BuildingItem).forEach((node) => {
        node.props.onPress();
      });
    });

    expect(testInstance.findAllByType(OneBuilding).length).toBe(1);
  });

  it('Should add BuildingItems after press AddBuildingItem', () => {
    const mockedState = {
      buildings: {
        listOfBuildings: buildings,
        isLoading: false,
        error: undefined,
      },
    };
    useSelector.mockImplementation((func) => func(mockedState));
    const mockDispatch = jest.fn(() => { });
    useDispatch.mockImplementation(() => mockDispatch);
    addBuildingSuccess.mockReturnValue('test_action');

    const testRenderer = renderer.create(<Buildings />);
    const testInstance = testRenderer.root;

    testInstance.findAllByType(AddBuildingItem).forEach((node) => {
      node.props.onPress();
    });
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith('test_action');
  });

  it('Should render buildings and match the snapshot', () => {
    const mockedState = {
      buildings: {
        listOfBuildings: buildings,
        isLoading: false,
        error: undefined,
      },
    };
    useSelector.mockImplementation((func) => func(mockedState));

    const tree = renderer.create(<Buildings />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render loading and match the snapshot', () => {
    const mockedState = {
      buildings: {
        listOfBuildings: buildings,
        isLoading: true,
        error: undefined,
      },
    };
    useSelector.mockImplementation((func) => func(mockedState));

    const tree = renderer.create(<Buildings />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render error and match the snapshot', () => {
    const mockedState = {
      buildings: {
        listOfBuildings: buildings,
        isLoading: true,
        error: new Error('test error'),
      },
    };
    useSelector.mockImplementation((func) => func(mockedState));

    const tree = renderer.create(<Buildings />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
