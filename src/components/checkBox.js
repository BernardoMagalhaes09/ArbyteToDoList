import React, { Component } from 'react'
import {
    View,
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import styles from '../Styles'

class CheckBoxReal extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            checked: this.props.todo.completed
        }
    }

    onCheckPress = () => {
        const status = !this.state.checked
        this.setState({ checked: status })
        this.props.editToDo({...this.props.todo, completed: status})
    }

    render() {
        return (
            <View style={styles.checkContainer}>
                <CheckBox checkedColor='green' checked={this.state.checked} onPress={this.onCheckPress}/>
            </View>
        )
    }
}

export default CheckBoxReal