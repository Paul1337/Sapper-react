import React, { FunctionComponent } from 'react';
import styles from './Panel.module.css';
import { IPanelProps } from '../../types/props/panel.model';
import { useNavigate } from 'react-router-dom';

const Panel: FunctionComponent<IPanelProps> = ({ score }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.panel}>
            <span className={styles.score}>
                <span>Счёт: </span>
                <span style={{ fontWeight: 700 }}>{score}</span>
            </span>
            <span className={styles.controls}>
                <button>Начать заново</button>
                <button onClick={() => navigate('/leaders')}>Таблица рекордов</button>
            </span>
        </div>
    );
};

export default Panel;
