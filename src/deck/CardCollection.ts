import Card from "../cards/Card";

class CardIterator implements Iterator<Card> {
  private index: number;
  private done: boolean;
  private invalidated: boolean;

  constructor(private values: Card[]) {
    this.index = 0;
    this.done = false;
    this.invalidated = false;
  }

  next(): IteratorResult<Card> {
    if (this.done) {
      return {
        done: this.done,
        value: undefined,
      };
    }
    
    if (this.invalidated) {
      throw new Error('Cannot get card from invalidated deck iterator');
    }

    if (this.index === this.values.length) {
      this.done = true;
      return {
        done: this.done,
        value: undefined,
      };
    }

    const value = this.values[this.index];
    this.index++;
    return {
      done: false,
      value
    };
  }

  invalidate() {
    this.invalidated = true;
  }
}

export default abstract class CardCollection {
  protected cards: Card [];
  private iterators: CardIterator[];

  constructor() {
    this.cards = [];
    this.iterators = [];
  }

  [Symbol.iterator]() {
    return this.iterator();
  }

  protected cardsToIterate() {
    return this.cards;
  }

  iterator() {
    const iterator = new CardIterator(this.cardsToIterate());
    this.iterators.push(iterator);

    return iterator;
  }

  shuffle() {
    this.cards = this.cards
      .map(card => ({card, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({card}) => card);
    
    this.iterators.forEach(iterator => iterator.invalidate());
  }
}