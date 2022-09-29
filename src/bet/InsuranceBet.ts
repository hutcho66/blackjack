import Bet from './Bet';
export default class InsuranceBet extends Bet {
  constructor(amountBet: number) {
    super(amountBet, {name: 'insurance', odds: 2});
  }
}