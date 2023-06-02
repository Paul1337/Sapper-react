import { FieldState } from './field.model';
import { IGameMode } from './gameConfig.model';

export enum EGameState {
    Playing,
    Menu,
    GameOver,
}

export interface IState {
    field: FieldState;
    currentGameMode: IGameMode;
    gameState: EGameState;
    bombsLeft: number;
    time: number;
}
