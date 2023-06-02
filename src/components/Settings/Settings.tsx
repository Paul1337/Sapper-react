import React from 'react';
import { config } from '../../reducers/game/config/config';
import styles from './Settings.module.css';
import { formatTime } from '../../utils/time';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { IGameMode } from '../../types/states/gameConfig.model';
import { updateGameModeAction } from '../../reducers/game/gameReducer';

const Settings = () => {
    const currentGameMode = useSelector((state: RootState) => state.currentGameMode);
    const dispatch = useDispatch();

    const handleGameModeClick = (mode: IGameMode) => {
        dispatch(updateGameModeAction(mode));
    };

    return (
        <div className={styles.gameListCont}>
            <ul className={styles.gameModesList}>
                {config.gameModes.map((mode) => (
                    <li
                        key={mode.name}
                        className={styles.gameModeItem}
                        data-selected={mode === currentGameMode}
                        onClick={(e) => handleGameModeClick(mode)}
                    >
                        <div className={styles.gameModeItemLeftpart}>
                            <div className={styles.gameModeItemName}>{mode.name}</div>
                            <div className={styles.gameModeItemFieldSize}>
                                {mode.fieldSize.m} &times; {mode.fieldSize.n}
                            </div>
                        </div>
                        <div className={styles.gameModeItemTime}>{formatTime(mode.time)} минут</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Settings;
