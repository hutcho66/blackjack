import Table from '../../src/table/Table';
import Player from '../../src/player/Player';
import Hand from '../../src/hand/Hand';
import { cardFactory } from '../../src/cards/index';
describe('Player', () => {
  const table = new Table;
  let player: Player;

  beforeEach(() => {
    player = new Player(table);
  });

  test('create new game and iterate hands', () => {
    player.newGame();

    const hands = [...player];
    expect(hands[0]).toBeInstanceOf(Hand);
    expect(hands).toHaveLength(1);
  });

  test('offer actions', () => {
    player.newGame();
    const initialHand = [...player][0];

    expect(player.offerInsuranceBet()).toBeFalsy();
    expect(player.offerDoubleDown(initialHand)).toBeFalsy();
    expect(player.offerSplit(initialHand)).toBeFalsy();
  });

  test('hit on hand with value 16 or below', () => {
    player.newGame();
    const initialHand = [...player][0];
    initialHand.add(cardFactory(10, 'clubs'));
    initialHand.add(cardFactory(6, 'clubs'));

    expect(player.offerHit(initialHand)).toBeTruthy();
  });

  test('dont hit on hand with value above 16', () => {
    player.newGame();
    const initialHand = [...player][0];
    initialHand.add(cardFactory(10, 'clubs'));
    initialHand.add(cardFactory(7, 'clubs'));

    expect(player.offerHit(initialHand)).toBeFalsy();
  });
});