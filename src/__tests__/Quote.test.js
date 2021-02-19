import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('Componenet renders correctly', () => {
  const component = renderer.create(
    <Quote />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});