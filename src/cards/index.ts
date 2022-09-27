import Card, { Rank, Suit } from "./Card";
import { AceCard } from './AceCard';
import { FaceCard } from './FaceCard';
import { NumberCard } from './NumberCard';

export const cardFactory = (rank: Rank, suit: Suit): Card => {
  switch (rank) {
    case 1:
      return new AceCard(suit);
    case 11:
      return new FaceCard('J', suit);
    case 12:
        return new FaceCard('Q', suit);
    case 13:
      return new FaceCard('K', suit);
    default:
      return new NumberCard(rank, suit);
  }
};