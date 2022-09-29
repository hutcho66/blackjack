import Table from '../../src/table/Table';
import Hand from '../../src/hand/Hand';
import AnteBet from '../../src/bet/AnteBet';
import InsuranceBet from '../../src/bet/InsuranceBet';
describe('Table', () => {
  let table: Table;
  beforeEach(() => {
    table = new Table();
  });

  test('creates table with default minimum bet', () => {
    expect(table.minimum).toBe(10);
  });

  test('creates table with different minimum bet', () => {
    table = new Table(20);
    expect(table.minimum).toBe(20);
  });

  test('add ante bet to hand', () => {
    const hand = new Hand();
    const bet = new AnteBet(10);

    table.placeBet(bet, hand);

    expect([...table]).toContain(bet);
    expect(hand.getBet()).toBe(bet);
  });

  test('add insurance bet to hand', () => {
    const bet = new InsuranceBet(5);

    table.placeBet(bet);

    expect([...table]).toContain(bet);
  });

  test('invalid if under minimum bet', () => {
    const hand = new Hand();
    const bet = new AnteBet(5);

    expect(() => {table.placeBet(bet, hand);}).toThrowError('Ante bet must meet minimum bet for table');
  });

  test('cant add ante without hand', () => {
    const bet = new AnteBet(10);
    expect(() => {table.placeBet(bet);}).toThrowError('Ante bets must be place on a hand');

  });

  test('cant add insurance on hand', () => {
    const bet = new InsuranceBet(5);
    const hand = new Hand();

    expect(() => {table.placeBet(bet, hand);}).toThrowError('Can only place ante bets on a hand');

  });
})