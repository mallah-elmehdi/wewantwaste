import { createSlice } from '@reduxjs/toolkit';
import { getSkipsByLocation } from '../apis/skips';

const initialState = {
    skips: [],
    selectedSkips: [],
    isLoading: false
};

const skipsSlice = createSlice({
    name: 'skips',
    initialState,

    reducers: {
        selectSkip: (state, { payload }) => {
            const { id } = payload
            state.selectedSkips = [id]
        },
    },

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

export const { selectSkip } = skipsSlice.actions;

export default skipsSlice.reducer;
