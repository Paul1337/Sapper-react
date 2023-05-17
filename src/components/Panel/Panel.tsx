import React, { FunctionComponent } from 'react';
import styles from './Panel.module.css';
import { IPanelProps } from '../../types/props/panel.model';

const Panel: FunctionComponent<IPanelProps> = ({ score }) => {
    return (
        <div className={styles.panel}>
            <span className={styles.score}>
                <span>Счёт: </span>
                <span style={{ fontWeight: 700 }}>{score}</span>
            </span>
            <span className={styles.controls}>
                <button>Начать заново</button>
                <button>Таблица рекордов</button>
            </span>
        </div>
    );
};

export default Panel;
