const defaultValue = { userData: { user: {} } }

export default function usuario (store = defaultValue, action){
    switch (action.type){
        case 'SAVE_DATA':
            return {...store, userData: action.userData}
        default:
            return store
    }
}