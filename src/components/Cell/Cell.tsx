import React, { FunctionComponent } from 'react';
import styles from './Cell.module.css';
import { ICellFlagProps, ICellProps } from '../../types/props/cell.model';
import { FlagType } from '../../types/states/field.model';

const CellFlag: FunctionComponent<ICellFlagProps> = ({ flagType }) => {
    if (flagType === FlagType.Flag) {
        return <>Flag</>;
    } else if (flagType === FlagType.Question) {
        return <>?</>;
    }

    return <></>;
};

const Cell: FunctionComponent<ICellProps> = ({ isOpened, flagType, bombsCount, position }) => {
    const style = {
        gridRowStart: position.y + 1,
        gridColumnStart: position.x + 1,
    };

    return (
        <div className={styles.cell} style={style}>
            <div className={styles.cellData}>
                {isOpened ? <div className={styles.bombCnt}> {bombsCount} </div> : <div>closed</div>}
            </div>
            <CellFlag flagType={flagType} />
        </div>
    );
};

export default Cell;
