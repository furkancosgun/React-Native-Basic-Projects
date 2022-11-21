import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: 150,
        margin: 10,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "#90caf9",
        borderWidth: 5
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 10
    }, comment: {
        padding: 10,
        fontSize: 15,
        fontWeight: "700"
    }, footer: {
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1,
        backgroundColor: "#64b5f6"
    }
}
)