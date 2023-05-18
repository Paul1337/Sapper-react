import { createAction, createReducer } from '@reduxjs/toolkit';
import { store } from '../../store';
import { IState } from '../../types/states/gameState.model';
import { Field } from './field/field';
import { IPoint } from '../../types/states/field.model';
import { config } from './config/config';

export const initFieldAction = createAction('game/init');
export const openCellAction = createAction<IPoint>('game/openCell');
export const startNewGameAction = createAction('game/startNew');
export const updateTimeAction = createAction('game/updateTime');

const initialState: IState = {
    field: [[]],
    currentGameMode: config.gameModes[0],
    isPlaying: false,
    bombsLeft: config.gameModes[0].bombsCount,
    time: 0,
};

const fieldReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(openCellAction, (state, action) => {
            const point = action.payload;
            Field.openCell(point, state);
        })
        .addCase(initFieldAction, (state, action) => {
            state.field = Field.initField(state.currentGameMode);
        })
        .addCase(startNewGameAction, (state, action) => {
            state.bombsLeft = state.currentGameMode.bombsCount;
            state.field = Field.initField(state.currentGameMode);
            state.isPlaying = true;
            state.time = state.currentGameMode.time;
        })
        .addCase(updateTimeAction, (state, action) => {
            state.time--;
        });
});

export default fieldReducer;
