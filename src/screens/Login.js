import React, {Component} from 'react'
import{
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native'
import styles from '../Styles'

class Login extends Component {
    state = {
        email: '',
        name: ''
    }
    
    login = () => {
        this.props.navigation.navigate('Perfil')
    }

    cadastro = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source = {{uri: 'https://cdn.awsli.com.br/600x450/321/321815/produto/33953213/d2911b5eea.jpg'}}/>
                <TextInput placeholder='Email' style={styles.input}
                   value={this.state.email} onChangeText={email => this.setState({email})}
                   keybordtype='email-adress' />
                <TouchableOpacity onPress={this.login} style={styles.buttomLogin}>
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