import React from 'react'
import { Field } from '../../store/field'
import styles from './Field.module.css'

interface FieldProps {
    field: Field
}

function Field({ field }: FieldProps) {
    return (
        <div className={styles.field}>
            {field.map((column, x) => {
                return column.map((el, y) => {
                    return <Cell></Cell>
                })
            })}
        </div>
    )
}

export default Field
