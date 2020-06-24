import React, {Component} from 'react'
import{
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native'
import styles from '../Styles'

class Register extends Component {
    state = {
        name: '',
        email: ''
    }
    
    login = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source = {{uri: 'https://cdn.awsli.com.br/600x450/321/321815/produto/33953213/d2911b5eea.jpg'}}/>
                <TextInput placeholder='Nome' style={styles.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText={name => this.setState({name})} />
                <TextInput placeholder='Email' style={styles.input}
                    value={this.state.email} keybordtype='email-adress'
                    onChangeText={email => this.setState({email})} />
                <TouchableOpacity onPress={this.login} style={styles.buttomLogin}>
                    <Text style={styles.textLogin}>Cadastrar</Text>
                </TouchableOpacity>   
            </View>
        )
    }
}

export default Register