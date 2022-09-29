import Card, { Suit } from "./Card";

/**
 * Ace card with hard value of 1 and soft value of 11
 */
export class AceCard extends Card {
  readonly hardValue: number = 1;
  readonly softValue: number = 11;

  constructor(suit: Suit) {
    super('A', suit);
  }
}