import React from 'react';
import renderer from 'react-test-renderer';

import SubmitButton from './SubmitButton';

jest.mock('react-redux');
jest.mock('./actionCreator');

describe('<SubmitButton />', () => {
  it('Should render buildings and match the snapshot', () => {
    const component = renderer.create(<SubmitButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
