import React from 'react';
import renderer from 'react-test-renderer';
import MyRankingItem from '.';

const mockedUsers = [
  {
    ranking: 3,
    gold: 200,
    kingdom: 200,
  },
];

describe('<MyRankingItem />', () => {
  afterAll(() => {
    jest.resetModules();
  });

  it('Should render MyRankingItem and match the snapshot', () => {
    const tree = renderer.create(<MyRankingItem
      ranking={mockedUsers.ranking}
      gold={mockedUsers.gold}
      kingdom={mockedUsers.kingdom}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
