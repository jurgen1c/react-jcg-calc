import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <Calculator />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});