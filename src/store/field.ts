import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Field = Array<Array<PointState>>

export interface Point {
    x: number
    y: number
}

const FlagTypes = 3

export interface PointState {
    isOpened: boolean
    flagType: number
    bombCnt: number
}

export interface FieldState {
    field: Field
}

export const initialState: FieldState = {
    field: [[]],
}

export const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        updateCell: (state: FieldState, action: PayloadAction<Point>) => {
            const point = action.payload

            switch (action.type) {
                case 'open':
                    state.field[point.x][point.y].isOpened = true
                    break

                case 'mark':
                    state.field[point.x][point.y].flagType =
                        (state.field[point.x][point.y].flagType + 1) % FlagTypes
                    break
            }
        },
    },
})

export default fieldSlice.reducer
