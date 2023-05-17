import React from 'react';
import { render } from '@testing-library/react';
import ReadingPane from './ReadingPane';
import fetchMock from "jest-fetch-mock";

// Configure fetch mock
fetchMock.enableMocks();

describe('ReadingPane', () => {
  test('Unit Test for the ReadingPane component', () => {

    const items = [
      { id: 1, title: 'Article 1', content: 'Content 1' },
      { id: 2, title: 'Article 2', content: 'Content 2' },
    ];

    // Render the ReadingPane component
    const { container } = render(<ReadingPane items={items} />);

    // Test if the rendered component matches the saved snapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
