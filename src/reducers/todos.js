export default function todos (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: Math.random(), 
                text: action.text,
                complete: false
            }]
        case 'REMOVE_TODO':
            //remover tarefa
        case 'EDIT_TODO':
            //editar tarefa
        case 'CHANGE_STATUS_TODO':
            return state.map((obj, todo) => {
                if(obj.id == action.id){
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    }) 
                }
            })
        default:
            return state;
    }
}