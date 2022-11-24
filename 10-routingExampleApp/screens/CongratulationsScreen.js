import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const CongratulationsScreen = ({route}) => {
  const {name, surname, age} = route.params.user;
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <Text style={style.title}>Congratulations</Text>
      <Text style={style.title}>SignUp is Done</Text>
      <View style={{height: 2, backgroundColor: 'black', margin: 10}} />
      <Text style={style.dataText}>Name: {name}</Text>
      <Text style={style.dataText}>Surname: {surname}</Text>
      <Text style={style.dataText}>Age: {age}</Text>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  dataText: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default CongratulationsScreen;
