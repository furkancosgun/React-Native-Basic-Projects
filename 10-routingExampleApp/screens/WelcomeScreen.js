import {StyleSheet, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
        Hello Welcome to Routing Example App
      </Text>
      <Button
        title="Go Second Page For Inputs"
        onPress={() => navigation.navigate('signup')}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
