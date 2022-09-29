import Card from '../cards/Card';
import AnteBet from '../bet/AnteBet';

export default class Hand implements Iterable<Card> {
  private cards: Card[];
  private ante: AnteBet | undefined;
  private hasAce = false;
  private softTotal = 0;
  private hardTotal = 0;

  constructor(...cards: Card[]) {
    this.cards = [];
    cards.forEach(card => this.add(card));
  }

  [Symbol.iterator](): Iterator<Card> {
    return this.cards[Symbol.iterator]();
  }

  add(card: Card) {
    this.cards.push(card);

    this.hardTotal += card.hardValue;
    if (!this.hasAce && card.hardValue !== card.softValue) {
      this.hasAce = true;
      this.softTotal += card.softValue;
    } else {
      this.softTotal += card.hardValue;
    }
  }

  setBet(bet: AnteBet) {
    this.ante = bet;
  }

  getBet() {
    return this.ante;
  }

  size() {
    return this.cards.length;
  }

  value() {
    if (this.softTotal <= 21) return this.softTotal;
    return this.hardTotal;
  }

  blackjack() {
    return this.value() === 21;
  }

  busted() {
    return this.value() > 21;
  }

  toString() {
    return `[${this.cards.map(card => card.toString()).join(', ')}], value: ${this.value()}`;
  }
}