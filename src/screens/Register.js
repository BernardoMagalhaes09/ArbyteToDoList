import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native'
import styles from '../Styles'
import userRegister from '../api/cadastro'
import 'react-native-gesture-handler'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={{ uri: 'https://cdn.awsli.com.br/600x450/321/321815/produto/33953213/d2911b5eea.jpg' }} />
                <TextInput placeholder='Nome' style={styles.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText={name => this.setState({ name })} />
                <TextInput placeholder='Email' style={styles.input}
                    value={this.state.email} keybordtype='email-adress'
                    onChangeText={email => this.setState({ email })} />
                <TouchableOpacity style={styles.buttomLogin} 
                    onPress={() => userRegister(this.state.name, this.state.email)
                    .then(res => { Alert.alert('Você finalizou seu cadastro'); this.props.navigation.navigate('Login');
                    this.setState({email: ''}); this.setState({name: ''})})
                    .catch(err => { Alert.alert('Seus dados estão inválidos')})}>
                    <Text style={styles.textLogin}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Register