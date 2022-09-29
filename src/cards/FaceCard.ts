import Card, { Suit } from "./Card";

/**
 * Face card (Jack, Queen, King) with value of 10
 */
export class FaceCard extends Card {
  readonly hardValue: number = 10;
  readonly softValue: number = 10;
  
  constructor(rank: 'J'|'Q'|'K', suit: Suit) {
    super(rank, suit);
  }
}