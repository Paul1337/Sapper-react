import { IPoint } from '../states/field.model';

export interface CellProps {
    isOpened: boolean;
    flagType: number;
    bombCnt: number;
    position: IPoint;
}
