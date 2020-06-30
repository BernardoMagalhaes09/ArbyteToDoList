const initialState = {
    list: []
}

export default function todos (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, list: [...state.list, action.text]}
        case 'ADD_TO_LIST':
            const newStore = {...state, list: [...action.list]}
            return newStore
        default:
            return state;
    }
}