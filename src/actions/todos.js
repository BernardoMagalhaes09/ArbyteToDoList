export function addToDo(task) {
    return ({
        type: 'ADD_TODO',
        text: task  
    })
}

export function addToList(list) {
    return({
        type: 'ADD_TO_LIST',
        list: list
    })
}

