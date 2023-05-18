import React, { FunctionComponent } from 'react';
import styles from './Panel.module.css';
import { IPanelProps } from '../../types/props/panel.model';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { startNewGame } from '../../reducers/game/gameReducer';

const formatTimeItem = (value: number) => value.toString().padStart(2, '0');
const formatTime = (value: number) =>
    `${formatTimeItem(Math.floor(value / 60))}:${formatTimeItem(value % 60)}`;

const Panel: FunctionComponent<IPanelProps> = ({ bombsLeft, time }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleRestartClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(startNewGame());
    };

    return (
        <div className={styles.panel}>
            <span className={styles.bombsLeft}>
                <span>Счётчик мин: </span>
                <span style={{ fontWeight: 700 }}>{bombsLeft}</span>
                <span style={{ marginLeft: '16px' }}>Время: </span>
                <span style={{ fontWeight: 700 }}>{formatTime(time)}</span>
            </span>
            <span className={styles.controls}>
                <button onClick={handleRestartClick}>Начать заново</button>
                <button onClick={() => navigate('/leaders')}>Таблица рекордов</button>
            </span>
        </div>
    );
};

export default Panel;
