import React, { FunctionComponent } from 'react';
import styles from './Panel.module.css';
import { IPanelProps } from '../../types/props/panel.model';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { startNewGameAction, updateGameStateAction } from '../../reducers/game/gameReducer';
import { formatTime } from '../../utils/time';
import { useSelector } from 'react-redux';
import { EGameState } from '../../types/states/gameState.model';
import { startNewGameThunk } from '../../thunks/game';

const Panel: FunctionComponent<IPanelProps> = ({ bombsLeft, time }) => {
    const gameState = useSelector((state: RootState) => state.gameState);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleRestartClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(startNewGameThunk());
    };

    const handleSettingsClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(updateGameStateAction(EGameState.Menu));
    };

    return (
        <div className={styles.panel}>
            {gameState === EGameState.Playing && (
                <span className={styles.panelLeft}>
                    <span>Счётчик мин: </span>
                    <span style={{ fontWeight: 700 }}>{bombsLeft}</span>
                    <span style={{ marginLeft: '16px' }}>Время: </span>
                    <span style={{ fontWeight: 700 }}>{formatTime(time)}</span>
                </span>
            )}
            <span className={styles.controls}>
                <button onClick={handleRestartClick}>Начать заново</button>
                {gameState !== EGameState.Menu && (
                    <button onClick={handleSettingsClick}>Настройки</button>
                )}
            </span>
        </div>
    );
};

export default Panel;
