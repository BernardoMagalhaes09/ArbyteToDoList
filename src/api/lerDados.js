import axios from 'axios'

function lerDados() {
    axios.get('https://arbyte-todo-list-api.herokuapp.com')
        .then (res => {console.log(res);})
        .catch(err => {console.log(err);})
}

export default lerDados