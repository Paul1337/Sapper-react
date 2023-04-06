import React from 'react'
import { Field } from '../../store/field'
import styles from './Field.module.css'
import Cell from '../Cell/Cell'

interface FieldProps {
    field: Field
}

function Field({ field }: FieldProps) {
    return (
        <div className={styles.field}>
            {field.map((column, x) => {
                return column.map((el, y) => {
                    return <Cell isOpened={false} flagType={0} bombCnt={4}></Cell>
                })
            })}
        </div>
    )
}

export default Field
