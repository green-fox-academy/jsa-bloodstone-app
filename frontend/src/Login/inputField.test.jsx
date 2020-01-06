import React from 'react';
import renderer from 'react-test-renderer';

import InputField from './InputField';

jest.mock('react-redux');
jest.mock('./actionCreator');

describe('<InputField />', () => {
  it('Should render buildings and match the snapshot', () => {
    const component = renderer.create(<InputField />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
