export const state = {
    turn : 1,
    board: Array.from({length: 17}, () => Array(17).fill(0)),
    player1_captures: 0,
    player2_captures: 0
};