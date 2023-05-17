import { configureStore } from '@reduxjs/toolkit';
import gameReducer, { initFieldAction } from '../reducers/game/gameReducer';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: gameReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
