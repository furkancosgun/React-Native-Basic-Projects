import { SafeAreaView, TextInput, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import DATA from "./src/musicData.json";
import Card from './src/components/Card';
const App = () => {
  const [search, setSearch] = useState("");
  const [musics, setMusics] = useState(DATA);
  useEffect(() => {
    if (search == "") {
      setMusics(DATA)
    } else {
      setMusics(DATA.filter((dt) => dt.title.includes(search)));
    }
  }, [search])

  const renderItem = ({ item }) => (
    <Card item={item} />
  );
  return (
    <SafeAreaView>
      <TextInput
        onChangeText={setSearch}
        placeholder="Search Music"
        style={style.searchBar}
        value={search} />
      <FlatList keyExtractor={(item) => item.id} data={musics} renderItem={renderItem} />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
})
export default App