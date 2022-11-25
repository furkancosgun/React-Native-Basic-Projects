import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ListItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('detail', {id: item.id})}>
      <View style={style.mainContainer}>
        <Image source={{uri: item.image}} style={style.img} />
        <View style={style.descContainer}>
          <Text style={style.itemTitle}>{item.title}</Text>
          <Text style={{textAlign: 'right', fontWeight: 'bold'}}>
            {item.price}$
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    borderWidth: 2,
    flexDirection: 'row',
    padding: 5,
    margin: 5,
  },
  img: {
    resizeMode: 'contain',
    width: 100,
    minHeight: 100,
    borderRadius: 5,
  },
  descContainer: {
    margin: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  itemTitle: {fontSize: 15, fontWeight: 'bold'},
});
export default ListItem;
