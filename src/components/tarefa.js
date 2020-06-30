import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'
import CheckBoxReal from './checkBox'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../Styles'
import { TextInput } from 'react-native-gesture-handler'


class Tarefa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editable: false,
            value: this.props.todo.description
        }
    }

    onSavePress = () => {
        this.setState({editable: false})
        this.props.editToDo({...this.props.todo, description: this.state.value})
    }

    render() {
        return (
            <View style={styles.containerTarefa} key={this.props.todo.id}>
                <View style={styles.checkContainer}>
                    <CheckBoxReal editToDo={this.props.editToDo} todo={this.props.todo} />
                </View>
                <View style={styles.textList}>
                    <TextInput
                        editable={this.state.editable}
                        value={this.state.value}
                        onChangeText={(text) => this.setState({ value: text })}>
                    </TextInput>
                </View>
                {this.state.editable ?
                    <View style={styles.iconEdit}>
                        <Icon name="check" size={24} color="green" onPress={this.onSavePress} />
                    </View> :
                    <View style={styles.iconEdit}>
                        <Icon name="edit" size={24} color="#964B00" onPress={() => { this.setState({ editable: true }) }} />
                    </View>}
                <View style={styles.iconEdit}>
                    <Icon name="remove" size={24} color="#FF0000" onPress={() => { this.props.deleteToDo(this.props.todo.id) }} />
                </View>
            </View>
        )
    }
}

export default Tarefa