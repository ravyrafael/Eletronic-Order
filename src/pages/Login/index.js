import React ,{useState}from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text, ActivityIndicator, StyleSheet, Dimensions, Modal, StatusBar,
} from 'react-native';

import LoginForm from '~/components/LoginForm'
import firebase from 'firebase';
import category from '../../mocks/categoryMocks'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  loading:{
    zIndex:0,
    backgroundColor: 'rgba(225,225,225,0.8)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center', 
},
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const LoginPage = ({navigation}) => {

  const [showLoad, setLoad] = useState(false);
  const [error, setError] = useState("");


  var userAuth = (email, pass)=>{
    console.log(category)
    setLoad(true);
    setTimeout(() => {
      firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(value => {console.log(value);setError("");navigation.navigate('Home')})
      .catch(erro => {setError(erro.message);console.log(erro)})
      .finally(() =>setLoad(false));
    }, 500);



  }
  return(
  <>

  <LinearGradient
    colors={['#888AB3', '#FB9AB3']}
    style={styles.container}
    resizeMode="cover"
  >
  <Modal 
  visible={showLoad}          
   transparent={true}> 
   <ActivityIndicator style={styles.loading} size="large" color="#0000ff" /> 
  </Modal>
      <LoginForm navigation ={navigation} error={error} setError={setError} setLoad={userAuth}></LoginForm>
    
    <StatusBar barStyle="light-content" backgroundColor="#888AB2" />
   
  </LinearGradient>
  </>
);
}
export default LoginPage;
