import React from 'react';

import { Button, StyleSheet } from 'react-native';

// import { Container } from './styles';
const styles = StyleSheet.create({
    buttonText:{
        color: '#fff',
        zIndex:0,
        textAlign: 'center',
        fontWeight: '700'
    }
})
const CustonBtn = ({color, title, onPress}) =>      
   <Button style={styles.buttonText} 
                title={title}
                color={color}
                onPress={onPress}>
    </Button>;

export default CustonBtn;
