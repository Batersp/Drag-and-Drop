import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {mainReducer} from "../features/Main/mainReducer";

export const rootReducer = combineReducers({
    main: mainReducer

})
// непосредственно создаём store
//export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store

