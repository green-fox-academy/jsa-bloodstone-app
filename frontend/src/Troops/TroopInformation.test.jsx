import React from 'react';
import renderer from 'react-test-renderer';

import TroopInformation from './TroopInformation';

jest.mock('react-redux');
jest.mock('./actionCreator');

describe('<TroopInformation />', () => {
  it('Should render buildings and match the snapshot', () => {
    const component = renderer.create(<TroopInformation />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
