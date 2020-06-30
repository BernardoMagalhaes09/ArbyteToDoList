import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    AsyncStorage
} from 'react-native'
import styles from '../Styles'
import axios from 'axios'
import ToDoList from '../components/ToDoList'
import * as todoActions from '../actions/todos'
import { connect } from 'react-redux'


class TelaDeTarefas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: {user: {}}         }
    }

    editToDo = (todo) => axios.put(`https://arbyte-todo-list-api.herokuapp.com/tasks/${todo.id}`, todo,{
        headers: {
            Authorization: `Bearer ${this.state.userData.token}`
        }
    }).then(response => {
        const index = this.props.todos.list.findIndex(task => task.id === todo.id)
        this.props.todos.list.splice(index, 1, response.data)
        this.props.dispatch(todoActions.addToList(this.props.todos.list))
    })

    componentDidMount() {
        AsyncStorage.getItem('userData')
            .then((userData) => {
                if (userData != null) {
                    const parsed = JSON.parse(userData)
                    this.setState({ userData: parsed })
                    return parsed.token
                }
            }).catch(err => { navigation.navigate('Login') })
            .then((token) => {
                if (!token) return
                return axios.get('https://arbyte-todo-list-api.herokuapp.com/tasks', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            })
            .then((res) => {
                console.log('data', res.data)
                this.props.dispatch(todoActions.addToList(res.data))
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upImage}>
                    <Image style={styles.arbyte} source={{ uri: 'https://www.arbyte.com.br/img/logo-footer.png' }} />
                    <Text style={styles.textWelcome}>Bem vindo {this.state.userData.user.fullName}</Text>
                </View>
                <View style={styles.checklist}>
                    <ToDoList todos={this.props.todos.list}
                        editToDo = {this.editToDo}
                        deleteToDo={(id) => axios.delete(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`, {
                            headers: {
                                Authorization: `Bearer ${this.state.userData.token}`
                            }
                        }).then(() => {
                            const index = this.props.todos.list.findIndex(todo => todo.id === id)
                            this.props.todos.list.splice(index, 1)
                            this.props.dispatch(todoActions.addToList(this.props.todos.list))
                        })}
                        addToDo={(description) => axios.post('https://arbyte-todo-list-api.herokuapp.com/tasks', { description }, {
                            headers: {
                                Authorization: `Bearer ${this.state.userData.token}`
                            }
                        }).then(response => this.props.dispatch(todoActions.addToDo(response.data)))} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
})


export default connect(mapStateToProps)(TelaDeTarefas)