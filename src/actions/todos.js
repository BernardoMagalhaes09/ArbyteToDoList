export function addToDo(text) {
    return ({
        type: 'ADD_TODO',
        text: text  
    })
}

export function changeStatusToDo(id) {
    return ({
        type: 'CHANGE_STATUS_TODO',
        id: id  
    })
}

