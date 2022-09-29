interface Outcome {
  readonly name: string;
  readonly odds: number;
}

export default abstract class Bet {
  constructor(protected amountBet: number, protected outcome: Outcome) {}

  winAmount() {
    return this.amountBet + this.amountBet * this.outcome.odds;
  }

  loseAmount() {
    return this.amountBet;
  }

  changeOutcome(outcome: Outcome) {
    this.outcome = outcome;
  }
}