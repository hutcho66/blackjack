import Deck from '../../src/deck/Deck';

describe('Deck', () => {
  test('create deck of 52 cards', () => {
    const deck = new Deck();
    expect([...deck]).toHaveLength(52);
  });
})