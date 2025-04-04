import { createSlice } from '@reduxjs/toolkit';
import { getSkipsByLocation } from '../apis/skips';

const initialState = {
    skips: [],
    isLoading: false
};

const skipsSlice = createSlice({
    name: 'skips',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(getSkipsByLocation.pending, (state) => {
            state.isLoading = true;
        }).addCase(getSkipsByLocation.fulfilled, (state, { payload }) => {
            state.skips = payload;
            state.isLoading = false;
        }).addCase(getSkipsByLocation.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default skipsSlice.reducer;
