import { FieldState, FlagType, IPoint, IPointState } from '../../../types/states/field.model';
import { IGameMode } from '../../../types/states/gameConfig.model';
import { getPointsAround, mix2dArray } from './utils';
import { IState } from '../../../types/states/gameState.model';

type BombsMap = Array<Array<boolean>>;

export class Field {
    public static generateBombMap(gameMode: IGameMode): BombsMap {
        const map = [];

        let bombsCount = gameMode.bombsCount;
        const { m, n } = gameMode.fieldSize;

        for (let i = 0; i < m; i++) {
            map.push(new Array(n));
            for (let j = 0; j < n; j++) bombsCount-- > 0 ? (map[i][j] = 1) : (map[i][j] = 0);
        }

        mix2dArray(map);
        return map;
    }

    private static getBombsAround(bombsMap: BombsMap, point: IPoint) {
        const bombIn = (p: IPoint) => (bombsMap?.[p.y]?.[p.x] ? Number(bombsMap[p.y][p.x]) : 0);
        const pointsToCheck = getPointsAround(point);
        return pointsToCheck.reduce((acc, cur) => acc + bombIn(cur), 0);
    }

    public static initField(gameMode: IGameMode): FieldState {
        const bombMap = Field.generateBombMap(gameMode);
        const field = [];

        const { m, n } = gameMode.fieldSize;

        for (let i = 0; i < m; i++) {
            field.push(new Array(n));
            for (let j = 0; j < n; j++) {
                field[i][j] = {
                    hasBomb: bombMap[i][j],
                    isOpened: false,
                    flagType: FlagType.Nothing,
                    bombsCount: Field.getBombsAround(bombMap, { x: j, y: i }),
                };
            }
        }

        return field;
    }

    public static openCell(point: IPoint, state: IState) {
        const fieldPointState = state.field[point.y][point.x];

        if (!fieldPointState.isOpened) {
            fieldPointState.isOpened = true;
            if (fieldPointState.hasBomb) {
                state.isPlaying = false;
            } else {
                if (fieldPointState.bombsCount === 0) {
                    getPointsAround(point)
                        .filter((point) => Boolean(state.field?.[point.y]?.[point.x]))
                        .forEach((point) => {
                            Field.openCell(point, state);
                        });
                }
            }
        }
    }
}
