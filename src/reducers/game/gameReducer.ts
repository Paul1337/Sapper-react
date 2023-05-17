import { createAction, createReducer } from '@reduxjs/toolkit';
import { store } from '../../store';
import { IState } from '../../types/states/gameState.model';
import { Field } from './field/field';
import { IPoint } from '../../types/states/field.model';
import { config } from './config/config';

export const initFieldAction = createAction('game/init');
export const openCellAction = createAction<IPoint>('game/openCell');

const initialState: IState = {
    field: [[]],
    currentGameMode: config.gameModes[0],
};

const fieldReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(openCellAction, (state, action) => {
            const point = action.payload;
            const fieldPointState = state.field[point.y][point.x];
            if (!fieldPointState.isOpened) {
                fieldPointState.isOpened = true;
                if (fieldPointState.hasBomb) {
                    // game over
                }
            }
        })
        .addCase(initFieldAction, (state, action) => {
            state.field = Field.initField(state.currentGameMode);
        });
});

export default fieldReducer;
