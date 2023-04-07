import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { config } from './gameConfig'

export interface PointState {
    hasBomb: boolean
    isOpened: boolean
    flagType: number
    bombCnt: number
}

export interface Point {
    x: number
    y: number
}

export type FieldModel = Array<Array<PointState>>

export interface FieldState {
    field: FieldModel
}

export const initialState: FieldState = {
    field: [[]],
}

initField()

function initField() {
    const field: FieldModel = []
    const bombs: Array<Array<boolean>> = []

    for (let i = 0; i < 16; i++) {
        bombs.push([])
        for (let j = 0; j < 16; j++) {
            bombs[i][j] = false
        }
    }

    const variant = config.variants[config.currentVariant]
    let bombCnt = variant.bombCnt

    while (bombCnt > 0) {
        const ranX = Math.floor(Math.random() * variant.fieldSize[0])
        const ranY = Math.floor(Math.random() * variant.fieldSize[1])
        if (!bombs[ranX][ranY]) {
            bombCnt--
        }
        bombs[ranX][ranY] = true
    }

    for (let i = 0; i < 16; i++) {
        field.push([])
        for (let j = 0; j < 16; j++) {
            field[i][j] = {
                isOpened: true,
                flagType: 0,
                bombCnt: 4,
                hasBomb: bombs[i][j],
            }
        }
    }
    initialState.field = field
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
                        (state.field[point.x][point.y].flagType + 1) % config.flagTypes
                    break
            }
        },
    },
})

export default fieldSlice.reducer
