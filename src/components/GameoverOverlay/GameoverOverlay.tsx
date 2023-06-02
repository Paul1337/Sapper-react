import React from 'react';
import styles from './GameoverOverlay.module.css';

const GameoverOverlay = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.message}>Game over!</div>
        </div>
    );
};

export default GameoverOverlay;
