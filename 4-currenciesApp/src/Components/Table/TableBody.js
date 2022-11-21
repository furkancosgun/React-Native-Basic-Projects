import { View, Text } from 'react-native'
import React from 'react'
import Styles from './Styles'
const TableBody = ({ item }) => {
    return (
        <View style={Styles.bodyItem}>
            <View style={Styles.itemTitle}><Text style={Styles.itmeText}>{item.Isim}</Text></View>
            <View style={Styles.itemBuying}><Text style={Styles.itmeText}>{item.ForexBuying}</Text></View>
            <View style={Styles.itemSelling}><Text style={Styles.itmeText}>{item.ForexSelling}</Text></View>
        </View>
    )
}

export default TableBody