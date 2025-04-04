import { configureStore } from '@reduxjs/toolkit'
import GlobalLoaderReducer from './features/GlobalLoader'
import skipsReducer from './features/skips'

export default configureStore({
    reducer: {
        GlobalLoader: GlobalLoaderReducer,
        skips: skipsReducer
    }
})