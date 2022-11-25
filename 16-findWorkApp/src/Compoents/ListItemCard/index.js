import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const index = ({navigation, item}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('detail', {id: item.id})}>
      <View
        style={{
          borderColor: 'grey',
          margin: 10,
          borderWidth: 1,
          backgroundColor: 'white',
          minHeight: 100,
          padding: 5,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
        <Text style={{fontSize: 15}}>Type: {item.type}</Text>

        <Text
          style={{
            fontSize: 15,
            paddingVertical: 2,
          }}>
          Location :{item.locations[0].name}
        </Text>
        <Text style={{fontSize: 15, textAlign: 'right'}}>
          Level: {item.levels[0].name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default index;
