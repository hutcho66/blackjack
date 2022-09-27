import Card from '../../src/cards/Card';
import { NumberCard } from '../../src/cards/NumberCard';

describe('NumberCard', () => {
  test('creates number card', () => {
    const two = new NumberCard(2, 'clubs');

    expect(two).toBeInstanceOf(NumberCard);
    expect(two).toBeInstanceOf(Card);
    expect(two.softValue()).toBe(2);
    expect(two.hardValue()).toBe(2);
  });
});