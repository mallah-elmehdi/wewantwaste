import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        loadingON: state => {
            state.isLoading = true
        },
        loadingOFF: state => {
            state.isLoading = false
        },
    }
})

// Action creators are generated for each case reducer function
export const { loadingON, loadingOFF } = loaderSlice.actions

export default loaderSlice.reducer