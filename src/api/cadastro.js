import axios from 'axios'
import 'react-native-gesture-handler'


function userRegister(name, email){
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users', {
        fullName: name,
        email: email
    })
    
}

export  default userRegister