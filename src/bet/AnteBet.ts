import Bet from './Bet';

export default class AnteBet extends Bet {

  constructor(amountBet: number) {
    super(amountBet, {name: 'ante', odds: 1});
  }

  setPushOutcome() {
    this.changeOutcome({name: 'ante', odds: 0});
  }

  setBlackjackOutcome() {
    this.changeOutcome({name: 'ante', odds: 1.5});
  }

  doubleDown(extraBet: number) {
    if (extraBet > this.amountBet) {
      throw new Error('Double down can only be up to 100% of intial ante bet');
    }

    this.amountBet += extraBet;
  }
}