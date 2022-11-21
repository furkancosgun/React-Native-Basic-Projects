import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import CommentCard from './src/components/CommentCard'

const data = [{
  comment: "Odaklanmak, 1000 iyi fikre hayır diyebilmektir.",
  name: "Steve Jobs"
}, {
  comment: "Kod yalan söylemez, yorumlar bazen söyler.",
  name: "Ron Jeffries"
}, {
  comment: "İnsanlar, yazılımın ürün olmadığını, ürün üretmek için kullanıldığını anlayacaklar.",
  name: "Linus Torvalds"
}]

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        data.map((val, i) => (<CommentCard key={i} comment={val.comment} name={val.name} />))
      }
    </SafeAreaView>
  )
}

export default App