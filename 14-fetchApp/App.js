import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const App = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [url, setUrl] = useState('');
  async function fetchUrl() {
    const {data} = await axios.get(url);
    setFetchedData(JSON.stringify(data, null, 2));
  }
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          placeholderTextColor="white"
          onChangeText={setUrl}
          placeholder="Url..."
          style={style.url}
        />
        <TouchableOpacity onPress={() => fetchUrl()}>
          <Text style={style.runBtn}>RUN</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={style.dataView}>{fetchedData}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  url: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
    borderColor: 'white',
    placeholderTextColor: 'white',
  },
  dataView: {
    padding: 10,
    fontSize: 20,
    color: 'white',
  },
  runBtn: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default App;
