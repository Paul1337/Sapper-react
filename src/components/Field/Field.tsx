import React from 'react'
import { FieldModel } from '../../store/fieldStore'
import styles from './Field.module.css'
import Cell from '../Cell/Cell'

interface FieldProps {
    field: FieldModel
}

function Field({ field }: FieldProps) {
    return (
        <div className={styles.field}>
            {field.map((column, x) => {
                return column.map((el, y) => {
                    const position = {
                        x: x * 30,
                        y: y * 30,
                    }
                    return (
                        <Cell
                            isOpened={el.isOpened}
                            flagType={el.flagType}
                            bombCnt={el.bombCnt}
                            position={position}
                            key={x * column.length + y}
                        ></Cell>
                    )
                })
            })}
        </div>
    )
}

export default Field
