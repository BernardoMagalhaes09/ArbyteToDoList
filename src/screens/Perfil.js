import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import styles from '../Styles'
import axios from 'axios'
import ToDoList from '../components/ToDoList'
import Counter from '../components/counter'


class Perfil extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
    api = () => {
        axios.get('https://arbyte-todo-list-api.herokuapp.com')
        .then(res => {this.setState({name: res.data.fullName})})
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upImage}>
                    <Image style={styles.arbyte} source={{ uri: 'https://www.arbyte.com.br/img/logo-footer.png' }} />
                    <Text style={styles.textWelcome}>Bem vindo</Text>
                </View>
                <View style={styles.checklist}>
                    <ToDoList/>
                    <Counter/>
                </View>
            </View>
        )
    }
}

export default Perfil