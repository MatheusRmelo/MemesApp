import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    return (
        <View style={styles.button}>
            <Icon name="cogs" size={30} color='white' />
            <Text style={styles.buttonText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})
