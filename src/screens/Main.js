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


export default class Main extends Component {
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
    funcMaisculo = () => {
        let cont = 0
        let texto = this.state.text
        let result = ''
        while ( cont < texto.length ){
            if(cont % 2 ) {
                result = result + texto[cont].toUpperCase()
            }else {
                result = result + texto[cont].toLowerCase()
            }
            cont++
        }

        this.setState({ result })
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
            <View style={styles.background} >
                <Text style={styles.title}>Digite o texto para transformar</Text>
                <TextInput multiline={true} style={styles.input} value={this.state.text} onChangeText={text => this.setState({text})} />
                <TextInput multiline={true} style={styles.input} value={this.state.result} onChangeText={result => this.setState({result})} />
                <TouchableOpacity style={styles.button} onPress={this.onShare}> 
                    <Text style={styles.buttonText}>Compartilhar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.setState({ text: ''})}> 
                    <Text style={styles.buttonText}>Limpar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.funcTrocaAste}> 
                    <Text style={styles.buttonText}>Transformar</Text>
                </TouchableOpacity>
            </View>
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
        justifyContent: 'center',
        backgroundColor: '#554E7D'
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
        height: '25%'
        
    },
    button: {
        backgroundColor: '#222964',
        marginTop: 10,
        padding: 10,
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    }, 
    buttonText: {
        
        color: '#FFF',
        fontSize: 20
    }

})