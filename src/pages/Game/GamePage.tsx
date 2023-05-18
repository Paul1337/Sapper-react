import React from 'react';
import Field from '../../components/Field/Field';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Panel from '../../components/Panel/Panel';

const GamePage = () => {
    const field = useSelector((state: RootState) => state.field);
    const bombsLeft = useSelector((state: RootState) => state.bombsLeft);
    const time = useSelector((state: RootState) => state.time);

    return (
        <>
            <Panel bombsLeft={bombsLeft} time={time} />
            <Field field={field}></Field>
        </>
    );
};

export default GamePage;
