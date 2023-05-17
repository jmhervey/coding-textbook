import React from 'react';
import { render } from '@testing-library/react';
import ReadingAssignment from './ReadingAssignment';
import fetchMock from "jest-fetch-mock";

// Configure fetch mock
fetchMock.enableMocks();

describe('ReadingAssignment', () => {
  test('Unit Test for the ReadingAssignment component', () => {

    const items = [
      { id: 1, title: 'Article 1', content: 'Content 1' },
      { id: 2, title: 'Article 2', content: 'Content 2' },
    ];

    // Render the ReadingAssignment component
    const { container } = render(<ReadingAssignment items={items} />);

    // Test if the rendered component matches the saved snapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
