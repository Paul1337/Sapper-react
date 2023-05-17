import { FieldState } from './field.model';
import { IGameMode } from './gameConfig.model';

export interface IState {
    field: FieldState;
    currentGameMode: IGameMode;
    isPlaying: boolean;
}
