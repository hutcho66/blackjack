import Card from '../../src/cards/Card';
import CardCollection from '../../src/deck/CardCollection';
import { cardFactory } from '../../src/cards/index';

const mockCards = [
  cardFactory(1, 'clubs'), 
  cardFactory(2, 'clubs'), 
  cardFactory(3, 'clubs'),
  cardFactory(4, 'clubs'),
  cardFactory(5, 'clubs'),
  cardFactory(6, 'clubs'),
  cardFactory(7, 'clubs'),
  cardFactory(8, 'clubs'),
  cardFactory(9, 'clubs'),
  cardFactory(10, 'clubs'),
  cardFactory(11, 'clubs'),
  cardFactory(12, 'clubs'),
  cardFactory(13, 'clubs'),
];

class TestCardCollection extends CardCollection {
  constructor() {
    super();
    this.cards = mockCards;
  }
}

describe('CardCollection', () => {
  test('create collection of cards', () => {
    const cards = new TestCardCollection();
    expect([...cards]).toHaveLength(mockCards.length);
  });

  test('shuffle deck', () => {
    const cards = new TestCardCollection();
    const beforeShuffle = [...cards];

    cards.shuffle();
    const afterShuffle = [...cards];

    // can't really test shuffle quality, just test that the ordering
    // is different but the values are equivalent
    expect(afterShuffle).toHaveLength(beforeShuffle.length);
    expect(afterShuffle).not.toEqual(beforeShuffle);
    expect(afterShuffle).toEqual(expect.arrayContaining(beforeShuffle));
  });

  test('iterate until complete', () => {
    const cards = new TestCardCollection();
    const iterator = cards.iterator();

    let card = iterator.next();
    // until done, next should return a card
    while (!card.done) {
      expect(card.value).toBeInstanceOf(Card);

      card = iterator.next();
    }

    // once done, next should return done: true for any subsequent calls to the iterator
    expect(iterator.next().done).toBeTruthy();
  })

  test('shuffling invalidates iterators', () => {
    const cards = new TestCardCollection();
    const iterator = cards.iterator();

    // test iterator works initially
    expect(iterator.next().value).toBeInstanceOf(Card);

    // shuffle deck and test iterator throws error
    cards.shuffle();
    expect(() => {
      iterator.next()
    }).toThrowError('Cannot get card from invalidated deck iterator');  
  })
})