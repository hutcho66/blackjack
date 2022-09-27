import Card, { Suit } from "./Card";

export class NumberCard extends Card {
  constructor(rank: 2|3|4|5|6|7|8|9|10, suit: Suit) {
    super(rank, suit);
  }
  
  hardValue = () => Number(this.rank);
  softValue = () => Number(this.rank);
}