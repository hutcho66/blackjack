import AnteBet from '../../src/bet/AnteBet';

describe('AnteBet', () => {
  test('create bet', () => {
    const bet = new AnteBet(10);

    expect(bet.loseAmount()).toBe(10);
    expect(bet.winAmount()).toBe(20);
  });

  test('push outcome', () => {
    const bet = new AnteBet(10);
    bet.setPushOutcome();

    expect(bet.loseAmount()).toBe(10);
    expect(bet.winAmount()).toBe(10);
  });

  test('blackjack outcome', () => {
    const bet = new AnteBet(10);
    bet.setBlackjackOutcome();

    expect(bet.loseAmount()).toBe(10);
    expect(bet.winAmount()).toBe(25);
  });

  test('double down', () => {
    const bet = new AnteBet(10);
    bet.doubleDown(10);

    expect(bet.loseAmount()).toBe(20);
    expect(bet.winAmount()).toBe(40);
  });

  test('cant double down over 100%', () => {
    const bet = new AnteBet(10);
    
    expect(() => {bet.doubleDown(11)}).toThrowError('Double down can only be up to 100% of intial ante bet');
  });
});