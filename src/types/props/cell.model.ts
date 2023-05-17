import { FlagType, IPoint, IPointState } from '../states/field.model';

export interface ICellProps extends IPointState {
    position: IPoint;
}

export interface ICellFlagProps {
    flagType: FlagType;
}
