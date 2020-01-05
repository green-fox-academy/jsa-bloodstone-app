import React from 'react';
import renderer from 'react-test-renderer';
// import { Alert } from 'react-native';

// import Leaderboard from '.';
import RankRow from './RankRow';
// import { SearchBar } from '../common/components';

const mockedUsers = [
  {
    username: 'userA',
    gold: 10,
    kingdom: 10,
  },
  {
    username: 'userB',
    gold: 12,
    kingdom: 12,
  },
  {
    username: 'userCCCCCCCCCCCcCCC',
    gold: 12,
    kingdom: 12,
  },
];

jest.mock('react-redux');
jest.mock('./RankRow', () => () => 'RankRow');

describe('<Learderboard />', () => {
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

  // it('Should popup an alert after send value from SearchBar', () => {
  //   const wrapper = renderer.create(
  //     <SearchBar />,
  //   );
  //   act(() => {
  //     wrapper.onSubmit(<SearchBar onSubmit={(value) => Alert.alert(`search user ${value}`)} />);
  //   });
  //   expect(wrapper.onSubmit(
  //     <SearchBar onSubmit={(value) => Alert.alert(`search user ${value}`)} />));
  // });
});
