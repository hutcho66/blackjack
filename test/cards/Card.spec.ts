import Card from "../../src/cards/Card";

class TestCard extends Card {
  readonly hardValue: number = 2;
  readonly softValue: number = 2;
}

describe('Card', () => {
  test('changes suits to symbols', () => {
    const spade = new TestCard(2, 'spades');
    const heart = new TestCard(2, 'hearts');
    const diamond = new TestCard(2, 'diamonds');
    const club = new TestCard(2, 'clubs');

    expect(spade.toString()).toBe('2♠')
    expect(heart.toString()).toBe('2♦')
    expect(diamond.toString()).toBe('2♦')
    expect(club.toString()).toBe('2♣')
  })
})