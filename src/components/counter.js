import React from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'

const Counter = (props) => (
    <View style = {{justifyContent: 'flex-end'}}>
    <Text> Você tem {props.todos.length} tarefas!</Text>
    </View>
)

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(Counter)