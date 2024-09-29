import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import  { LinkComponent } from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Link Component', () => {
  it('should render <a> HTML-element', () => {
    render(
    <MemoryRouter>
      <LinkComponent text='Test link' url='/testUrl' />
    </MemoryRouter>
    );

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('should render <a> HTML-element with text inside', () => {
    render(
    <MemoryRouter>
      <LinkComponent text='Test text' url='/testUrl' />
    </MemoryRouter>
    );

    const link = screen.getByRole('link');

    expect(link).toHaveTextContent('Test text');
  });
});
