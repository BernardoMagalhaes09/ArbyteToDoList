import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import styles from '../Styles'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import Tarefa from './tarefa'
import { SafeAreaView } from 'react-native-safe-area-context'


class ToDoList extends Component {
    state = {
        newToDoText: '',
        checked: false,
    }

    addNewToDo = () => {
        this.props.addToDo(this.state.newToDoText)
        this.setState({ newToDoText: '' })
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {this.props.todos.sort((a,b) => a.completed-b.completed).map(todo => (
                        <Tarefa key = {todo.id} editToDo = {this.props.editToDo} deleteToDo = {this.props.deleteToDo} todo = {todo}/>
                    ))}
                </ScrollView>
                <View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput style={styles.inputTarefa} placeholder='Escreva sua tarefa' onChangeText={newToDoText => this.setState({ newToDoText })} value={this.state.newToDoText} />
                    </View>
                    <View style={{ paddingBottom: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.buttonAdd} onPress={this.addNewToDo} >
                            <Text style={styles.textLogin}>Adicionar Tarefa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}



export default ToDoList;