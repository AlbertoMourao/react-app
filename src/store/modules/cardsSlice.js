import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'counter',
    initialState: {
        value: [],
    },
    reducers: {
        create: (state, { payload }) => {
            state.value.push(payload);
        },
    }
});

export const { create } = cardsSlice.actions;
