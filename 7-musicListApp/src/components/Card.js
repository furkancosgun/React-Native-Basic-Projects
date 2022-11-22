import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

const Card = ({ item }) => {
    return (
        <View style={style.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={style.avatar} />
            <View style={{ justifyContent: "center", width: Dimensions.get("screen").width / 1.7 }}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <View>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.artist}</Text>
                            <Text style={style.textYear}>{item.year}</Text>
                        </View>
                    </View>
                </View>
            </View>
            {
                !item.isSoldOut ? <Text style={style.soldOut}>Tukendi</Text> : ""
            }
        </View>
    )
}

const style = StyleSheet.create({
    avatar: {
        width: 120,
        height: 120,
        resizeMode: "cover",
        borderRadius: 120,
        margin: 10
    },
    itemContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
    },
    soldOut: {
        borderWidth: 1,
        padding: 5,
        position: "absolute",
        bottom: 10,
        color: "red",
        right: 10,
        borderColor: "red"
    },
    textYear: {
        fontSize: 13,
        fontWeight: "bold",
        color: "grey",
        marginHorizontal: 10
    }
})

export default Card