import Bet from '../../src/bet/Bet';

class TestBet extends Bet {}

describe('Bet', () => {
  test('create bet', () => {
    const bet = new TestBet(10, {name: 'ante', odds: 1.5});

    expect(bet.loseAmount()).toBe(10);
    expect(bet.winAmount()).toBe(25);
  });

  test('change outcome', () => {
    const bet = new TestBet(10, {name: 'ante', odds: 1.5});

    bet.changeOutcome({name: 'ante', odds: 1})

    expect(bet.loseAmount()).toBe(10);
    expect(bet.winAmount()).toBe(20);
  })
});