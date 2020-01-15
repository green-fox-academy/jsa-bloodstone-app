import React from 'react';
import renderer from 'react-test-renderer';
import { useDispatch, useSelector } from 'react-redux';

import Resources from '.';

jest.mock('react-redux');
jest.mock('./actionCreator');

const resources = [
  {
    type: 'food',
    amount: 1578153586,
    generation: 60,
  },
  {
    type: 'gold',
    amount: 1578153704,
    generation: 60,
  },
];

describe('<Resources />', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => () => {});
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Should render resources and match the snapshot', () => {
    const mockedState = {
      resources: {
        foodAmount: resources[0].amount,
        foodGeneration: resources[0].generation,
        goldAmount: resources[1].amount,
        goldGeneration: resources[1].generation,
        isLoading: false,
        error: undefined,
      },
    };
    useSelector.mockImplementation((func) => func(mockedState));

    const tree = renderer.create(<Resources />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render loading and match the snapshot', () => {
    const mockedState = {
      resources: {
        foodAmount: resources[0].amount,
        foodGeneration: resources[0].generation,
        goldAmount: resources[1].amount,
        goldGeneration: resources[1].generation,
        isLoading: true,
        error: undefined,
      },
    };
    useSelector.mockImplementation((func) => func(mockedState));

    const tree = renderer.create(<Resources />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should render error and match the snapshot', () => {
    const mockedState = {
      resources: {
        foodAmount: resources[0].amount,
        foodGeneration: resources[0].generation,
        goldAmount: resources[1].amount,
        goldGeneration: resources[1].generation,
        isLoading: true,
        error: new Error('test error'),
      },
    };
    useSelector.mockImplementation((func) => func(mockedState));

    const tree = renderer.create(<Resources />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
