import React from 'react';
import Field from '../../components/Field/Field';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const GamePage = () => {
    const field = useSelector((state: RootState) => state.field);
    return (
        <div>
            <Field field={field}></Field>
        </div>
    );
};

export default GamePage;
