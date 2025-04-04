import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isGlobalLoading: false
}

export const GlobalLoaderSlice = createSlice({
    name: 'GlobalLoader',
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

export const { loadingGlobalON, loadingGlobalOFF } = GlobalLoaderSlice.actions
export default GlobalLoaderSlice.reducer