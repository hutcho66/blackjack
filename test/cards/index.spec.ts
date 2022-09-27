import { cardFactory } from '../../src/cards/index';
import { AceCard } from '../../src/cards/AceCard';
import { FaceCard } from '../../src/cards/FaceCard';
import { NumberCard } from '../../src/cards/NumberCard';

describe('cardFactory', () => {
  test('creates Ace', () => {
    const card = cardFactory(1, 'clubs');

    expect(card).toBeInstanceOf(AceCard);
  });

  test('creates Jack', () => {
    const card = cardFactory(11, 'clubs');

    expect(card).toBeInstanceOf(FaceCard);
  });

  test('creates Queen', () => {
    const card = cardFactory(12, 'clubs');

    expect(card).toBeInstanceOf(FaceCard);
  });

  test('creates King', () => {
    const card = cardFactory(13, 'clubs');

    expect(card).toBeInstanceOf(FaceCard);
  });

  test('creates number card', () => {
    const card = cardFactory(3, 'clubs');

    expect(card).toBeInstanceOf(NumberCard);
  });
});