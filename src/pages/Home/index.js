import React from 'react';
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
    placeView:{
        width: width - 40,
        maxHeight: 200,
        backgroundColor: 'gray',
        marginHorizontal: 20,
        marginVertical:20
      },
      title: {
        fontSize: 32,
      },

})


const HomePage = () => 

<ScrollView
style={styles.placeContainer}
scrollEnabled
>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 1`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 2`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 3`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 4`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 5`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 6`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 7`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 8`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 9`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 10`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 11`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 12`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 13`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 14`}</Text>
  </View>
  <View style={styles.placeView}>
    <Text style={styles.title}>{`ID: 15`}</Text>
  </View>

</ScrollView>

export default HomePage;
