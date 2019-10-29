import React from 'react';
import {
    FlatList, StyleSheet, Text, View, StatusBar,
  } from 'react-native';
import CATEGORY from '~/mocks/categoryMocks'
// import { Container } from './styles';
const styles = StyleSheet.create({
    container: {
        flex: 1,
            paddingHorizontal: 20,
    },  
    item: {
        backgroundColor: 'gray',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
        alignItems: 'center',
      },

})

function Item({title}) {
    console.log(title)
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
const HomePage = () => 

<View 
    style={styles.container}
    resizeMode="cover">
     <FlatList
        data={CATEGORY}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

</View>
    ;

export default HomePage;
