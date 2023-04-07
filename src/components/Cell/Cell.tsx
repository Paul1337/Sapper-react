import React from 'react'
import { Point } from '../../store/fieldStore'
import styles from './Cell.module.css'

interface CellProps {
    isOpened: boolean
    flagType: number
    bombCnt: number
    position: Point
}

function Cell({ isOpened, flagType, bombCnt, position }: CellProps) {
    return (
        <div className={styles.cell} style={{ left: position.x + 'px', top: position.y + 'px' }}>
            <div className={styles['cell-data']}>
                {isOpened ? <div className={styles['bomb-cnt']}> {bombCnt} </div> : <div>c</div>}
            </div>
        </div>
    )
}

export default Cell
