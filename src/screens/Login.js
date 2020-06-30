import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    AsyncStorage
} from 'react-native'
import styles from '../Styles'
import validaLogin from '../api/validaLogin'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: ''
        }
    }



    cadastro = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={{ uri: 'https://cdn.awsli.com.br/600x450/321/321815/produto/33953213/d2911b5eea.jpg' }} />
                <TextInput placeholder='Email' style={styles.input}
                    value={this.state.email} onChangeText={email => this.setState({ email })}
                    keybordtype='email-adress' />
                <TouchableOpacity style={styles.buttomLogin} onPress={() => validaLogin(this.state.email)
                    .then(res => {
                        return AsyncStorage.setItem('userData', JSON.stringify(res.data))
                    })
                    .then(() => {
                        this.props.navigation.navigate('TelaDeTarefas');
                        this.setState({ email: '' })
                    })
                    .catch(err => {console.log(err); Alert.alert('Dados inválidos')})
                }>
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.cadastro} style={styles.buttomCadastro}>
                    <Text style={styles.textCadastro}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Login