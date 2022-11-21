import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.top} >
        <Text style={style.title}>React-Native</Text>
      </View>
      <View style={style.middle} >
        <Text style={style.title}>'de</Text>
      </View>
      <View style={style.end} >
        <Text style={style.title}>Birinci Günüm</Text>
      </View>
      <View style={style.modeRow}>
        <View style={style.end}></View>
        <View style={style.end}></View>
        <View style={style.end}></View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    justifyContent: "space-between"
  },
  top: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 20,
    backgroundColor: "lightblue",
    borderColor: "black",
    borderWidth: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  middle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "pink",
    borderColor: "black",
    borderWidth: 6,
    margin: 20
  },
  end: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "grey",
    borderWidth: 6,
    margin: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  modeRow: {//flex directiobn satır gibi (yan yana)//yoksa colon gibi(ust uste)
    flex: 1,
    flexDirection: "row"
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold"
  }
})

export default App