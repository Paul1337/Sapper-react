import React, { FunctionComponent } from 'react';
import styles from './Field.module.css';
import Cell from '../Cell/Cell';
import { IFieldProps } from '../../types/props/field.model';

const getCellPoint = (i: number, j: number) => ({ x: j, y: i });

const Field: FunctionComponent<IFieldProps> = ({ field }) => {
    return (
        <div className={styles.field}>
            {field.map((row, i) =>
                row.map((el, j) => (
                    <Cell key={i * row.length + j} {...el} position={getCellPoint(i, j)} />
                ))
            )}
        </div>
    );
};

export default Field;
