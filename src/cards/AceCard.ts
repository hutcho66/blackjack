import Card, { Suit } from "./Card";

export class AceCard extends Card {
  constructor(suit: Suit) {
    super('A', suit);
  }
  
  hardValue = () => 1;
  softValue = () => 11;
}