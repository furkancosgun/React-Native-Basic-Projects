import {
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import useFetch from '../../Hooks/useFetch';

const DetailPage = ({route}) => {
  const {id} = route.params;
  const {data, loading} = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <View style={{margin: 15, flex: 1}}>
      {loading ? (
        <ActivityIndicator color={'black'} />
      ) : (
        <View style={{flex: 1}}>
          <ScrollView>
            <Image source={{uri: data.image}} style={style.img} />

            <View style={{flex: 1, padding: 10}}>
              <Text style={style.title}>{data.title}</Text>
              <Text style={style.description}>{data.description}</Text>
              <Text style={style.textOthers}>
                Rating Count: {data.rating.count}
              </Text>
              <Text style={style.textOthers}>Rating: {data.rating.rate}/5</Text>
              <Text style={style.price}>Price {data.price}$</Text>
              <TouchableOpacity style={style.btn}>
                <Text>Add To Chart</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  img: {
    borderWidth: 1,
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 30,
    height: Dimensions.get('screen').height / 2,
    resizeMode: 'contain',
  },
  title: {fontWeight: 'bold', fontSize: 25, paddingBottom: 20},
  description: {fontSize: 12, fontWeight: '600', paddingBottom: 10},
  textOthers: {fontWeight: '700', fontSize: 14},
  price: {fontWeight: '700', fontSize: 14, textAlign: 'right', padding: 10},
  btn: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    borderWidth: 1,
  },
});
export default DetailPage;
