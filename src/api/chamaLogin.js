import axios from 'axios'

function login(email){
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users/login',{
        email
    })
}

export default login