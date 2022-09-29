import InsuranceBet from '../../src/bet/InsuranceBet';

describe('InsuranceBet', () => {
  test('create bet', () => {
    const bet = new InsuranceBet(10);

    expect(bet.loseAmount()).toBe(10);
    expect(bet.winAmount()).toBe(30);
  });
});