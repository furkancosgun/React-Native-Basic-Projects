import { Text, SafeAreaView, TextInput, StyleSheet, FlatList, Image, View, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import Json_Data from "./src/ShopList.json"
import Item from './src/ShoopingCard';

const App = () => {
  const [search, setSearch] = useState("text");
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.appBarTitle}>Shooping App</Text>
        <TextInput style={style.searchInput} onChangeText={setSearch} placeholder={"Search Here"} />
      </View>
      <FlatList
        numColumns={2}
        data={Json_Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} />

    </SafeAreaView>
  )
}



const style = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 32,
  },
  appBarTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "purple"
  },
  searchInput: {
    fontSize: 20,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    margin: 10
  }
})


export default App;