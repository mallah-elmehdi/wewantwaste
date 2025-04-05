import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isGlobalLoading: false
}

export const globalLoaderSlice = createSlice({
    name: 'globalLoader',
    initialState,
    reducers: {
        loadingGlobalON: state => {
            state.isGlobalLoading = true
        },
        loadingGlobalOFF: state => {
            state.isGlobalLoading = false
        },
    }
})

export const { loadingGlobalON, loadingGlobalOFF } = globalLoaderSlice.actions
export default globalLoaderSlice.reducer