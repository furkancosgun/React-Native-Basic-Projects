import { View, Text, SafeAreaView, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { primaryColor, primaryColorDark, primaryColorLigth } from './src/Color';
import Currencies from "./src/Currencies.json";
import TableHeader from './src/Components/Table/TableHeader';
import TableBody from "./src/Components/Table/TableBody";
const App = () => {
  const renderBody = ({ item }, index) => <TableBody key={index} item={item} />
  //Bu işlemi dışarı alarak performansı artırmış olduk eger içeride yapsaydık 
  //200 tane verimiz varsa 200 tane arrow func oluştrurup render etcekti
  //Flat list ile data parse yaparken parse edilen data item olarak doner bize
  const renderKey = (item, index) => item.id;
  //keu extructor içide aynı sonuc gecerlidir
  return (
    <SafeAreaView style={style.container}>
      <TableHeader />




      <View style={style.body}>
        <FlatList
          ListHeaderComponent={<ScrollView>
            <Text></Text>
          </ScrollView>}
          keyExtractor={renderKey}//Her zaman keyleme yapılması tavsiye edilir
          //ekrana neyin yuklenip neyin yuklenmeycegini anlamak için kullanılır
          data={Currencies}
          renderItem={renderBody} />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }, body: {
    flex: 10
  },
})

export default App