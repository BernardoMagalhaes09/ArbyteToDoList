import React, { Component } from 'react'
import { TextInput, SafeAreaView, ScrollView, View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions/todos'
import { connect } from 'react-redux'
import styles from '../Styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'


class ToDoList extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        newToDoText: '',
        checked: false,
    }

    addNewToDo = () => {
        this.props.addToDo(this.state.newToDoText)
        this.setState({ newToDoText: '' })
    }

    getStateCheck = () => {
        this.props.changeStatusToDo(this.state.checked)
        this.setState({ checked: !checked })
    }

    render() {
        return (
            <View>
                <View>
                    {this.props.todos.map(todo => (
                        <View style={styles.containerTarefa}>
                            <View style={styles.checkContainer}>
                                <CheckBox checkedColor = 'green' checked={this.state.checked} onPress={() => { this.setState({ checked: !this.state.checked }) }} />
                            </View>
                            <View style={styles.textList}>
                                <Text key={todo.id}>{todo.text}</Text>
                            </View>
                            <View style={styles.iconEdit}>
                                <Icon name="edit" size={24} color="#964B00" onPress = {() => {}} />
                            </View>
                            <View style={styles.iconEdit}>
                                <Icon name="remove" size={24} color="#FF0000" onPress = {() => {}} />
                            </View>
                        </View>))}
                </View>
                <View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput style={styles.inputTarefa} placeholder='Escreva sua tarefa' onChangeText={newToDoText => this.setState({ newToDoText })} value={this.state.newToDoText} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.buttonAdd} onPress={this.addNewToDo} >
                            <Text style={styles.textLogin}>Adicionar Tarefa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}



const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList) 