import React from 'react';
import {
    FlatList,Button, StyleSheet, Text, View, StatusBar,
  } from 'react-native';
  import {  useSelector, useDispatch } from 'react-redux'
  import {Creators} from '../../store/ducks/category'


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
      <View 
      onStartShouldSetResponder={()=>''} style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

const Cardapio = ({navigation}) => 
{   
     const category = useSelector(state => state.category);
     const dispatch = useDispatch();
     
    return(
<View 
    style={styles.container}
    resizeMode="cover"
    >
            <Button style={styles.buttonText} 
                    title="addburger"
                    color='rgba(100,120,180,0.9)'
                     onPress={()=> dispatch(Creators.addCategory("Burger"))}></Button>

     <FlatList
        data={category}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

</View>)}
    ;

export default Cardapio;
