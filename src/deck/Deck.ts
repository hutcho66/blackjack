import Card from '../cards/Card';
import { cardFactory } from '../cards/index';
import { Suit, Rank } from '../cards/Card';
import CardCollection from './CardCollection';

export default class Deck extends CardCollection {
  constructor() {
    super();

    const cards: Card[] = [];

    const suits: Suit[] = ['spades', 'clubs', 'diamonds', 'hearts'];
    const ranks: Rank[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    suits.forEach(suit => {
      ranks.forEach(rank => {
        cards.push(cardFactory(rank, suit));
      })
    });

    this.cards = cards;
  }
}