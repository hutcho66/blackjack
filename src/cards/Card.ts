export type Suit = 'clubs' | 'spades' | 'hearts' | 'diamonds';
export type FaceRank = 'A' | 'J' | 'Q' | 'K';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export default abstract class Card {
  constructor(protected rank: Rank | FaceRank, protected suit: Suit) {}

  abstract hardValue: () => number;
  abstract softValue: () => number;

  toString = () => {
    const symbol = 
      this.suit == 'clubs' ? '♣'
      : this.suit == 'diamonds' ? '♦'
      : this.suit == 'hearts' ? '♦'
      : '♠';
    return `${this.rank}${symbol}`
  }
}