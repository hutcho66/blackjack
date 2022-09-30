import Table from '../table/Table';
import Hand from '../hand/Hand';
import AnteBet from '../bet/AnteBet';
export default class Player implements Iterable<Hand> {
  private hands: Hand[] = [];

  constructor(private table: Table, private stake: number = 1000) {}
  
  [Symbol.iterator](): Iterator<Hand> {
    return  this.hands[Symbol.iterator]();
  }

  /**
   * Informs the player that a new game is being started.
   * Player will create initial hand and make ante bet.
   */
  newGame() {
    // Simple player just bets table minimum
    const bet = new AnteBet(this.table.minimum);
    const hand = new Hand();

    hand.setBet(bet);
    this.table.placeBet(bet, hand);

    this.hands = [hand];
  }

  /**
   * Offer player the right to place an insurance bet,
   * Player responds by placing bet and returning true, or returning false
   */
  offerInsuranceBet() {
    // just respond false for simple player, override for more complex players
    return false;
  }

  /**
   * Offer player the right to double down on given hand.
   * Player responds by placing bet and returning true, or returning false
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  offerDoubleDown(hand: Hand) {
    // just respond false for simple player, override for more complex players
    return false;
  }

  /**
   * Offer player the right to split on given hand.
   * Player responds by splitting hand into two and returning true, or returning false
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  offerSplit(hand: Hand) {
    // just respond false for simple player, override for more complex players
    return false;
  }

  /**
   * Offer player the right to hit on given hand.
   * Player responds by returning true if they want to hit, or returning false
   */
   offerHit(hand: Hand) {
    // Simple class hits if total is 16 or less
    if (hand.value() <= 16) return true;
    return false;
  }
}