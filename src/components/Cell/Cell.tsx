import React, { FunctionComponent, ReactElement } from 'react';
import styles from './Cell.module.css';
import { ICellDataProps, ICellFlagProps, ICellProps } from '../../types/props/cell.model';
import { FlagType } from '../../types/states/field.model';
import bombUrl from '../../assets/cell-mark/bomb.png';

const CellFlag: FunctionComponent<ICellFlagProps> = ({ flagType }) => {
    return (
        <div className={styles.cellFlag}>
            {(() => {
                if (flagType === FlagType.Flag) {
                    return 'Flag';
                } else if (flagType === FlagType.Question) {
                    return '?';
                }
            })()}
        </div>
    );
};

const CellData: FunctionComponent<ICellDataProps> = ({ isOpened, bombsCount, hasBomb }) => {
    let body: ReactElement = <></>;

    if (isOpened) {
        if (hasBomb) {
            const style = { backgroundImage: `url(${bombUrl})` };
            return <div style={style} className={styles.cellBomb}></div>;
        } else {
            return bombsCount > 0 ? <div className={styles.bombCnt}> {bombsCount} </div> : <></>;
        }
    } else {
        return <></>;
    }
};

const Cell: FunctionComponent<ICellProps> = (props) => {
    const style = {
        gridRowStart: props.position.y + 1,
        gridColumnStart: props.position.x + 1,
    };

    return (
        <div
            className={styles.cell.concat(' ', props.isOpened ? styles.cellOpened : '')}
            style={style}
            onClick={props.onClick}
        >
            <CellData isOpened={props.isOpened} bombsCount={props.bombsCount} hasBomb={props.hasBomb} />
            <CellFlag flagType={props.flagType} />
        </div>
    );
};

export default Cell;
