import React from 'react';
import renderer from 'react-test-renderer';

import RankingItem from './RankingItem';

const mockedUsers = [
  {
    username: 'userA',
    gold: 10,
    kingdom: 10,
  },
];

describe('<RankingItem />', () => {
  afterAll(() => {
    jest.resetModules();
  });

  it('Should render RankingItem and match the snapshot', () => {
    const tree = renderer.create(<RankingItem
      key={mockedUsers.username}
      ranking={1}
      gold={mockedUsers.gold}
      kingdom={mockedUsers.kingdom}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
