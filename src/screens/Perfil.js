import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    SafeAreaView, 
    ScrollView
} from 'react-native'
import styles from '../Styles'
import { CheckBox } from 'react-native-elements'
import axios from 'axios'


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
                    <Text style={styles.textWelcome}>Bem vindo {this.state.name}</Text>
                </View>
                <View style={styles.checklist}>
                <SafeAreaView style={styles.containerScroll}>
                    <ScrollView style={styles.scrollView}>
                    <CheckBox
                            containerStyle = {styles.checkBoxStyle}
                            onIconPress ={() => this.setState({checked1: !this.state.checked1})}
                            title='Nome da tarefa'
                            checked={this.state.checked1}
                            checkedTitle = 'Tarefa Concluida!'
                            checkedColor = 'green'/>
                        </ScrollView>
                    </SafeAreaView>
                    <View style = {{flex: 1, marginBottom: 50, justifyContent:'flex-end'}}>
                    <TextInput placeholder='Escreva sua tarefa' style={styles.inputText} onChangeText={tarefa => this.setState({tarefa})} value={this.state.tarefa}/>
                   </View>
                </View>
            </View>
        )
    }
}

export default Perfil