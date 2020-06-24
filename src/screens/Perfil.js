import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import styles from '../Styles'
import { CheckBox } from 'react-native-elements'


class Perfil extends Component {
    state = {
        checked1: 'false',
        checked2: 'false',
        checked3: 'false',
        checked4: 'false',
        checked5: 'false',
        checked6: 'false'
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upImage}>
                    <Image style={styles.arbyte} source={{ uri: 'https://www.arbyte.com.br/img/logo-footer.png' }} />
                    <Text style={styles.textWelcome}>Bem vindo Douglas!</Text>
                </View>
                <View style={styles.checklist}>
                    <CheckBox
                            onIconPress ={() => this.setState({checked1: !this.state.checked1})}
                            title='Nome da tarefa'
                            checked={this.state.checked1}
                            checkedTitle = 'Tarefa Concluida!'
                            checkedColor = 'green'/>
                    <CheckBox
                            onIconPress ={() => this.setState({checked2: !this.state.checked2})}
                            title='Nome da tarefa'
                            checked={this.state.checked2}
                            checkedTitle = 'Tarefa Concluida!'
                            checkedColor = 'green'/>
                    <CheckBox
                            onIconPress ={() => this.setState({checked3: !this.state.checked3})}
                            title='Nome da tarefa'
                            checked={this.state.checked3}
                            checkedTitle = 'Tarefa Concluida!'
                            checkedColor = 'green'/>
                    <CheckBox
                            onIconPress ={() => this.setState({checked4: !this.state.checked4})}
                            title='Nome da tarefa'
                            checked={this.state.checked4}
                            checkedTitle = 'Tarefa Concluida!'
                            checkedColor = 'green'/>
                    <CheckBox
                            onIconPress ={() => this.setState({checked5: !this.state.checked5})}
                            title='Nome da tarefa'
                            checked={this.state.checked5}
                            checkedTitle = 'Tarefa Concluida!'
                            checkedColor = 'green'/>
                </View>
            </View>
        )
    }
}

export default Perfil