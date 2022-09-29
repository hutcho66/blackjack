import Card, { Suit } from "./Card";

export class NumberCard extends Card {
  readonly hardValue: number;
  readonly softValue: number;
  
  constructor(rank: 2|3|4|5|6|7|8|9|10, suit: Suit) {
    super(rank, suit);
    this.hardValue = rank;
    this.softValue = rank;
  }
}