import Hand from '../../src/hand/Hand';
import { cardFactory } from '../../src/cards/index';
import AnteBet from '../../src/bet/AnteBet';

describe('Hand', () => {
  test('construct with cards', () => {
    const cards = [cardFactory(1, 'clubs'), cardFactory(2, 'clubs')];
    const hand = new Hand(...cards);

    expect(hand.size()).toBe(cards.length);
    expect([...hand]).toEqual(cards);
  });

  test('add card to hand', () => {
    const cards = [cardFactory(1, 'clubs'), cardFactory(2, 'clubs')];
    const hand = new Hand();
    hand.add(cards[0]);
    hand.add(cards[1]);

    expect([...hand]).toEqual(cards);
  });

  test('return value for hand with no aces', () => {
    const cards = [cardFactory(2, 'clubs'), cardFactory(3, 'clubs')];
    const hand = new Hand(...cards);

    expect(hand.value()).toBe(5);
  });

  test('return value for hand with single ace, soft total under 21', () => {
    // should use soft total for ace
    const cards = [cardFactory(1, 'clubs'), cardFactory(9, 'clubs')];
    const hand = new Hand(...cards);

    expect(hand.value()).toBe(20);
  });

  test('return value for hand with single ace, soft total over 21', () => {
    // should use hard total for ace
    const cards = [cardFactory(1, 'clubs'), cardFactory(9, 'clubs'), cardFactory(9, 'clubs')];
    const hand = new Hand(...cards);

    expect(hand.value()).toBe(19);
  });

  test('return value for hand with multiple aces, soft total under 21', () => {
    // should use soft total for first ace then hard total for others
    const cards = [cardFactory(1, 'clubs'), cardFactory(1, 'clubs')];
    const hand = new Hand(...cards);

    expect(hand.value()).toBe(12);
  });

  test('return value for hand with multiple aces, soft total over 21', () => {
    // should use hard total for all aces
    const cards = [cardFactory(1, 'clubs'), cardFactory(1, 'clubs'), cardFactory(10, 'clubs')];
    const hand = new Hand(...cards);

    expect(hand.value()).toBe(12);
  });

  test('blackjack', () => {
    const cards = [cardFactory(1, 'clubs'), cardFactory(10, 'clubs')];
    const hand = new Hand(...cards);

    expect(hand.blackjack()).toBeTruthy();
    expect(hand.busted()).toBeFalsy();
  });

  test('busted', () => {
    const cards = [cardFactory(10, 'clubs'), cardFactory(10, 'clubs'), cardFactory(3, 'clubs')];
    const hand = new Hand(...cards);

    expect(hand.blackjack()).toBeFalsy();
    expect(hand.busted()).toBeTruthy();
  });

  test('string representation', () => {
    const cards = [cardFactory(2, 'clubs'), cardFactory(3, 'clubs')];
    const hand = new Hand(...cards);

    expect(hand.toString()).toBe('[2♣, 3♣], value: 5');
  });

  test('set ante bet', () => {
    const hand = new Hand();
    const bet = new AnteBet(10);

    hand.setBet(new AnteBet(10));
    expect(hand.getBet()).toEqual(bet);
  });

  test('splittable if cards of same value', () => {
    const hand = new Hand();
    hand.add(cardFactory(11, 'clubs'));
    hand.add(cardFactory(13, 'diamonds'));

    expect(hand.splittable()).toBeTruthy();
  });

  test('not splittable if cards of different value', () => {
    const hand = new Hand();
    hand.add(cardFactory(7, 'clubs'));
    hand.add(cardFactory(13, 'diamonds'));

    expect(hand.splittable()).toBeFalsy();
  });

  test('not splittable if more than 2 cards', () => {
    const hand = new Hand();
    hand.add(cardFactory(11, 'clubs'));
    hand.add(cardFactory(11, 'clubs'));
    hand.add(cardFactory(11, 'clubs'));

    expect(hand.splittable()).toBeFalsy();
  });

  test('get up card', () => {
    const cards = [cardFactory(11, 'clubs'), cardFactory(11, 'clubs')];
    const hand = new Hand(...cards);

    expect(hand.getUpCard()).toBe(cards[0]);
  });

  test('get up card fails if hand is empty', () => {
    const hand = new Hand();

    expect(() => {hand.getUpCard()}).toThrowError('Hand is empty, no up card')
  })
});