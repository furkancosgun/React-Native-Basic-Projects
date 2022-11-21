import { View, Text } from 'react-native'
import React from 'react'
import Styles from './Styles'
const TableHeader = () => {
    return (
        <View style={Styles.header}>
            <Text style={Styles.headerTitle}>Para Birimi</Text>
            <Text style={Styles.headerTitle}>Alış</Text>
            <Text style={Styles.headerTitle}>Satış</Text>
        </View>
    )
}

export default TableHeader