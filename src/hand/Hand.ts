import Card from '../cards/Card';

export default class Hand implements Iterable<Card> {
  private cards: Card[];

  constructor(...cards: Card[]) {
    this.cards = [];
    cards.forEach(card => this.add(card));
  }

  [Symbol.iterator](): Iterator<Card> {
    return this.cards[Symbol.iterator]();
  }

  add(card: Card) {
    this.cards.push(card);
  }

  size() {
    return this.cards.length;
  }

  value() {
    const softTotal = this.softTotal();
    if (softTotal <= 21) return softTotal;

    return this.hardTotal();
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

  private hardTotal() {
    return this.cards.reduce((total, card) => {
      return total + card.hardValue();
    }, 0);
  }

  private softTotal() {
    let aceInHand = false;
    return this.cards.reduce((total, card) => {
      if (card.hardValue() !== card.softValue() && !aceInHand) {
        // found an ace, add soft value to total
        aceInHand = true;
        return total + card.softValue();
      }
      return total + card.hardValue();
    }, 0);
  }
}