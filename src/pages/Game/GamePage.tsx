import React, { FunctionComponent } from 'react';
import Field from '../../components/Field/Field';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Panel from '../../components/Panel/Panel';
import { EGameState } from '../../types/states/gameState.model';
import Settings from '../../components/Settings/Settings';
import styles from './GamePage.module.css';
import { IMainPartProps } from '../../types/props/gamePage';
import GameoverOverlay from '../../components/GameoverOverlay/GameoverOverlay';

const MainPart: FunctionComponent<IMainPartProps> = ({ gameState, field }) => {
    switch (gameState) {
        case EGameState.Menu:
            return <Settings />;
        case EGameState.Playing:
            return <Field field={field}></Field>;
        case EGameState.GameOver:
            return (
                <div>
                    <GameoverOverlay />
                    <Field field={field}></Field>
                </div>
            );
    }
    return <></>;
};

const GamePage = () => {
    const field = useSelector((state: RootState) => state.field);
    const bombsLeft = useSelector((state: RootState) => state.bombsLeft);
    const time = useSelector((state: RootState) => state.time);
    const gameState = useSelector((state: RootState) => state.gameState);

    return (
        <>
            <Panel bombsLeft={bombsLeft} time={time} />
            <div className={styles.mainPart}>
                <MainPart gameState={gameState} field={field} />
            </div>
        </>
    );
};

export default GamePage;
