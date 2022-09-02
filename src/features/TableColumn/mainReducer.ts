import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BoardType, ItemType, UserAndMentorsType} from "../../utils/types";

const initState: UserAndMentorsType = [
    {
        id:500, title: 'mentors', item: [
            {name: 'Dima', order: 1, id: 100},
            {name: 'Vladimir', order: 2, id: 101},
            {name: 'Ivan', order: 3, id: 102},
            {name: 'Igor', order: 4, id: 103},
            {name: 'Elena', order: 5, id: 104}
        ]
    },
    {
        id: 501, title: 'users', item: [
            {name: 'Bobi', order: 1, id: 1},
            {name: 'Jack', order: 2, id: 2},
            {name: 'Tom', order: 3, id: 3},
            {name: 'Steve', order: 4, id: 4},
            {name: 'Hanna', order: 5, id: 5},
        ]
    }
]


export const slice = createSlice({
    name: 'main',
    initialState: initState,
    reducers: {
        removeItem(state, action: PayloadAction<{el: BoardType | null, item: ItemType | null}>) {
            // @ts-ignore
            const indexBoard = state.findIndex(el => el.id === action.payload.el.id)
            // @ts-ignore
            const indexEl = state[indexBoard].item.findIndex(el => el.id === action.payload.item.id)
            state[indexBoard].item.splice(indexEl, 1)
        },
        addItem(state, action: PayloadAction<{el: BoardType | null, thisBoardItemId: number,item: ItemType | null}>) {
            // @ts-ignore
            const indexBoard = state.findIndex(el => el.id === action.payload.el.id)
            const indexEl = state[indexBoard].item.findIndex(el => el.id === action.payload.thisBoardItemId)
            // @ts-ignore
            state[indexBoard].item.splice(indexEl + 1, 0, action.payload.item)
         /*   state[indexBoard].item.unshift(action.payload.item)*/
        },

    }
})

export const mainReducer = slice.reducer

export const {addItem, removeItem} = slice.actions
