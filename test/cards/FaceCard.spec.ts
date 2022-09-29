import { FaceCard } from './../../src/cards/FaceCard';
import Card from '../../src/cards/Card';

describe('FaceCard', () => {
  test('creates face card', () => {
    const king = new FaceCard('K', 'clubs');

    expect(king).toBeInstanceOf(FaceCard);
    expect(king).toBeInstanceOf(Card);
    expect(king.softValue).toBe(10);
    expect(king.hardValue).toBe(10);
  });
});