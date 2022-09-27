import Shoe from '../../src/deck/Shoe';
import {mockRandom} from 'jest-mock-random';


describe('Shoe', () => {
  test('create shoe by creating multiple decks', () => {
    const shoe = new Shoe(8);
    expect(shoe.getFullShoe()).toHaveLength(52 * 8);
  });

  test('iterator removes 1 card for single deck shoes', () => {
    const shoe = new Shoe(1);

    expect([...shoe]).toHaveLength(51);
  });

  test('iterator removes stopDeal decks plus random offset', () => {
    mockRandom(0.5);
    const expectedOffset = 52 + Math.floor(-6 + 0.5 * 13);

    const shoe = new Shoe(8, 1);

    expect([...shoe]).toHaveLength(52 * 8 - expectedOffset);
  });

  test('invalid number of decks or stopDeals', () => {
    expect(() => {new Shoe(-5)}).toThrowError('Shoes must contain between 1 and 8 decks.');
    expect(() => {new Shoe(0.55)}).toThrowError('Shoes must contain between 1 and 8 decks.');
    expect(() => {new Shoe(10)}).toThrowError('Shoes must contain between 1 and 8 decks.');

    expect(() => {new Shoe(2, -1)}).toThrowError('Shoes with multiple decks must drop between 1 and 3 decks from the deal.');
    expect(() => {new Shoe(2, 0.5)}).toThrowError('Shoes with multiple decks must drop between 1 and 3 decks from the deal.');
    expect(() => {new Shoe(2, 5)}).toThrowError('Shoes with multiple decks must drop between 1 and 3 decks from the deal.');
  });
});