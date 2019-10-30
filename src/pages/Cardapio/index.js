import React from 'react';
import {
    FlatList, StyleSheet, Text, View, StatusBar,
  } from 'react-native';
  import {  useSelector } from 'react-redux'


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
        fontSize: 31,
        alignItems: 'center',
      },

})

function Item({title}) {


    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

const Cardapio = ({navigation}) => 
{   
     const estado = useSelector(state => state.category);
     console.log(estado)
     const category = estado.category;
    return(
<View 
    style={styles.container}
    resizeMode="cover"
    >
        <View></View>
     <FlatList
        data={category}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

</View>)}
    ;

export default Cardapio;
