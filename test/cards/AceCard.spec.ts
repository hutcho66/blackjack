import { AceCard } from '../../src/cards/AceCard';
import Card from '../../src/cards/Card';

describe('AceCard', () => {
  test('creates ace', () => {
    const ace = new AceCard('clubs');

    expect(ace).toBeInstanceOf(AceCard);
    expect(ace).toBeInstanceOf(Card);
    expect(ace.softValue).toBe(11);
    expect(ace.hardValue).toBe(1);
  });
});