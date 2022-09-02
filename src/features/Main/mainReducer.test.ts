import {UserAndMentorsType} from "../../utils/types";
import {addItem, mainReducer, removeItem} from "./mainReducer";

let startState: UserAndMentorsType = []

beforeEach(() => {
    startState = [
        {
            id: 500, title: 'mentors', item: [
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
})

test('item should be added to state', () => {
    const board = {
        id: 500, title: 'mentors', item: [
            {name: 'Dima', order: 1, id: 100},
            {name: 'Vladimir', order: 2, id: 101},
            {name: 'Ivan', order: 3, id: 102},
            {name: 'Igor', order: 4, id: 103},
            {name: 'Elena', order: 5, id: 104}
        ]
    }
    const item = {name: 'Jack', order: 2, id: 2}

    const thisBoardItemId = 101

    const action = addItem({el: board, thisBoardItemId, item})


    const endState = mainReducer(startState, action)

    expect(endState[0].item.length).toBe(6)
    expect(endState[0].item[2].id).toBe(2)
    expect(endState[0].item[1].id).toBe(101)
    expect(endState[0].item[3].id).toBe(102)


})

test('element must be removed from the array', () => {
    const board =  {
        id: 501, title: 'users', item: [
            {name: 'Bobi', order: 1, id: 1},
            {name: 'Jack', order: 2, id: 2},
            {name: 'Tom', order: 3, id: 3},
            {name: 'Steve', order: 4, id: 4},
            {name: 'Hanna', order: 5, id: 5},
        ]
    }
    const item =  {name: 'Steve', order: 4, id: 4}

    const action = removeItem({el: board, item})

    const endState = mainReducer(startState, action)

   expect(endState[1].item.length).toBe(4)
   expect(endState[1].item[3].name).toBe('Hanna')


})