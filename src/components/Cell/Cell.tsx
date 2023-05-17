import React, { FunctionComponent, ReactElement } from 'react';
import styles from './Cell.module.css';
import { ICellDataProps, ICellFlagProps, ICellProps } from '../../types/props/cell.model';
import { FlagType } from '../../types/states/field.model';

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

    if (hasBomb) {
        const style = {
            background: `url('./bomb.png')`,
        };
        body = <span style={style} className={styles.cellBody}></span>;
    } else {
        if (isOpened) {
            body = <div className={styles.bombCnt}> {bombsCount} </div>;
        } else {
            body = <></>;
        }
    }

    return <div className={styles.cellData}>{body}</div>;
};

const Cell: FunctionComponent<ICellProps> = ({
    isOpened,
    flagType,
    bombsCount,
    hasBomb,
    position,
    onClick,
}) => {
    const style = {
        gridRowStart: position.y + 1,
        gridColumnStart: position.x + 1,
    };

    return (
        <div className={styles.cell} style={style} onClick={onClick}>
            <CellData isOpened={isOpened} bombsCount={bombsCount} hasBomb={hasBomb} />
            <CellFlag flagType={flagType} />
        </div>
    );
};

export default Cell;
