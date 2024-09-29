import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StarRating } from './index';

describe('Rating', () => {
  it('should have 3 red stars rendered if prop rating equal 3', () => {
    render(<StarRating rating={3} />);

    const elements = screen.getAllByTestId('red-star');

    expect(elements).toHaveLength(3);
  });

  it('should have 5 stars rendered if prop maxStars is not determined', () => {
    render(<StarRating rating={5} />);

    const elements = screen.getAllByTestId('red-star');
    

    expect(elements).toHaveLength(5);
  });
});
