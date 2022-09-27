import Card from "../cards/Card";
import Deck from './Deck';
import CardCollection from './CardCollection';

export default class Shoe extends CardCollection {
  private decks: number;
  private stopDeal: number;

  constructor(decks: number, stopDeal = 1) {
    super();

    if (!Number.isInteger(decks) || decks < 1 || decks > 8) {
      throw new Error('Shoes must contain between 1 and 8 decks.');
    }
    if (!Number.isInteger(stopDeal) || stopDeal < 1 || stopDeal > 3) {
      throw new Error('Shoes with multiple decks must drop between 1 and 3 decks from the deal.');
    }

    this.decks = decks;
    this.stopDeal = stopDeal;

    this.cards = Array.from({length: this.decks}, () => [...new Deck()])
                      .flat();
  }

  getFullShoe(): Card[] {
    return this.cards;
  }

  protected cardsToIterate(): Card[] {
    if (this.decks === 1) {
      // only drop 1 card
      return this.cards.slice(1);
    }

    // else drop stopDeal decks plus or minus up to 6 cards
    const cardOffset = Math.floor(-6 + Math.random() * 13);
    const deckOffset = this.stopDeal * 52 + cardOffset;

    return this.cards.slice(deckOffset);
  }
}