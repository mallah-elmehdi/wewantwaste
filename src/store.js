import { configureStore } from '@reduxjs/toolkit'
import globalLoaderReducer from './features/globalLoader'
import skipsReducer from './features/skips'
import selectedSkipsReducer from './features/selectedSkips'
import drawerReducer from './features/drawer'

export default configureStore({
    reducer: {
        globalLoader: globalLoaderReducer,
        skips: skipsReducer,
        selectedSkips: selectedSkipsReducer,
        drawer: drawerReducer
    }
})