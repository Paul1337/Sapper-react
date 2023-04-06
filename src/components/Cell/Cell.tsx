import React from 'react'
import styles from './Cell.module.css'

interface CellProps {
    isOpened: boolean
    flagType: number
    bombCnt: number
}

function Cell({ isOpened, flagType, bombCnt }: CellProps) {
    return (
        <div className={styles.cell}>
            {isOpened ? <div className={styles['bomb-cnt']}> {bombCnt} </div> : <div>c</div>}
        </div>
    )
}

export default Cell
