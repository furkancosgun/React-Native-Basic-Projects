import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.title}>{count}</Text>
      </View>
      <TouchableOpacity onPress={() => setCount((prev) => prev + 1)}><Text style={style.descText}>Press Me</Text></TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  title: {
    fontSize: 100,
    fontWeight: '900',
  },
  descText: {
    color: 'blue',
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default App;
