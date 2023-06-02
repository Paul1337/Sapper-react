import { FieldState } from '../states/field.model';
import { EGameState } from '../states/gameState.model';

export interface IMainPartProps {
    gameState: EGameState;
    field: FieldState;
}
