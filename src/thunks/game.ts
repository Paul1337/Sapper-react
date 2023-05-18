import { startNewGameAction, updateTimeAction } from '../reducers/game/gameReducer';
import { AppDispatch, RootState } from '../store';
import { AppThunk } from '../types/thunks/thunks.model';

export const startNewGameThunk = (): AppThunk => {
    return (dispatch, getState) => {
        dispatch(startNewGameAction());

        setInterval(() => {
            dispatch(updateTimeAction());
        }, 1000);
    };
};
