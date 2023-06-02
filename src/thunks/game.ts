import { endGameAction, startNewGameAction, updateTimeAction } from '../reducers/game/gameReducer';
import { AppDispatch, RootState } from '../store';
import { EGameState } from '../types/states/gameState.model';
import { AppThunk } from '../types/thunks/thunks.model';

type IntervalIDType = number | null;
let gameInterval: IntervalIDType = null;

export const startNewGameThunk = (): AppThunk => {
    return (dispatch, getState) => {
        dispatch(startNewGameAction());

        if (gameInterval) clearInterval(gameInterval);
        gameInterval = setInterval(() => {
            const state = getState();
            if (state.gameState === EGameState.Playing) {
                dispatch(updateTimeAction());
            }
        }, 1000);
    };
};

// export const endGameThunk = (): AppThunk => {
//     return (dispatch, getState) => {
//         if (gameInterval) clearInterval(gameInterval);
//         dispatch(endGameAction());
//     };
// };
