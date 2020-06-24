import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'column'
    },
    buttomLogin:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#993399',
        borderRadius: 60,
        height: 40,
        width: 100,
        alignItems: 'center'

    },
    buttomCadastro:{
        marginTop: 20,
        padding: 10
    },
    textCadastro:{
        color: '#993399'
    },
    textLogin:{
        color: '#ffffff'
    },
    logo:{
        marginBottom: 100,
        width: 150,
        height: 150
    },
    input:{
        marginTop: 10,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        paddingLeft: '2%',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 30
    },
    checklist:{
        flex:7,
        width: '100%',
    },
    upImage:{
        flex: 3,
        backgroundColor: '#993399',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textWelcome:{
        color:'#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textDate:{
        color:'#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 1,
        marginTop: 27
    },
    arbyte:{
        justifyContent: 'flex-start',
        margin: 8,
        height:20,
        width:100
    }
})

export default styles