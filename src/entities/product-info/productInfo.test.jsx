import { roundToClosestNumber } from './index';
import { describe, it, expect } from 'vitest';

describe('roundToClosestNumber', () => {
  it('should round up', () => {
    const result = roundToClosestNumber(3.7)

    expect(result).toEqual(4);
  });

  it('should round down', () => {
    const result = roundToClosestNumber(5.1)

    expect(result).toEqual(5);
  });

  it('should not change', () => {
    const result = roundToClosestNumber(7)

    expect(result).toEqual(7);
  });

  it('should round up if fraction is 0.5', () => {
    const result = roundToClosestNumber(3.5)

    expect(result).toEqual(4);
  });
});
