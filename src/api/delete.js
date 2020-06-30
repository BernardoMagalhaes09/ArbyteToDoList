import axios from 'axios'

function deleteTask() {
    axios.delete(`https://arbyte-todo-list-api.herokuapp.com/task/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export default deleteTask