import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './topics/10-redux-toolkit/counterSlice'




export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>