import { StyleSheet, Dimensions } from "react-native"
export default StyleSheet.create({
    itemTitle: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "left",
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    itemStock: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    itemPrice: {
        fontSize: 13,
        color: "black",
        textAlign: "left",
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    itemImage: {
        width: 150,
        height: 200,
        resizeMode: "cover"
    },
    itemContainer: {
        backgroundColor: "#D6E4ee",
        alignItems: "center",
        width: Dimensions.get("screen").width / 2 - 20,
        margin: 10
    },
})