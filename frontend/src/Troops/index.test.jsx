import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { useDispatch, useSelector } from 'react-redux';

import Troops from '.';

jest.mock('react-redux');

const myTroops = [{
  countByLevel: [
    {
      level: 3,
      count: 6,
    },
    {
      level: 2,
      count: 4,
    },
  ],
  _id: '5e153c8390324235e87f2256',
  owner: '5e12cae11f7ea21cc843f669',
  attack: 26,
  defence: 26,
  hp: 10,
  battleRating: 26,
}];

describe('<Troops />', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => () => {});
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Should render loading and match the snapshot', () => {
    const mockedState = {
      troops: {
        listOfTroops: myTroops,
        isLoading: true,
        error: undefined,
      },
      auth: {
        token: 'test token',
      },
    };
    useSelector.mockImplementation((func) => func(mockedState));
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Troops />);
    expect(tree).toMatchSnapshot();
  });

  it('Should render error and match the snapshot', () => {
    const mockedState = {
      troops: {
        listOfTroops: myTroops,
        isLoading: true,
        error: new Error('test error'),
      },
      auth: {
        token: 'test token',
      },
    };
    useSelector.mockImplementation((func) => func(mockedState));
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Troops />);
    expect(tree).toMatchSnapshot();
  });
});
