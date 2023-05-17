export enum FlagType {
    Flag,
    Question,
    Nothing,
}

export interface IPoint {
    x: number;
    y: number;
}

export interface IPointState {
    hasBomb: boolean;
    isOpened: boolean;
    flagType: number;
    bombsCount: number;
}

export type FieldState = Array<Array<IPointState>>;
