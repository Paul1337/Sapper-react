import { configureStore } from '@reduxjs/toolkit'

import fieldReducer from './field'

export const store = configureStore({
    reducer: {
        fieldReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
