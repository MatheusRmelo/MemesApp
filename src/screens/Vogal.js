import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Share
} from 'react-native'
import vogaisImg from '../assets/imgs/vogais.jpg'


export default class Vogal extends Component {
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
    
    funcTrocaVogais = () => {
        let cont = 0
        let texto = this.state.text
        let vogais = ['a','e','i','o','u']
        let vogaisM = ['A','E','I','O','U']
        let result = ''
        while ( cont < texto.length ) {
            if( vogais.indexOf(texto[cont]) !== -1 ){
                result = result + 'i'
                
            }else
            if( vogaisM.indexOf(texto[cont]) !== -1){
                result = result + 'I'
            }else {
                result = result + texto[cont]
            }
            cont++
        }

        this.setState({ result })
    }
  
    render(){
        return(
            <ImageBackground source={vogaisImg} style={styles.background} >
                <Text style={styles.title}>Digite o texto para transformar</Text>
                <TextInput placeholder='O texto para ser transformado' multiline={true} style={styles.input} value={this.state.text} onChangeText={text => this.setState({text})} />
                <TextInput placeholder='Resultado' multiline={true} style={styles.input} value={this.state.result} onChangeText={result => this.setState({result})} />
                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.button, {marginRight:10 }]} onPress={this.onShare}> 
                        <Text style={styles.buttonText}>Compartilhar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.setState({ text: ''})}> 
                        <Text style={styles.buttonText}>Limpar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsBig}>
                    <TouchableOpacity style={styles.buttonBig} onPress={this.funcTrocaVogais}> 
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
        width:'45%'
    }, 
    buttonText: {
        
        color: '#FFF',
        fontSize: 18
    },
    buttons: {
        flexDirection:'row'
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