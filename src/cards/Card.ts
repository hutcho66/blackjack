export type Suit = 'clubs' | 'spades' | 'hearts' | 'diamonds';
export type FaceRank = 'A' | 'J' | 'Q' | 'K';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

/**
 * Represents a card with a suit and rank
 */
export default abstract class Card {
  abstract readonly hardValue: number;
  abstract readonly softValue: number;
  constructor(protected rank: Rank | FaceRank, protected suit: Suit) {}

  toString = () => {
    const symbol = 
      this.suit == 'clubs' ? '♣'
      : this.suit == 'diamonds' ? '♦'
      : this.suit == 'hearts' ? '♦'
      : '♠';
    return `${this.rank}${symbol}`
  }
}