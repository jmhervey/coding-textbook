import React from 'react';
import { render } from '@testing-library/react';
import ReadingList from './ReadingList';
import fetchMock from "jest-fetch-mock";

// Configure fetch mock
fetchMock.enableMocks();

describe('ReadingList', () => {
  test('Unit Tests for the ReadingList component', () => {

    const items = [
      { id: 1, title: 'Article 1', content: 'Content 1' },
      { id: 2, title: 'Article 2', content: 'Content 2' },
    ];

    // Render the ReadingList component
    const { container } = render(<ReadingList items={items} />);

    // Test if the rendered component matches the saved snapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
