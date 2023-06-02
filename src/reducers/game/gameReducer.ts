import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit';
import { store } from '../../store';
import { EGameState, IState } from '../../types/states/gameState.model';
import { Field } from './field/field';
import { IPoint } from '../../types/states/field.model';
import { config } from './config/config';
import { IGameMode } from '../../types/states/gameConfig.model';

export const initFieldAction = createAction('game/init');
export const openCellAction = createAction<IPoint>('game/openCell');
export const startNewGameAction = createAction('game/startNew');
export const updateTimeAction = createAction('game/updateTime');
export const updateGameStateAction = createAction<EGameState>('game/updateGameState');
export const updateGameModeAction = createAction<IGameMode>('game/updateMode');
export const endGameAction = createAction('game/endGame');

const initialState: IState = {
    field: [[]],
    currentGameMode: config.gameModes[0],
    gameState: EGameState.Menu,
    bombsLeft: config.gameModes[0].bombsCount,
    time: 0,
};

const fieldReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(openCellAction, (state, action) => {
            if (state.gameState !== EGameState.Playing) return;
            const point = action.payload;
            Field.openCell(point, state);
        })
        .addCase(initFieldAction, (state, action) => {
            state.field = Field.initField(state.currentGameMode);
        })
        .addCase(startNewGameAction, (state, action) => {
            state.bombsLeft = state.currentGameMode.bombsCount;
            state.field = Field.initField(state.currentGameMode);
            state.gameState = EGameState.Playing;
            state.time = state.currentGameMode.time;
        })
        .addCase(updateTimeAction, (state, action) => {
            state.time--;
            if (state.time <= 0) {
                state.gameState = EGameState.GameOver;
            }
        })
        .addCase(updateGameStateAction, (state, action: PayloadAction<EGameState>) => {
            state.gameState = action.payload;
        })
        .addCase(updateGameModeAction, (state, action: PayloadAction<IGameMode>) => {
            state.currentGameMode = action.payload;
        })
        .addCase(endGameAction, (state, action) => {
            state.gameState = EGameState.GameOver;
        });
});

export default fieldReducer;
