// redux common types
import {rootReducer, store} from "../app/store";


export type RootReducerType = typeof rootReducer
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch


export type ItemType = {
    name: string
    order: number
    id: number
}

export type BoardType = {
    id: number
    title: string
    item: Array<ItemType>
}

export type UserAndMentorsType = Array<{id: number, title: string, item: Array<ItemType>}>