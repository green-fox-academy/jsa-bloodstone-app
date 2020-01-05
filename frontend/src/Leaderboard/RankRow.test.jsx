import React from 'react';
import renderer from 'react-test-renderer';
import RankRow from '.';

const mockedUsers = [
  {
    username: 'userA',
    gold: 10,
    kingdom: 10,
  },
];

describe('<RankRow />', () => {
  afterAll(() => {
    jest.resetModules();
  });

  it('Should render RankRow and match the snapshot', () => {
    const tree = renderer.create(<RankRow
      key={mockedUsers.username}
      rank={1}
      username={mockedUsers.username}
      gold={mockedUsers.gold}
      kingdoms={mockedUsers.kingdom}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
