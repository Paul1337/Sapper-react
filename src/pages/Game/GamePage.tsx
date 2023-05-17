import React from 'react';
import Field from '../../components/Field/Field';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Panel from '../../components/Panel/Panel';

const GamePage = () => {
    const field = useSelector((state: RootState) => state.field);
    const score = useSelector((state: RootState) => state.score);
    return (
        <>
            <Panel score={score} />
            <Field field={field}></Field>
        </>
    );
};

export default GamePage;
