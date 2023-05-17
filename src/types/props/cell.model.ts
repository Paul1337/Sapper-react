import { FlagType, IPoint, IPointState } from '../states/field.model';

export interface ICellProps extends IPointState {
    position: IPoint;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface ICellFlagProps {
    flagType: FlagType;
}

export interface ICellDataProps {
    isOpened: boolean;
    bombsCount: number;
    hasBomb: boolean;
}
