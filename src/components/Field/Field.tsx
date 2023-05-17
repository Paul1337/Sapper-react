import React, { FunctionComponent } from 'react';
import styles from './Field.module.css';
import Cell from '../Cell/Cell';
import { IFieldProps } from '../../types/props/field.model';
import { useAppDispatch } from '../../store';
import { openCellAction } from '../../reducers/game/gameReducer';

const getCellPoint = (i: number, j: number) => ({ x: j, y: i });

const Field: FunctionComponent<IFieldProps> = ({ field }) => {
    const dispatch = useAppDispatch();

    const handleFieldClick = (i: number, j: number) => {
        dispatch(openCellAction(getCellPoint(i, j)));
    };

    return (
        <div className={styles.field}>
            {field.map((row, i) =>
                row.map((el, j) => (
                    <Cell
                        onClick={(e) => handleFieldClick(i, j)}
                        key={i * row.length + j}
                        {...el}
                        position={getCellPoint(i, j)}
                    />
                ))
            )}
        </div>
    );
};

export default Field;
