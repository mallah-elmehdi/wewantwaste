import { createSlice } from '@reduxjs/toolkit';
import { getSkipsByLocation } from '../apis/skips';

const initialState = {
    skips: [],
};

const skipsSlice = createSlice({
    name: 'skips',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getSkipsByLocation.fulfilled, (state, { payload }) => {
            state.skips = payload;
        });
    },
});

export default skipsSlice.reducer;
