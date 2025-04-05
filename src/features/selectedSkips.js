import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedSkips: [],
};

const selectedSkipsSlice = createSlice({
    name: 'selectedSkips',
    initialState,

    reducers: {
        selectSkip: (state, { payload }) => {
            state.selectedSkips = [payload]
        },
    },
});

export const { selectSkip } = selectedSkipsSlice.actions;

export default selectedSkipsSlice.reducer;
