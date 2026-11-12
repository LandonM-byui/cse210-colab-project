import {state} from './state.js'

function place(x, y){
    if (state.board[x][y] == 0) {
        switch (state.turn){
            case 1:
                state.board[x][y] = 1;
                state.turn = 2;
                break;
            case 2:
                state.board[x][y] = 2;
                state.turn = 1;
                break;
        }
    }
}