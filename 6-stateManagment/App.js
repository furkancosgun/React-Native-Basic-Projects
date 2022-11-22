import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, StatusBar, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const data = ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
  "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale",
  "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum ", "Eskişehir",
  "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir",
  "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya ", "Malatya",
  "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya",
  "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon  ", "Tunceli", "Şanlıurfa", "Uşak",
  "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt ", "Karaman", "Kırıkkale", "Batman", "Şırnak",
  "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük ", "Kilis", "Osmaniye ", "Düzce"];



const Item = ({ title }) => (

  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {

  const [search, setSearch] = useState("Adana");
  const [list, setList] = useState(data)

  const searchItem = () => {
    if (search === "")
      setList(data);
    else
      setList(data.filter(dt => dt == search))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput style={styles.input} placeholder="İl Ara"
          value={search}
          onChangeText={setSearch} />
        <TouchableOpacity onPress={searchItem} >
          <Image source={{ uri: "https://reactnative.dev/img/search.png" }} style={styles.searchButton} />
        </TouchableOpacity>

      </View>
      <FlatList
        data={list}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={({ item }, index) => index}
      />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  searchArea: {
    margin: 10,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row"
  }, input: {

    color: "black",
    fontSize: 30,
    padding: 6,
    fontWeight: "bold",
    flex: 1
  }, searchButton: { margin: 10, tintColor: "black", width: 25, height: 25 }
});

export default App;