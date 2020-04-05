import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Share,
    Clipboard
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import asteriscoImg from '../assets/imgs/asterisco.jpg'


export default class Asterisco extends Component {
    state = {
        text: '',
        result: ''
    }
    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              this.state.result,
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    }
    readFromClipboard = async () => {
        const clipboardContent = await Clipboard.getString()
        this.setState({ text: clipboardContent })
    }
    writeToClipboard = async () => {
        await Clipboard.setString(this.state.result);
        alert('Copiado com sucesso!');
    }
    funcTrocaAste = () => {
        let cont = 0
        let texto = this.state.text
        let result = ''
        while ( cont < texto.length ) {
            if ( texto[cont] === ' ') {
                result = result + texto[cont]
            }else{
                result = result + '*'
            }
            cont++
        }

        this.setState({ result })
    }

    render(){
        return(
            <ImageBackground source={asteriscoImg} style={styles.background} >
                <Text style={styles.title}>Digite o texto para transformar</Text>
                <TextInput placeholder='O texto para ser transformado' multiline={true} style={styles.input} value={this.state.text} onChangeText={text => this.setState({text})} />
                <TextInput placeholder='Resultado' multiline={true} style={styles.input} value={this.state.result} onChangeText={result => this.setState({result})} />
                <View style={styles.buttons}>
                   
                    <TouchableOpacity style={styles.button} onPress={this.onShare}> 
                        <Icon name='share' size={30} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.setState({ text: '', result: ''})}> 
                        <Icon name='trash' size={30} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.writeToClipboard}> 
                        <Icon name='copy' size={30} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.readFromClipboard}> 
                        <Icon name='paste' size={30} color='white'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsBig}>
                    <TouchableOpacity style={styles.buttonBig} onPress={this.funcTrocaAste}> 
                        <Text style={styles.buttonTextBig}>Transformar</Text>
                    </TouchableOpacity>
                </View>
                    
                
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        
        backgroundColor: 'blue'
    }, 
    title: {
        
        color: '#FFF',
        fontSize: 20,
        marginBottom: 10
    },
    
    input: {
        margin:10,
        backgroundColor: '#FFF',
        width: '90%',
        padding: 10,
        height: '20%'
        
    },
    button: {
        backgroundColor: '#222964',
        marginTop: 10,
        padding: 10,
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width:'25%',
        marginRight:5
    }, 
    buttonText: {
        
        color: '#FFF',
        fontSize: 18
    },
    buttons: {
        flexDirection:'row',
        marginHorizontal:10
    },
    buttonsBig:{
        width:'90%',
    },
    buttonTextBig:{
        color:'white',
        fontSize: 18
    },
    buttonBig: {
        backgroundColor: '#222964',     
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        borderRadius: 15
    }

})