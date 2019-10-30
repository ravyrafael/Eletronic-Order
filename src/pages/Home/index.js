import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Text, StyleSheet, View, Dimensions,
  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

  const {height, width} = Dimensions.get('window');
// import { Container } from './styles';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    }, 
    placeContainer:{
        width:'100%',
        flex: 1,

      }, 
      rowView:{
        marginVertical:10,
        marginHorizontal: 20,
        flexDirection:'row'
      },
    placeView:{
        
        width:(width-40)/2,
        height: height /  8,
        marginHorizontal: 0,

        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
      },
      rigthView:{
        backgroundColor: '#AAAA63',
      },
      
      leftView:{
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: '#FBAA63',
      },
      title: {
        fontSize: 17,
        fontWeight: 'bold'

      },

})


const HomePage = ({navigation}) => 

<ScrollView
style={styles.placeContainer}
scrollEnabled
>
 <View style={styles.rowView}>
  <View style={[styles.placeView, styles.leftView]}  onStartShouldSetResponder={()=> navigation.navigate('Cardapio')}>
    <Text style={styles.title}><Icon name="md-bookmarks" size={30} color="#000000" /> { ' Cardápio'}</Text>
  </View>
    <View style={[styles.placeView, styles.rigthView]}>
        <Text style={styles.title}><Icon name="md-bookmarks" size={30} color="#000000" /> { ' Comandas'}</Text>
    </View>
  </View>
  <View style={styles.rowView}>
  <View style={[styles.placeView, styles.leftView]}  onStartShouldSetResponder={()=> {console.log('bla') ;navigation.navigate('Cardapio')}}>
    <Text style={styles.title}><Icon name="md-bookmarks" size={30} color="#000000" /> { ' Cardápio'}</Text>
  </View>
    <View style={[styles.placeView, styles.rigthView]}>
        <Text style={styles.title}><Icon name="md-bookmarks" size={30} color="#000000" /> { ' Comandas'}</Text>
    </View>
  </View>
  <View style={styles.rowView}>
  <View style={[styles.placeView, styles.leftView]}  onStartShouldSetResponder={()=> {console.log('bla') ;navigation.navigate('Cardapio')}}>
    <Text style={styles.title}><Icon name="md-bookmarks" size={30} color="#000000" /> { ' Cardápio'}</Text>
  </View>
    <View style={[styles.placeView, styles.rigthView]}>
        <Text style={styles.title}><Icon name="md-bookmarks" size={30} color="#000000" /> { ' Comandas'}</Text>
    </View>
  </View>
  

</ScrollView>

export default HomePage;
