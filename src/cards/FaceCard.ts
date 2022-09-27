import Card, { Suit } from "./Card";

export class FaceCard extends Card {
  constructor(rank: 'J'|'Q'|'K', suit: Suit) {
    super(rank, suit);
  }
  
  hardValue = () => 10;
  softValue = () => 10;
}