import React, {  useState } from 'react'
import { Text,View, TextInput,StyleSheet, Button,ActivityIndicator } from 'react-native'

const LoginForm = ({setLoad, showLoad}) => {
       
        return (    
             <View style = {styles.container}>

<TextInput style = {styles.input} 
               autoCapitalize="none" 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               selectionColor='#FFF'
               placeholder='User'
               placeholderTextColor='rgba(225,225,225,0.7)'/>
               

<TextInput style = {styles.input}   
               placeholder='Password' 
               selectionColor='#FFF'
              placeholderTextColor='rgba(225,225,225,0.7)' 
              secureTextEntry/>

        <Button style={styles.buttonText} 
                    title="Login"
                    color='rgba(100,120,180,0.9)'
                     onPress={()=> setLoad()}>
        </Button>
        </View>
        )}

// define your styles
const styles = StyleSheet.create({
    viewContainer:{

    },
    formContainer:{
        alignItems: 'center',
        flexGrow: 1,
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        justifyContent: 'center',
        flex: 1,
     padding: 20,
     width: 300
    },

    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 8,
        padding: 10,
        borderRadius:15,
        color: '#fff'
    },

    buttonText:{
        color: '#fff',
        zIndex:0,
        textAlign: 'center',
        fontWeight: '700'
    }
})
export default LoginForm;
