import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { useDispatch, useSelector } from 'react-redux';

import Troops from '.';

jest.mock('react-redux');

const myTroops = {
  troops: [
    {
      id: 1,
      level: 1,
      hp: 1,
      attack: 1,
      defence: 1,
      started_at: 12345789,
      finished_at: 12399999,
    },
    {
      id: 2,
      level: 1,
      hp: 1,
      attack: 1,
      defence: 1,
      started_at: 12345789,
      finished_at: 12399999,
    },
    {
      id: 3,
      level: 2,
      hp: 1,
      attack: 1,
      defence: 1,
      started_at: 12345789,
      finished_at: 12399999,
    },
    {
      id: 4,
      level: 3,
      hp: 1,
      attack: 1,
      defence: 1,
      started_at: 12345789,
      finished_at: 12399999,
    },
    {
      id: 5,
      level: 3,
      hp: 1,
      attack: 1,
      defence: 1,
      started_at: 12345789,
      finished_at: 12399999,
    },
  ],
};

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
    };
    useSelector.mockImplementation((func) => func(mockedState));
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Troops />);
    expect(tree).toMatchSnapshot();
  });
});
