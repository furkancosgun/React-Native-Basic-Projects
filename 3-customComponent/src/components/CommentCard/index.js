import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import style from './Style';
const CommentCard = ({ name, comment }) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>{name}</Text>
            <Text style={style.comment}>{comment}</Text>
            <View style={style.footer} ><Text>CUSTOM CONTAİNER</Text></View>
        </View>
    )
}

export default CommentCard