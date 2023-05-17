import { IGameConfig } from '../../../types/states/gameConfig.model';

const getFieldSize = (m: number, n: number) => ({ m, n });

export const config: IGameConfig = {
    gameModes: [
        {
            name: 'simple',
            fieldSize: getFieldSize(8, 8),
            time: 10 * 60,
            bombsCount: 10,
        },
        {
            name: 'medium',
            fieldSize: getFieldSize(16, 16),
            time: 40 * 60,
            bombsCount: 40,
        },
        {
            name: 'difficult',
            fieldSize: getFieldSize(32, 16),
            time: 100 * 60,
            bombsCount: 80,
        },
    ],
};
