import Bet from '../bet/Bet';
import Hand from '../hand/Hand';
import AnteBet from '../bet/AnteBet';

export default class Table implements Iterable<Bet> {
  private bets: Bet[] = [];

  constructor(readonly minimum = 10) {}

  [Symbol.iterator](): Iterator<Bet> {
    return this.bets[Symbol.iterator]();
  }

  placeBet(bet: Bet, hand?: Hand) {
    if (bet instanceof AnteBet) {
      if (!hand) throw new Error('Ante bets must be place on a hand');
      if (bet.loseAmount() < this.minimum) throw new Error('Ante bet must meet minimum bet for table')
      
      this.bets.push(bet);
      hand.setBet(bet);
    } else {
      if (hand) throw new Error('Can only place ante bets on a hand')

      this.bets.push(bet);
    }
  }
}